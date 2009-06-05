/// <reference path="jquery-1.3.2-vsdoc.js" />
/// <reference path="MicrosoftAjax.debug.js" />

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
});

function WeAreBusy() {
    $("#ajaxLoaderImage").removeClass("notbusy");
    $("#ajaxLoaderImage").addClass("busy");
}
function WeAreNotBusy() {
    $("#ajaxLoaderImage").removeClass("busy");
    $("#ajaxLoaderImage").addClass("notbusy");
}
