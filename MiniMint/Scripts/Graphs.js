/// <reference path="jquery-1.3.2-vsdoc.js"/>
/// <reference path="MicrosoftAjax.js"/>
/// <reference path="JqueryPlugin/jquery.flot.js" />

$().ready(function() {
    var datasets = Sys.Serialization.JavaScriptSerializer.deserialize($("#dataset").get(0).value);
    var i = 0;
    $.each(datasets, function(key, val) {
        val.color = i;
        ++i;
    });
    var data0 = [];

    if (datasets["This_Month_So_Far"])
        data.push(datasets["This_Month_So_Far"]);
    if (data0.length > 0)
        $.plot($("#PlotHereCurrentMonth"), data0, {
            xaxis: { ticks: 7, tickDecimals: 0 }
        });
    else
        $("#PlotHereCurrentMonth").hide();

    var data = [];
    if (datasets["Last_Month"])
        data.push(datasets["Last_Month"]);

    if (data.length > 0)
        $.plot($("#PlotHereLastMonth"), data, {
            xaxis: { ticks: 7, tickDecimals: 0 }
        });
    else
        $("#PlotHereLastMonth").hide();

        var data2 = [];
    if (datasets["Last_3_Months"])
        data2.push(datasets["Last_3_Months"]);
    if (data2.length > 0)
        $.plot($("#PlotHere3Months"), data2, {
            xaxis: { ticks: 7, tickDecimals: 0 }
        });
    else
        $("#PlotHere3Months").hide();

    var data3 = [];
    if (datasets["All"])
        data3.push(datasets["All"]);
    if (data3.length > 0)
        $.plot($("#PlotHereAll"), data3, {
            xaxis: { ticks: 7, tickDecimals: 0 }
        });
    else
        $("#PlotHereAll").hide();

});
