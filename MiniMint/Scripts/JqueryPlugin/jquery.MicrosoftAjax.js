/// <reference name="MicrosoftAjax.js"/>
/// <reference path="jquery-1.2.6.js"/>

Sys.Component.createInstance = function(type, properties, element) {
    /// <param name="type" type="Type">
    ///   The type to instantiate.
    /// </param>
    /// <param name="properties" type="Object" optional="true">
    ///   Property values, event handlers and field values to set.
    /// </param>
    /// <param name="element" domElement="true" optional="true">
    ///   The element to which the component is associated.
    /// </param>
    /// <returns type="Sys.Component"/>
    var proto = type.prototype,
        props = {},
        events = {};
    for (var name in properties) {
        if (proto["set_" + name]) {
            props[name] = properties[name];
        }
        else if (proto["add_" + name]) {
            events[name] = properties[name];
        }
        else {
            props[name] = properties[name];
        }
    }
    return Sys.Component.create(type, props, events, {}, element);
}

Sys.Component.exposeTojQuery = function(type, pluginName) {
    return jQuery.fn[pluginName] = function(properties) {
        return this.each(function() {
            Sys.Component.createInstance(type, properties, this);
        });
    }
}

Sys.Component.applyBehaviorSheet = function(behaviorSheet) {
    /// <param name="behaviorSheet" type="Object">
    ///   A dictionary of selectors to objects.
    ///   The objects themselves are dictionaries of type names
    ///   to property and event bags.
    /// </param>
    for (var selector in behaviorSheet) {
        var behaviors = behaviorSheet[selector];
        jQuery(selector).each(function() {
            for (var typeName in behaviors) {
                Sys.Component.createInstance(
                  eval(typeName), behaviors[typeName], this);
            }
        });
    }
}

jQuery.fn.create = function(type, properties) {
    /// <param name="type" type="Type">
    ///   The type to instantiate.
    /// </param>
    /// <param name="properties" type="Object" optional="true">
    ///   Property values to set.
    /// </param>
    /// <returns type="jQuery"/>
    return this.each(function() {
        Sys.Component.createInstance(type, properties, this);
    });
};

Sys.Application.add_init(function() {
    var scriptTags = document.getElementsByTagName("script");
    for (var i = 0, l = scriptTags.length; i < l; i++) {
        var scriptTag = scriptTags[i];
        if (scriptTag.type === "text/behavior") {
            var behaviorSheet =
                eval("({" + scriptTag.innerHTML + "})");
            Sys.Component.applyBehaviorSheet(behaviorSheet);
        }
    }
});