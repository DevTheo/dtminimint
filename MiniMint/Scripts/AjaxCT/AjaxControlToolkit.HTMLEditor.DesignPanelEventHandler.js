﻿Type.registerNamespace("AjaxControlToolkit.HTMLEditor");AjaxControlToolkit.HTMLEditor.DesignPanelEventHandler=function(b){var X="'></span>",P="<span id='",jb="StyleForTyping",W="<br/>",O="EMBED",A="\n",N="text",M="span",j="",L="LI",w="P",H="undefined",x="BODY",D="control",kb="function",C="keypress",d=null,k="keydown",Y="mousedown",c=false,l=true,e=this;try{var a=e;if(a._editPanel!=AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel)return l;if(AjaxControlToolkit.HTMLEditor.isIE)try{var Db=e._doc.selection,Ib=e._createRange(Db)}catch(eb){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}if(b.type==Y||b.type=="dblclick")e._focus(l);if(!AjaxControlToolkit.HTMLEditor.isIE&&b.type==k&&b.keyCode==Sys.UI.Key.tab&&e._editPanel.get_suppressTabInDesignMode()){AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel=d;return l}if(e.isPopup()){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}var hb=c;if(a._contextElement&&a._contextElement!=d){Function.createDelegate(e,AjaxControlToolkit.HTMLEditor.RemoveContextMenu)();if(b.type==k||b.type==C){AjaxControlToolkit.HTMLEditor._stopEvent(b);return}hb=l}if(typeof a.captureInDesign==kb)if(a.captureInDesign(b)===c){AjaxControlToolkit.HTMLEditor._stopEvent(b);return}if(AjaxControlToolkit.HTMLEditor.isIE&&b.type==Y&&b.ctrlKey){var n=a._getSelection(),zb=b.clientX,Ab=b.clientY;setTimeout(function(){var c=a._getSelection();if(c.type.toLowerCase()!=D){var e=a._doc.body.createTextRange();e.moveToPoint(zb,Ab);e.select()}c=a._getSelection();var e=a._createRange(c),b=AjaxControlToolkit.HTMLEditor.getSelParent(a);while(b!=d&&b.tagName.toUpperCase()!=x){if(b.tagName.toUpperCase()=="A"&&b.href!=d&&typeof b.href!=H&&b.href.length>0){window.open(b.href,"LinkViewWindow");break}b=b.parentNode}},0);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}var h=!AjaxControlToolkit.HTMLEditor.isIE?b.target:b.srcElement;if(h.tagName!=d&&typeof h.tagName!=H&&(h.tagName.toUpperCase()=="HTML"||h.tagName.toUpperCase()==x)){if(a.__kkoka!=l){a.__kkoka=l;setTimeout(function(){if(a._editPanel==AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel)if(!a.toEndOfProtected())try{a.focusEditor()}catch(b){}a.__kkoka=c},0)}}else if(AjaxControlToolkit.HTMLEditor.contentEditable(h)!=d)setTimeout(function(){if(a._editPanel==AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel)a.toEndOfProtected()},0);if(hb&&AjaxControlToolkit.HTMLEditor.isIE){var ub=e._getSelection(),Ib;try{Ib=e._createRange(ub);if(ub.type.toLowerCase()==D){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}}catch(bb){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}}var E=AjaxControlToolkit.HTMLEditor.isIE&&b.type==k||b.type==C,Kb=b.type+"--"+E;if(E&&!e._editPanel.get_keyboardEnabled()){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}var p=String.fromCharCode(AjaxControlToolkit.HTMLEditor.isIE?b.keyCode:b.charCode).toLowerCase();if(E&&a._editPanel.get_hotkeys()!=d)if(a._editPanel.get_hotkeys().length>0){var Cb=a._editPanel.get_hotkeys().length,pb=p;if(b.keyCode==18||b.keyCode==17||b.keyCode==16)pb=d;for(var fb=0;fb<Cb;fb++){var G=a._editPanel.get_hotkeys()[fb];if(G[1]==pb&&G[2]==b.altKey&&G[3]==b.shiftKey&&G[4]==b.ctrlKey){if(typeof G[0]==kb)setTimeout(function(){G[0](a);a.onContentChanged();a.focusEditor()},0);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}}}if(E&&b.shiftKey&&b.keyCode==45)e._commonPaste(b);else if(E&&b.ctrlKey&&b.altKey&&b.keyCode==Sys.UI.Key.home){var T=d,h=AjaxControlToolkit.HTMLEditor.getSelParent(a);while(h&&(h.nodeType==3||h.tagName&&h.tagName.toUpperCase()!=x)){if(h.nodeType==3||!h.tagName){h=h.parentNode;continue}var t=h.tagName.toUpperCase();if(!AjaxControlToolkit.HTMLEditor.canBeInsideP(h)&&t!=w){if(t=="TD")while(t!="TABLE"){h=h.parentNode;t=h.tagName.toUpperCase()}else if(t==L)while(t!="OL"&&t!="UL"){h=h.parentNode;t=h.tagName.toUpperCase()}T=h;break}h=h.parentNode}if(T!=d){var n=a._getSelection(),g=a._createRange(n),s=a._doc.createTextNode(j);T.parentNode.insertBefore(s,T);if(AjaxControlToolkit.HTMLEditor.isIE){var Z=a._createRange(n),mb=a._createRange(n),ab=a._doc.createElement(M),S=a._doc.createElement(M);s.parentNode.insertBefore(ab,s);if(s.nextSibling)s.parentNode.insertBefore(S,s.nextSibling);else s.parentNode.appendChild(S);try{Z.moveToElementText(ab);mb.moveToElementText(S);Z.setEndPoint("EndToEnd",mb);Z.select()}catch(eb){}s.parentNode.removeChild(ab);s.parentNode.removeChild(S)}else{a._removeAllRanges(n);g.setStart(s,0);g.setEnd(s,0);a._selectRange(n,g)}}}else if(AjaxControlToolkit.HTMLEditor.isIE&&b.keyCode>=33&&b.keyCode<=40&&!b.shiftKey){var yb=b.keyCode==Sys.UI.Key.pageDown||b.keyCode==Sys.UI.Key.end||b.keyCode==Sys.UI.Key.right||b.keyCode==Sys.UI.Key.down;setTimeout(function(){var f=a._getSelection(),e=a._createRange(f);if(f.type.toLowerCase()==D){var b=e.item(0);if(!b.contentEditable||b.contentEditable=="false"){e.remove(0);f.empty();e=a._createRange(f);var c=a._doc.createElement("SPAN");c.appendChild(a._doc.createTextNode(j));if(yb)if(b.nextSibling==d)b.parentNode.appendChild(c);else b.parentNode.insertBefore(c,b.nextSibling);else b.parentNode.insertBefore(c,b);e.moveToElementText(c);e.select();setTimeout(function(){a.focusEditor();c.parentNode.removeChild(c)},0)}}},0)}else if((E&&!AjaxControlToolkit.HTMLEditor.isSafari||AjaxControlToolkit.HTMLEditor.isSafari&&b.type==k)&&b.ctrlKey&&!b.altKey){a._a_prize=c;var n=d,g=d,p=String.fromCharCode(AjaxControlToolkit.HTMLEditor.isIE||AjaxControlToolkit.HTMLEditor.isOpera||AjaxControlToolkit.HTMLEditor.isSafari?b.keyCode:b.charCode).toLowerCase(),u=d,J=d;if((AjaxControlToolkit.HTMLEditor.isIE||AjaxControlToolkit.HTMLEditor.isSafari)&&b.keyCode==17)return c;else if(!AjaxControlToolkit.HTMLEditor.isIE&&b.keyCode==Sys.UI.Key.end&&!b.shiftKey)a._setToEnd();else if(b.keyCode==46&&e.isShadowed()){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}else if(b.keyCode==46||b.keyCode==Sys.UI.Key.backspace){if(AjaxControlToolkit.HTMLEditor.isIE&&b.type==k||!AjaxControlToolkit.HTMLEditor.isIE&&b.type==C)e._saveContent()}else switch(p){case "a":if(!AjaxControlToolkit.HTMLEditor.isIE){n=e._getSelection();e._removeAllRanges(n);g=e._createRange();g.selectNodeContents(e._doc.body);e._selectRange(n,g);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}else a._a_prize=l;break;case "z":e.undo();AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;break;case "p":if(!AjaxControlToolkit.HTMLEditor.isIE){setTimeout(function(){a._contextMenuCallP()},0);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}break;case "y":e.redo();AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;break;case "x":if(e.isShadowed()){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}e._saveContent();if(AjaxControlToolkit.HTMLEditor.isIE)if(b.type==k){a.openWait();setTimeout(function(){a._copyCut(p,c);a.closeWait()},0);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}break;case "c":if(e.isShadowed()){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}if(AjaxControlToolkit.HTMLEditor.isIE)if(b.type==k){a.openWait();setTimeout(function(){a._copyCut(p,c);a.closeWait();setTimeout(function(){a._ifShadow()},0)},0);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}break;case "v":if(e.isShadowed()){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}if(AjaxControlToolkit.HTMLEditor.isIE){e._saveContent();return l}e._commonPaste(b);break;case "b":e._execCommand("bold",c,J);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;case "i":e._execCommand("italic",c,J);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;case "u":e._execCommand("underline",c,J);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;case "s":e._execCommand("strikethrough",c,J);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;case "l":u="justifyleft";break;case "e":u="justifycenter";break;case "r":u="justifyright";break;case "j":u="justifyfull";break;case "q":alert(e._doc.body.innerHTML);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;break;case "0":var Gb="Your browser:\n\n"+navigator.userAgent;alert(Gb);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c;break;case "9":if(!AjaxControlToolkit.HTMLEditor.isIE){var n=a._getSelection(),g=a._createRange(n),f=g.startContainer,F=g.endContainer,y=j;y+="startContainer: "+(f.nodeType==1?f.tagName:N)+A;y+="endContainer  : "+(F.nodeType==1?F.tagName:N)+A;if(f==F){y+="startOffset: "+g.startOffset+A;y+="endOffset  : "+g.endOffset+A;if(f.nodeType==1){f=f.childNodes.item(g.startOffset);if(f&&f.nodeType){y+="startOffset node: "+(f.nodeType==1?f.tagName:N)+A;if(g.startOffset!=g.endOffset){f=f.childNodes.item(g.endOffset);if(f&&f.nodeType)y+="endOffset node: "+(f.nodeType==1?f.tagName:N)+A}}else y+=f}}alert(y)}else{var n=a._getSelection(),g=a._createRange(n);alert("boundingLeft: "+g.boundingLeft+" boundingTop: "+g.boundingTop+A+"boundingWidth: "+g.boundingWidth+" boundingHeight: "+g.boundingHeight)}AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}if(u){e._execCommand(u,c,J);if(u=="formatblock"&&!AjaxControlToolkit.HTMLEditor.isIE){e._saveContent();e._undo(c)}AjaxControlToolkit.HTMLEditor._stopEvent(b);if(u=="delete"||u=="paste")e._clearP()}}else if(E||AjaxControlToolkit.HTMLEditor.isSafari&&b.type==k){if(AjaxControlToolkit.HTMLEditor.isIE&&e._tryForward){var g=e._createRange(e._getSelection());g.select();e._tryForward=c}var p=String.fromCharCode(AjaxControlToolkit.HTMLEditor.isIE?b.keyCode:b.charCode).toLowerCase();if(a._a_prize){a._a_prize=c;function Bb(){var c=a._createRange(a._getSelection()),b=c.parentElement();if(b&&b.nodeType==1&&b.tagName.toUpperCase()==w){while(b.firstChild)b.parentNode.insertBefore(b.firstChild,b);b.parentNode.removeChild(b)}}setTimeout(Bb,0)}if(e.isShadowed()){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}switch(b.keyCode){case Sys.UI.Key.tab:if(AjaxControlToolkit.HTMLEditor.isSafari&&b.type!=k)break;if(!e._editPanel.get_suppressTabInDesignMode()){if(!e.isControl())e.insertHTML("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");AjaxControlToolkit.HTMLEditor._stopEvent(b)}else{if(AjaxControlToolkit.HTMLEditor.isSafari)AjaxControlToolkit.HTMLEditor._stopEvent(b);AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel=d;return l}break;case 46:case Sys.UI.Key.backspace:if(AjaxControlToolkit.HTMLEditor.isSafari&&b.type!=k)break;if((AjaxControlToolkit.HTMLEditor.isIE||AjaxControlToolkit.HTMLEditor.isSafari)&&b.type==k||!AjaxControlToolkit.HTMLEditor.isIE&&b.type==C)e._saveContent();if(!AjaxControlToolkit.HTMLEditor.isIE){var g=e._createRange(e._getSelection()),f=g.startContainer,F=g.endContainer;if(b.type==C)if(AjaxControlToolkit.HTMLEditor.contentEditable(f)!=d||AjaxControlToolkit.HTMLEditor.contentEditable(F)!=d){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}if(f==F&&f.nodeType==1&&f.tagName.toUpperCase()=="TD"&&g.startOffset==g.startOffset&&f.childNodes.item(g.startOffset)&&f.childNodes.item(g.startOffset).tagName&&f.childNodes.item(g.startOffset).tagName.toUpperCase()=="BR"){var tb=f.childNodes.item(g.startOffset),rb=0,ob=0,z;z=tb.previousSibling;while(z){rb++;z=z.previousSibling}z=tb.nextSibling;while(z){ob++;z=z.nextSibling}if(b.keyCode==46&&ob==0||b.keyCode==Sys.UI.Key.backspace&&rb==0){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}else if(b.keyCode==46&&f.firstChild==f.lastChild&&f.firstChild.nodeType==1){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}}if(f==F&&f.nodeType==3&&g.startOffset==g.endOffset){var Fb=f.data+j;if(b.keyCode==46)if(g.startOffset==Fb.length&&!(f.nextSibling&&f.nextSibling.nodeType==3)){if(f.nextSibling){f.parentNode.removeChild(f.nextSibling);a.onContentChanged()}AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}if(b.keyCode==Sys.UI.Key.backspace)if(g.startOffset==0&&!(f.previousSibling&&f.previousSibling.nodeType==3)){if(f.previousSibling){f.parentNode.removeChild(f.previousSibling);a.onContentChanged()}AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}}if(b.keyCode==Sys.UI.Key.backspace&&f.nodeType==1&&f==F&&g.startOffset==g.endOffset){var v=f.childNodes.item(g.startOffset);if(v!=d&&v.nodeType==1&&v.tagName.toUpperCase()=="BR"){v=v.previousSibling;if(v!=d&&v.nodeType!=3){v.parentNode.removeChild(v);a.onContentChanged();AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}}}setTimeout(function(){var k=a._getSelection(),b=a._createRange(k),h=b.startContainer,l=b.endContainer;if(AjaxControlToolkit.HTMLEditor.contentEditable(h)!=d||AjaxControlToolkit.HTMLEditor.contentEditable(l)!=d){a._undo(c);return}if(h==l&&h.nodeType==1&&AjaxControlToolkit.HTMLEditor.isStyleTag(h.tagName)&&b.startOffset==b.endOffset&&h.childNodes.length==0){while(h.parentNode.nodeType==1&&AjaxControlToolkit.HTMLEditor.isStyleTag(h.parentNode.tagName)&&h.parentNode.childNodes.length==1)h=h.parentNode;var e=h.nextSibling,f=h.previousSibling,i=h.parentNode;i.removeChild(h);a.onContentChanged();if(e==d&&f==d){b.setStart(i,0);b.setEnd(i,0)}else if(e!=d&&f!=d)if(e.nodeType==3&&f.nodeType==3){var g=(j+f.data+j).length;f.appendData(e.data);i.removeChild(e);b.setStart(f,g);b.setEnd(f,g)}else if(f.nodeType==3){var g=(j+f.data+j).length;b.setStart(f,g);b.setEnd(f,g)}else if(e.nodeType==3){b.setStart(e,0);b.setEnd(e,0)}else if(e.childNodes.length>0){b.setStart(e,0);b.setEnd(e,0)}else{var g=AjaxControlToolkit.HTMLEditor.__getIndex(e);b.setStart(i,g);b.setEnd(i,g)}else if(f!=d)if(f.nodeType==3){var g=(j+f.data+j).length;b.setStart(f,g);b.setEnd(f,g)}else{var g=f.childNodes.length;if(g>0){b.setStart(f,g);b.setEnd(f,g)}else{g=AjaxControlToolkit.HTMLEditor.__getIndex(f);b.setStart(i,g);b.setEnd(i,g)}}else if(e!=d)if(e.nodeType==3){b.setStart(e,0);b.setEnd(e,0)}else{var g=e.childNodes.length;if(g>0){b.setStart(e,g);b.setEnd(e,g)}else{g=AjaxControlToolkit.HTMLEditor.__getIndex(e);b.setStart(i,g);b.setEnd(i,g)}}a._removeAllRanges(k);a._selectRange(k,b)}},0)}else{var n=a._getSelection();if(n.type.toLowerCase()==D){if(b.keyCode==8){setTimeout(function(){a._ifShadow();a.onContentChanged()},0);AjaxControlToolkit.HTMLEditor._stopEvent(b);return}var r=a._createRange(n),U=r.item(0);if(U.tagName.toUpperCase()==O){U.src=j;U.parentNode.removeChild(U);while(r.length>0)r.remove(0);try{r.collapse(c)}catch(eb){}AjaxControlToolkit.HTMLEditor._stopEvent(b);a._saveContent();setTimeout(function(){a._undo(c);a.onContentChanged()},0);return}}var gb=a._doc.body.getElementsByTagName(O).length;if(gb>0){var nb=a._body.ownerDocument.createElement("div");a._body.appendChild(nb);var Jb=b.keyCode;setTimeout(function(){a._body.removeChild(nb);var b=a._doc.body.getElementsByTagName(O);if(gb!=b.length){a._saveContent();setTimeout(function(){a._undo(c);a.onContentChanged()},0)}},0)}setTimeout(function(){a._clearP()},0)}break;case Sys.UI.Key.enter:if(AjaxControlToolkit.HTMLEditor.isSafari&&b.type==k)break;if(!AjaxControlToolkit.HTMLEditor.isIE&&b.type==C||AjaxControlToolkit.HTMLEditor.isIE&&b.type==k)e._saveContent();if(AjaxControlToolkit.HTMLEditor.isIE&&b.type==k){var n=a._getSelection();if(n.type.toLowerCase()==D)break;var r=a._createRange(n);if(!b.shiftKey){var i=r.parentElement();if(i.tagName.toUpperCase()=="TEXTAREA")break;while(i&&i.tagName&&i.tagName.toUpperCase()!=x&&AjaxControlToolkit.HTMLEditor.isStyleTag(i.tagName))i=i.parentNode;if(i&&i.tagName){var t=i.tagName.toUpperCase();if(t==w||t==L){if(t==L){function Hb(){r=a._createRange(a._getSelection());var b=r.parentElement();while(b&&b.tagName&&b.tagName.toUpperCase()!=x&&AjaxControlToolkit.HTMLEditor.isStyleTag(b.tagName))b=b.parentNode;if(b&&b.nodeType==1&&b.tagName.toUpperCase()==w){var e=a._doc.createElement(M),f=a._doc.createTextNode(" "),c=b;while(c.firstChild!=d&&c.firstChild.nodeType==1)c=c.firstChild;if(c.nodeType==1){c.appendChild(f);c.appendChild(e);while(b.firstChild)b.parentNode.insertBefore(b.firstChild,b)}else{b.parentNode.insertBefore(f,b);b.parentNode.insertBefore(e,b)}b.parentNode.removeChild(b);r.moveToElementText(e);r.select();e.parentNode.removeChild(e);a.onContentChanged()}}setTimeout(Hb,0)}break}}try{var db=AjaxControlToolkit.HTMLEditor.smartClassName+"_middle_add",m=d,ib="<span id="+db+"></span>";function wb(){var c=a._getSelection(),b=a._createRange(c);if(m!=d){m.innerHTML="&nbsp;";b.moveToElementText(m);b.select();m.parentNode.insertBefore(m.firstChild,m);m.parentNode.removeChild(m);a.onContentChanged()}}r.pasteHTML(ib);var Q=c;m=a._doc.getElementById(db);if(m!=d){var B=m.nextSibling,I=m.parentNode;while(B==d&&I!=d&&AjaxControlToolkit.HTMLEditor.isStyleTag(I.tagName)){B=I.nextSibling;I=I.parentNode}if(B!=d&&!AjaxControlToolkit.HTMLEditor.isInlineElement(B)&&B.tagName!=d&&typeof B.tagName!=H){var V=B.tagName.toUpperCase();if(V!="BR"&&V!="UL"&&V!="OL"&&V!=w)Q=l}m.parentNode.removeChild(m)}r.pasteHTML(W+(Q?ib:j));if(Q)m=a._doc.getElementById(db);r.select();if(Q){setTimeout(wb,0);AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}}catch(bb){}}else break;AjaxControlToolkit.HTMLEditor._stopEvent(b)}else if(!b.shiftKey&&(AjaxControlToolkit.HTMLEditor.isSafari||AjaxControlToolkit.HTMLEditor.isOpera)){var i=AjaxControlToolkit.HTMLEditor.getSelParent(e);if(i.nodeType==3)i=i.parentNode;while(i&&i.tagName&&i.tagName.toUpperCase()!=x&&AjaxControlToolkit.HTMLEditor.isStyleTag(i.tagName))i=i.parentNode;if(i&&i.tagName&&(i.tagName.toUpperCase()==w||i.tagName.toUpperCase()==L))break;e.insertHTML(W);AjaxControlToolkit.HTMLEditor._stopEvent(b);a.onContentChanged()}else if(AjaxControlToolkit.HTMLEditor.isSafari){e.insertHTML(W);AjaxControlToolkit.HTMLEditor._stopEvent(b);a.onContentChanged()}}}else a._a_prize=c;if(AjaxControlToolkit.HTMLEditor.isIE&&b.type==C&&!b.ctrlKey){var p=b.keyCode,sb=a._getSelection(),R=a._createRange(sb);if(R.text.length>0){var K=String.fromCharCode(p),qb=AjaxControlToolkit.HTMLEditor.capLock(b),Eb=b.shiftKey&&!qb||qb;if(!Eb)K=K.toLowerCase();var q=AjaxControlToolkit.HTMLEditor.smartClassName+jb,o=a._doc.getElementById(q);if(o!=d){K=P+q+X+K+P+q+q+X;o.parentNode.removeChild(o)}R.pasteHTML(K);if(o!=d){a.trickWithStyles(q);o=a._doc.getElementById(q+q);o.parentNode.removeChild(o)}AjaxControlToolkit.HTMLEditor._stopEvent(b);a.onContentChanged();return c}}if(b.type=="mouseup"||b.type==Y||b.type==k){var xb=l;if(b.type==k&&!b.ctrlKey){var p=b.keyCode;if(p>=48&&p<=90||p==32||p==13||p>=186&&p<=222||p>=96&&p<=111)if(a._StyleForTyping!=d){a.n_arr=[];for(var cb=0;cb<a._StyleForTyping.length;cb++)a.n_arr.push(a._StyleForTyping[cb]);var q=AjaxControlToolkit.HTMLEditor.smartClassName+jb,lb=l;if(!AjaxControlToolkit.HTMLEditor.isIE)a.insertHTML(P+q+X);else{a.insertHTML(P+q+"'>&nbsp;</span>");var o=a._doc.getElementById(q);if(o&&o.nextSibling&&o.nextSibling.nodeType==3){lb=c;var sb=a._getSelection(),R=a._createRange(sb);R.moveToElementText(a._doc.getElementById(q));R.select()}else if(o)o.removeChild(o.firstChild)}if(lb)setTimeout(function(){a.trickWithStyles(q);a.onContentChanged()},0)}}if(xb||!AjaxControlToolkit.HTMLEditor.isIE)if(!a._updated_now){if(a._updateTimer){clearTimeout(a._updateTimer);a._updateTimer=d}a._updateTimerLimit=3;function vb(){if(a._editPanel==AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel)try{if(AjaxControlToolkit.HTMLEditor.isIE){try{var e=a._doc.selection}catch(b){return c}if(a._getSelection().type=="None"&&a._doc.queryCommandValue("backcolor")==0&&a._doc.queryCommandValue("forecolor")==0){a._updateTimerLimit--;if(a._updateTimerLimit>0){a._updateTimer=setTimeout(vb,100);return}}}a._updated_now=l;a._editPanel.updateToolbar();a._updated_now=c;a._updateTimer=d;if(!AjaxControlToolkit.HTMLEditor.isIE)a.focusEditor()}catch(b){}}a._updateTimer=setTimeout(vb,300)}}if(!(!AjaxControlToolkit.HTMLEditor.isIE&&(b.type==k||b.type=="keyup")||AjaxControlToolkit.HTMLEditor.isIE&&(b.type==k||b.type=="keyup")&&(b.keyCode==16||b.keyCode==20)))a._StyleForTyping=d;if(AjaxControlToolkit.HTMLEditor.isSafari)setTimeout(function(){a._createRange(a._getSelection())},0);if(!AjaxControlToolkit.HTMLEditor.isIE)setTimeout(function(){if(a._editPanel==AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel){var c=a._getSelection(),b=a._createRange(c);if(b.startContainer.nodeType!=3&&b.startContainer==b.endContainer)if(b.startOffset==b.endOffset)if(b.startContainer.childNodes.item(b.startOffset))if(b.startContainer.childNodes.item(b.startOffset).nodeType==3){var d=b.startContainer.childNodes.item(b.startOffset);c.collapseToEnd();a._removeAllRanges(c);c=a._getSelection();b=a._createRange(c);b.setStart(d,0);b.setEnd(d,0);a._selectRange(c,b)}}},0);if(!AjaxControlToolkit.HTMLEditor.isIE){var n=a._getSelection(),g=a._createRange(n);a._saved_startContainer=g.startContainer;a._saved_startOffset=g.startOffset}setTimeout(function(){try{if(a._editPanel==AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel)a._ifShadow()}catch(b){}},0);if(b.type==k)if(a._AfterOnContentChanged==d||typeof a._AfterOnContentChanged==H||!a._AfterOnContentChanged){a._AfterOnContentChanged=l;setTimeout(function(){if(a._editPanel==AjaxControlToolkit.HTMLEditor.LastFocusedEditPanel){a.onContentChanged();a._AfterOnContentChanged=c}},0)}return l}catch(bb){AjaxControlToolkit.HTMLEditor._stopEvent(b);return c}};
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();