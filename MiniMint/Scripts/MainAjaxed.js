/// <reference path="jquery-1.3.2-vsdoc.js" />
/// <reference path="MicrosoftAjax.debug.js" />

/// <reference path="JqueryPlugin/jquery.MicrosoftAjax.js" />
/// <reference path="MicrosoftAjaxTimer.debug.js" />
/// <reference path="MicrosoftAjaxWebForms.debug.js" />
/// <reference path="AjaxCT/AjaxControlToolkit.ExtenderBase.BaseScripts.js" />
/// <reference path="AjaxCT/AjaxControlToolkit.Common.Common.js" />
/// <reference path="AjaxCT/AjaxControlToolkit.Animation.Animations.js" />
/// <reference path="AjaxCT/AjaxControlToolkit.AlwaysVisibleControl.AlwaysVisibleControlBehavior.js" />
/// <reference path="AjaxCT/AjaxControlToolkit.RoundedCorners.RoundedCornersBehavior.js" />
/// <reference path="AjaxCT/AjaxControlToolkit.Compat.Timer.Timer.js" />
/// <reference path="AjaxCT/AjaxControlToolkit.DropShadow.DropShadowBehavior.js" />

var activeDelLink;
$().ready(function() {
    $(".deleteLink").live("click", function(evnt) {
        evnt.preventDefault();
        activeDelLink = $(evnt.target);
        var url = $(activeDelLink).attr("href");
        var qs = "";
        if (confirm("Deleting entry. Press cancel to stop processing.")) {
            WeAreBusy();
            $.get(url, qs, function(content) {
                $("#MessageArea").html(content);
                WeAreNotBusy();
                if (activeDelLink == null) return;
                activeDelLink.parent().parent().remove();
                activeDelLink = null;
            });
        }
        return false;
    });

    // Additional code goes here
    $("form[0]").submit(function() {
        //evnt.preventDefault();
        var theForm = $("form[0]");
        var action = theForm.attr("action");
        var postData = theForm.serialize(); // if there is no name field it won't be serialized

        $.ajax(
            {
                type: "POST",
                url: action,
                data: postData,
                success: submit_complete
            });
        return false;
    });
});

function submit_complete(result, status) { // status is not returned and only success will be hit
                    if (result.toString().length == 0) {
                        alert("Unknown problem kept your new entry from being created");
                        return;
                    }
                    var o = Sys.Serialization.JavaScriptSerializer.deserialize(result.toString());
                    if (o == null) {
                        alert("Unknown problem (no object) kept your new entry from being created");
                        return;
                    }
                    if (typeof (o.Register) == "undefined" || o.Register == null) {
                        alert("Save failed. The following error occurred:\n" + o.Message);
                        return;
                    }
                    WeAreNotBusy();
                    var newRowStringFormat = "<tr>" + $("#template").clone().html() + "</tr>";
                    newRowStringFormat = unescape(newRowStringFormat); // the url in the A gets mangled/url encoded so we need to unescape it
                    var allRows = "";
                    var aR = o.Register;
                    var accountsToUpdate = "";
                    for (var idx = 0; idx < aR.length; idx++) {
                        var r = aR[idx];

                        // It's possible that you may still end up with already shown data we'll look for the ID in the
                        // HTML DOM and if it exists we'll skip it
                        if ($("#r" + r.RegistryId).length <= 0) {
                            var newRowString = String.format(newRowStringFormat, r.RegistryId, String.format("{0:d}", r.EntryDate), r.RegistryDesc, r.AccountName, r.CategoryName, (-1 * r.RegistryAmount));
                            allRows += newRowString
                            // Comment for faster version
                            var newRow = $(newRowString);
                            newRow.insertAfter("#template").fadeIn("slow");
                            newRow = null;
                            // end comment for faster version

                            // We'll also track which accounts we've used so we can only update those accounts that we've changed
                            if (accountsToUpdate.indexOf(r.AccountName + "|") < 0) {
                                accountsToUpdate += r.AccountName + "|";
                            }
                        }
                        r = null;
                    }
                    $("#LastRetrieved").get(0).value = o.LastRetrieve;
                    // Faster Version (uncomment below)
                    //var allRowsQ = $(allRows).insertAfter("#template").filter("TR").css("display", "none");
                    //allRowsQ.ready(function() { allRowsQ.filter("TR").fadeIn("slow"); allRowsQ = null; });
                    // end Faster Version 

                    // Next we need to reset the form
                    $("form[0]").get(0).reset();

                    // We should also up update the accounts
                    updateAccounts(o, accountsToUpdate);
                    allRows = null;
                    aR = null;
                    result = "";
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

function WeAreBusy() {
            $("#ajaxLoaderImage").removeClass("notbusy");
            $("#ajaxLoaderImage").addClass("busy");
}
function WeAreNotBusy() {
            $("#ajaxLoaderImage").removeClass("busy");
            $("#ajaxLoaderImage").addClass("notbusy");
}

// Cheat Sheet
// ID's
// -----------
// ajaxLoaderImage is the activity image
// MessageArea is where we display message to the user
// MainContent is the div containing all content
// AccountTable is the div containing the account information
// AccountTableActual is the table containing the account information
//   Each row in the above has an ID that matches the account name (with spaces turned to "_")
// CheckRegistry is the table containing the checkbook stuff
//   RegistryLabelRow is the header row of the check registry
//   RegistryCreateRow is the row containing our add form elements
//      Who is the text field for the description (bad name I know)
//      AccountID is the drop down for the account
//      RegisterCategoryId is the drop down for the transaction category
//      Amount is the field for the transaction amount
//      Add is the submit button for this form
//   r{RegistryId} is the table cell containing the delete link
//     deleteLinkItem{RegistryId} is the delete link (delete links are bad in public web sites)
//   template is an invisible row that we'll use to string.format ourselves a new row where:
//       0 - RegistryID
//       1 - EntryDate
//       2 - Description
//       3 - AccountName
//       4 - Category
//       5 - Amount
// -----------
// css
// -----------
// .deleteLink is the style for all links that call delete
// .busy is the style to show the loading image (visibility = show)
// .notbusy is the style to hide the loading image (visibility = hidden)
// .breakLayout does a clear=both