﻿Type.registerNamespace("AjaxControlToolkit");AjaxControlToolkit.HoverBehavior=function(c){var b=null,a=this;AjaxControlToolkit.HoverBehavior.initializeBase(a,[c]);a._elementHandlers=b;a._hoverElementHandlers=b;a._hoverElement=b;a._hoverCount=0;a._unhoverDelay=0;a._hoverDelay=0;a._hoverScript=b;a._unhoverScript=b;a._hoverFired=false};AjaxControlToolkit.HoverBehavior.prototype={_setupHandlersArray:function(){var a=this,b=[];b[0]=Function.createDelegate(a,a._onHover);b[1]=Function.createDelegate(a,a._onUnhover);return b},get_elementHandlers:function(){var a=this;if(!a._elementHandlers)a._elementHandlers=a._setupHandlersArray();return a._elementHandlers},get_hoverElementHandlers:function(){var a=this;if(!a._hoverElementHandlers)a._hoverElementHandlers=a._setupHandlersArray();return a._hoverElementHandlers},get_hoverElement:function(){return this._hoverElement},set_hoverElement:function(b){var a=this;if(b!=a._hoverElement){if(a._hoverElement)a._setupHandlers(a._hoverElement,a.get_hoverElementHandlers(),false);a._hoverElement=b;if(a._hoverElement)a._setupHandlers(a._hoverElement,a.get_hoverElementHandlers(),true)}},get_hoverDelay:function(){return this._hoverDelay},set_hoverDelay:function(a){this._hoverDelay=a;this.raisePropertyChanged("hoverDelay")},get_hoverScript:function(){return this._hoverScript},set_hoverScript:function(a){this._hoverScript=a},get_unhoverDelay:function(){return this._unhoverDelay},set_unhoverDelay:function(a){this._unhoverDelay=a;this.raisePropertyChanged("unhoverDelay")},get_unhoverScript:function(){return this._unhoverScript},set_unhoverScript:function(a){this._unhoverScript=a},dispose:function(){var a=this,c=a.get_element();if(a._elementHandlers){var b=a.get_elementHandlers();a._setupHandlers(c,b,false);a._elementHandlers=null}if(a._hoverElement){var b=a.get_hoverElementHandlers();a._setupHandlers(a._hoverElement,b,false);a._hoverElement=null}AjaxControlToolkit.HoverBehavior.callBaseMethod(a,"dispose")},initialize:function(){var a=this;AjaxControlToolkit.HoverBehavior.callBaseMethod(a,"initialize");var b=a.get_elementHandlers();a._setupHandlers(a.get_element(),b,true);if(a._hoverElement){b=a.get_hoverElementHandlers();a._setupHandlers(a._hoverElement,b,true)}},add_hover:function(a){this.get_events().addHandler("hover",a)},remove_hover:function(a){this.get_events().removeHandler("hover",a)},_fireHover:function(){var a=this;if(!a._hoverCount||a._hoverFired)return;var handler=a.get_events().getHandler("hover");if(handler)handler(a,Sys.EventArgs.Empty);if(a._hoverScript)eval(a._hoverScript);a._hoverFired=true},_onHover:function(){var a=this;a._hoverCount++;if(!a._hoverDelay)a._fireHover();else window.setTimeout(Function.createDelegate(a,a._fireHover),a._hoverDelay)},add_unhover:function(a){this.get_events().addHandler("unhover",a)},remove_unhover:function(a){this.get_events().removeHandler("unhover",a)},_fireUnhover:function(){var a=this;if(a._hoverFired&&!a._hoverCount){a._hoverFired=false;var handler=a.get_events().getHandler("unhover");if(handler)handler(a,Sys.EventArgs.Empty);if(a._unhoverScript)eval(a._unhoverScript)}},_onUnhover:function(){var a=this;a._hoverCount--;if(a._hoverCount<=0){a._hoverCount=0;if(!a._unhoverDelay)a._fireUnhover();else window.setTimeout(Function.createDelegate(a,a._fireUnhover),a._unhoverDelay)}},_setupHandlers:function(a,b,e){var d="mouseout",c="mouseover";if(!this.get_isInitialized()||!a)return;if(e){$addHandler(a,c,b[0]);$addHandler(a,"focus",b[0]);$addHandler(a,d,b[1]);$addHandler(a,"blur",b[1])}else{$removeHandler(a,c,b[0]);$removeHandler(a,"focus",b[0]);$removeHandler(a,d,b[1]);$removeHandler(a,"blur",b[1])}}};AjaxControlToolkit.HoverBehavior.descriptor={properties:[{name:"hoverElement",isDomElement:true},{name:"unhoverDelay",type:Number}],events:[{name:"hover"},{name:"unhover"}]};AjaxControlToolkit.HoverBehavior.registerClass("AjaxControlToolkit.HoverBehavior",AjaxControlToolkit.BehaviorBase);
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
