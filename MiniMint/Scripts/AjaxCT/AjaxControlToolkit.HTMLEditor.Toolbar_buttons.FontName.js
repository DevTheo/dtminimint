﻿Type.registerNamespace("AjaxControlToolkit.HTMLEditor.ToolbarButton");AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName=function(a){AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName.initializeBase(this,[a])};AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName.prototype={initialize:function(){AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName.callBaseMethod(this,"initialize")},callMethod:function(a){if(!AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName.callBaseMethod(this,"callMethod"))return false;try{var b=this._designPanel;b._execCommand("fontname",false,a.options.item(a.selectedIndex).value)}catch(c){}},checkState:function(){var e=this;if(!AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName.callBaseMethod(e,"checkState"))return false;var f=e._designPanel,a=null;try{a=Function.createDelegate(f,AjaxControlToolkit.HTMLEditor._queryCommandValue)("fontname")}catch(g){}if(!f._FontNotSet)if(!a||a.length==0)a=AjaxControlToolkit.HTMLEditor.getStyle(f._doc.body,"font-family");var c=e._select,b=0;if(a&&a.length>0){var h=a.toLowerCase().split(",")[0].replace(/^(['"])/,"").replace(/(['"])$/,"");for(b=0;b<c.options.length;b++){var i=c.options.item(b).value.toLowerCase().split(",")[0];if(i==h)break}if(b==c.options.length)try{var d=document.createElement("OPTION");d.value=a.replace(/^(['"])/,"").replace(/(['"])$/,"");d.text=a.split(",")[0].replace(/^(['"])/,"").replace(/(['"])$/,"");c.add(d,AjaxControlToolkit.HTMLEditor.isIE?b:null);$addHandler(d,"click",e._onclick_option$delegate)}catch(g){b=0}}c.selectedIndex=b}};AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName.registerClass("AjaxControlToolkit.HTMLEditor.ToolbarButton.FontName",AjaxControlToolkit.HTMLEditor.ToolbarButton.DesignModeSelectButton);
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
