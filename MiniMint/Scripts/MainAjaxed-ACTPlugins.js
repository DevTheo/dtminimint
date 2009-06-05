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

$().ready(function() {
    // Plugin setup go here
    // Ajax Control Toolbox!

    $("#AccountTable").create(AjaxControlToolkit.AlwaysVisibleControlBehavior,
                                { VerticalSide: 0,
                                    HorizontalSide: 2,
                                    VerticalOffset: "90",
                                    HorizontalOffset: "70",
                                    ScrollEffectDuration: ".1"
                                });

    $("#AccountTableActual").create(AjaxControlToolkit.DropShadowBehavior,
                                { Opacity: 0.3,
                                    Rounded: false,
                                    TrackPosition: true,
                                    Width: 5
                                });
});


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