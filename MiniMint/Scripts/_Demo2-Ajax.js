/// <reference path="jquery-1.3.2-vsdoc.js" />
/// <reference path="MicrosoftAjax.debug.js" />
/// <reference path="_Demo1.js" />

var activeDelLink;
$().ready(function() {
    $("form[0]").submit(function() {
        //evnt.preventDefault();
        var theForm = $("form[0]");
        var action = theForm.attr("action");
        var postData = theForm.serialize(); // if there is no name field it won't be serialized
        // serialize misses these items.. so we grab it separately (and we add this later)
        if (postData.indexOf("EntryDate") < 0 &&
            $("#tbEntryDate").length > 0)
            postData += "&EntryDate=" + escape($("#tbEntryDate").get(0).value);
        if (postData.indexOf("RegisterCategoryName") < 0 &&
            $("#tbRegisterCategoryName").length > 0)
            postData += "&RegisterCategoryName=" + escape($("#tbRegisterCategoryName").get(0).value);
        if (postData.indexOf("AccountID") < 0 &&
            $("#AccountID").length > 0) {
            var selectBox = $("#AccountID").get(0);
            alert(selectBox.options[selectBox.selectedIndex].value);
            postData += "&AccountID=" + escape(selectBox.options[selectBox.selectedIndex].value);
        }
        $.ajax({
            type: "POST",
            url: action,
            data: postData,
            success: submit_complete
        });
        return false;
    });
});

function submit_complete(result, status) { // status is not returned and only success will be hit
    var oResult = validateAndParseResult(result);

    WeAreNotBusy();
    var accountsToUpdate = createNewRegistryRowsAndReturnAccountsToUpdate(oResult);

    $("#LastRetrieved").get(0).value = oResult.LastRetrieve;

    // Next we need to reset the form
    $("form[0]").get(0).reset();

    // We should also up update the accounts (but just the ones whose data has changed)
    updateAccounts(oResult, accountsToUpdate);
    result = "";
}

function validateAndParseResult(result) {
    if (result.toString().length == 0) {
        alert("Unknown problem kept your new entry from being created");
        return null;
    }
    var o = Sys.Serialization.JavaScriptSerializer.deserialize(result.toString());
    if (o == null) {
        alert("Unknown problem (no object) kept your new entry from being created");
        return null;
    }
    if (typeof (o.Register) == "undefined" || o.Register == null) {
        alert("Save failed. The following error occurred:\n" + o.Message);
        return null;
    }
    return o;
}

function createNewRegistryRowsAndReturnAccountsToUpdate(o) {
    var accountsToUpdate = "";
    
    // We have a hidden row that holds a template for row data
    var newRowStringFormat = "<tr>" + $("#template").clone().html() + "</tr>";
    newRowStringFormat = unescape(newRowStringFormat); // the url in the A gets mangled/url encoded so we need to unescape it
    var allRows = "";
    var aRegister = o.Register;
    alert(aRegister.length);
    for (var idx = 0; idx < aRegister.length; idx++) {
        var regEntry = aRegister[idx];

        // It's possible that you may still end up with already shown data we'll look for the ID in the
        // HTML DOM and if it exists we'll skip it
        if ($("#r" + regEntry.RegistryId).length <= 0) {
            var newRowString = String.format(newRowStringFormat, regEntry.RegistryId, String.format("{0:d}", regEntry.EntryDate), regEntry.RegistryDesc, regEntry.AccountName, regEntry.CategoryName, (-1 * regEntry.RegistryAmount));
            allRows += newRowString
            // Comment for faster version
            var newRow = $(newRowString);
            newRow.insertAfter("#template").fadeIn("slow");
            newRow = null;
            // end comment for faster version

            // We'll also track which accounts we've used so we can only update those accounts that we've changed
            if (accountsToUpdate.indexOf(regEntry.AccountName + "|") < 0) {
                accountsToUpdate += regEntry.AccountName + "|";
            }
        }
        regEntry = null;
    }
    // Faster Version (uncomment below)
    //var allRowsQ = $(allRows).insertAfter("#template").filter("TR").css("display", "none");
    //allRowsQ.ready(function() { allRowsQ.filter("TR").fadeIn("slow"); allRowsQ = null; });
    // end Faster Version

    allRows = null;
    aRegister = null;

    return accountsToUpdate;
}

function updateAccounts(o, accountsToUpdate) {
    var aAcc = o.Accounts;
    var aAccUsed = accountsToUpdate.split('|'); // we have one extra empty item in our array
    for (var idx = 0; idx < aAcc.length; idx++) {
        var a = aAcc[idx];
        if (aAccUsed != null && Array.indexOf(aAccUsed, a.AccountName) > -1) {

            $("#" + a.AccountName.replace(" ", "_") + " > *:last").html("$" + String.format("{0}", a.CurrentTotal));
        }
    }
    aAccUsed = null;
    aAcc = null;
}
