/// <reference path="jquery-1.3.2-vsdoc.js" />
/// <reference path="MicrosoftAjax.debug.js" />

/// <reference path="JqueryPlugin/jquery.format.1.01.js" />
/// <reference path="JqueryPlugin/jquery.date_input.js" />
/// <reference path="JqueryPlugin/jquery.autocomplete.min.js" />

$().ready(function() {

// numeric input
    $("#tbAmount").format({ precision: 2, allow_negative: true, autofix: true }); // Very simple

// DateInput

    // Setup function to make dates appear in MM/DD/YYYY format
    customizeDateInputToMMDDYYYYFormat(); 
    
    // We need to replace a date in a TD with an input:text with a value equal to this date
    var oldDate = $("#tdEntryDate").html();

    $("#tdEntryDate").html(String.format("<input type='text' id='tbEntryDate' name='EntryDate' value='{0}' style='width:75px' />", oldDate))
        .children(0).date_input(); // While creating the input tag we'll also apply the date input plugin


// AutoComplete
    // For this demo we will replace the Select box with autocomplete TB and will use the 
    // option tags as the data for autocompletion
    
    // first get the options
    window.autoCompData = [];
    // This selector says get all child options that belong to an element with an ID of RegisterCategoryId
    $("#RegisterCategoryId > OPTION").each(function(idx, item) { // loop through each return item
        Array.add(window.autoCompData, item.text); // add it to our array
    });

    // Replace the old Select with a textbox
    $("#RegisterCategoryId").replaceWith("<input name='RegisterCategoryName' id='tbRegisterCategoryName' type='text' value='' style='width:125px;' />");

    // Now we can actually apply the autocomplete stuff to it..
    // (We probably could have done the last 2 in one line, but I decided to break up the 
    //  lines because of the length JSON options)
    $("#tbRegisterCategoryName").autocomplete(window.autoCompData, {
        minChars: 0,
        max: 50,
        autoFill: true,
        mustMatch: false,
        matchContains: false,
        scrollHeight: 220
    });

});


// Date Input Setup function to force MM/DD/YYYY
function customizeDateInputToMMDDYYYYFormat() {
    $.extend(DateInput.DEFAULT_OPTS, {
        stringToDate: function(string) {
            var matches;
            if (matches = string.match(/^(\d{2,2})\/(\d{2,2})\/(\d{4,4})$/)) {
                return new Date(matches[3], matches[1] - 1, matches[2]);
            } else {
                return null;
            };
        },

        dateToString: function(date) {
            var month = (date.getMonth() + 1).toString();
            var dom = date.getDate().toString();
            if (month.length == 1) month = "0" + month;
            if (dom.length == 1) dom = "0" + dom;
            return month + "/" + dom + "/" + date.getFullYear();
        }
    });

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