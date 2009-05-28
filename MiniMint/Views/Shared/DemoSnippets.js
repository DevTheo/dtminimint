// Demo 1 - Simple Jquery selectors

    /* Goes in #HtmlHeadArea
        <script src="../../Scripts/MicrosoftAjax.js" type="text/javascript"></script>
        <script src="../../Scripts/jquery-1.3.2.debug.js" type="text/javascript"></script>
    */
    /* Goes in #ScriptArea
        <script src="../../Scripts/MainAjaxed.js" type="text/javascript"></script>
    */

//     ---  First Set of Script Code in MainAjaxed.js ---
$().ready(function() {
    $(".deleteLink").click(function() {
        return confirm("Deleting this item. Press cancel to stop processing.");
    });
});

// End Demo 1 - Simple Jquery selectors

// Demo 1a - Cleaning up that funky URL (with some simple ajax)
var activeDelLink;
$().ready(function() {
    $(".deleteLink").click(function(evnt) {
        evnt.preventDefault();
        activeDelLink = $(evnt.target);
        var url = $(activeDelLink).attr("href");
        var qs = "";
        if (confirm("Deleting entry. Press cancel to stop processing.")) {
            $("#ajaxLoaderImage").removeClass("notbusy");
            $("#ajaxLoaderImage").addClass("busy");
            $.get(url, qs, function(content) {
                $("#MessageArea").html(content);
                $("#ajaxLoaderImage").removeClass("busy");
                $("#ajaxLoaderImage").addClass("notbusy");
                if (activeDelLink == null) return;
                activeDelLink.parent().parent().remove();
                activeDelLink = null;
            });
        }
        return false;
    });
});
// Additional code goes here

// end Demo 1a - Cleaning up that funky URL



// Demo2 - Deeper Ajax - Post 
// (put this after the last one in the ready function)
$("form[0]").submit(function() 
    {
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
// End Demo2 - Deeper Ajax



// Demo 3a - Plugins.. AjaxCT with jquery
/*
    <script src="../../Scripts/JqueryPlugin/jquery.MicrosoftAjax.js" type="text/javascript"></script>
    
    <script src="../../Scripts/MicrosoftAjaxTimer.debug.js" type="text/javascript"></script>    
    <script src="../../Scripts/MicrosoftAjaxWebForms.debug.js" type="text/javascript"></script>    
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.ExtenderBase.BaseScripts.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.Common.Common.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.Animation.Animations.js" type="text/javascript"></script>
    <script src="../../Scripts/AjaxCT/AjaxControlToolkit.AlwaysVisibleControl.AlwaysVisibleControlBehavior.js" type="text/javascript"></script>
*/
// Add to top for intellisense
// ------------------------------
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

// The following goes on about line 32
// Plugin fun
$("#AccountTableActual").create(AjaxControlToolkit.DropShadowBehavior,
                                { Opacity: 0.5,
                                    Rounded: true,
                                    TrackPosition: true,
                                    Width: 5
                                });
$("#AccountTable").create(AjaxControlToolkit.AlwaysVisibleControlBehavior,
                                { VerticalSide: 0,
                                    HorizontalSide: 2,
                                    VerticalOffset: "90",
                                    HorizontalOffset: "70",
                                    ScrollEffectDuration: ".1"
                                });

// end Demo 3a - Plugins.. AjaxCT with jquery



// Demo 3b - Plugins.. Validation/maskedit

// End Demo 3b - Plugins.. Validation/maskedit


// Demo 3c - Plugins.. Category to Autocomplete

// End Demo 3c - Plugins.. Category to Autocomplete

