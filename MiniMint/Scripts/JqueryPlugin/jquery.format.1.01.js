/*
 *
 * Copyright (c) 2009 C. F., Wong (http://cloudgen.w0ng.hk)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Version 1.01
 * Demo: http://cloudgen.w0ng.hk/jquery/format.php
 *
 * 2009/3/12
 * 1.01
 * update for version 1.01: 
 *   1. add the following type:"phone-number", "alphabet"
 *  2. fix the problem of returning to the last position of pressing the left-arrow  twice.
 *  3. place the top-level domain name regular expression at the first line
 *  4. add new jQuery regular-expression selector:-  :regexp()   (see http://cloudgen.w0ng.hk/jquery/selector.regex.php)
 *
 */
var email={tldn:new RegExp("^[^\@]+\@[^\@]+\.(A[C-GL-OQ-UWXZ]|B[ABD-JM-OR-TVWYZ]|C[ACDF-IK-ORUVX-Z]|D[EJKMOZ]|E[CEGR-U]|F[I-KMOR]|G[ABD-IL-NP-UWY]|H[KMNRTU]|I[DEL-OQ-T]|J[EMOP]|K[EG-IMNPRWYZ]|L[A-CIKR-VY]|M[AC-EGHK-Z]|N[ACE-GILOPRUZ]|OM|P[AE-HKL-NR-TWY]|QA|R[EOSUW]|S[A-EG-ORT-VYZ]|T[CDF-HJ-PRTVWZ]|U[AGKMSYZ]|V[ACEGINU]|W[FS]|XN|Y[ETU]|Z[AMW]|AERO|ARPA|ASIA|BIZ|CAT|COM|COOP|EDU|GOV|INFO|INT|JOBS|MIL|MOBI|MUSEUM|NAME|NET|ORG|PRO|TEL|TRAVEL)$","i")}
;eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([2467j-rt-yB-Z]|1\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(m(f){f.x(f.expr[":"],{O:m(d,a,c){7 e=u v(c[3],"g");7 b=("P"===d.j)?d.q:d.innerHTML;4(b=="")?k:(e.exec(b))}});f.Q.y=m(d){4(6.R(":P"))?6.G(d):6.html(d)};B={S:m(d){7 a=f.x({j:"n",p:5,n:\'.\',r:k},d);7 c="";2(a.j=="n"){7 e=(a.r)?"-?":"";2(a.p>0)c="^"+e+"\\\\d+$|^"+e+"\\\\d*"+a.n+"\\\\d{1,"+a.p+"}$";l c="^"+e+"\\\\d+$"}l 2(a.j=="H-I"){c="^\\\\d[\\\\d\\\\-]*\\\\d$"}l 2(a.j=="C"){c="^[A-T-z]+$"}4 c},U:m(d){7 a=f(d).y();7 c=o;7 e=k;7 e=u v("[\\s\\~\\!\\#\\$\\%\\^\\&\\*\\+\\=\\(\\)\\[\\]\\{\\}\\<\\>\\\\\\/\\;\\:\\,\\?\\|]+");2(a.J(e)!=K){4 c}2(a.J(/((\\.\\.)|(\\.\\-)|(\\.\\@)|(\\-\\.)|(\\-\\-)|(\\-\\@)|(\\@\\.)|(\\@\\-)|(\\@\\@))+/)!=K){4 c}2(a.D("\\\'")!=-1){4 c}2(a.D("\\"")!=-1){4 c}2(E.V&&a.J(E.V)==K){4 c}4 e},W:m(d,a){7 c=f.x({j:"n",p:5,n:\'.\',r:k},a);7 e=f(d).y();7 b=e;2(c.j=="n"){2(b!=""){7 g;7 h=(c.r)?"\\\\-":"";7 i="\\\\"+c.n;g=u v("[^\\\\d"+h+i+"]+","g");b=b.t(g,"");7 h=(c.r)?"\\\\-?":"";2(c.p>0)g=u v("^("+h+"\\\\d+"+i+"\\\\d{1,"+c.p+"}).*");l g=u v("^("+h+"\\\\d+).*");b=b.t(g,"$1")}}l 2(c.j=="H-I"){b=b.t(/[^\\-\\d]+/g,"").t(/^\\-+/,"").t(/\\-+/,"-")}l 2(c.j=="C"){b=b.t(/[^A-T-z]+/g,"")}2(b!=e)f(d).y(b)}};f.Q.format=m(c,e){7 b=f.x({j:"n",p:5,n:".",r:k,X:o},c);7 g=b.n;e=typeof e=="m"?e:m(){};6.keypress(m(d){f(6).Y("Z-q",f(6).G());7 a=d.10?d.10:d.11?d.11:0;2(a==13&&6.nodeName.toLowerCase()!="input"){4 o}2(d.ctrlKey&&(a==97||a==65||a==120||a==88||a==99||a==67||a==122||a==90||a==118||a==86||a==w))4 k;2(a<48||a>57){2(b.j=="n"){2(b.r&&a==w&&6.q.12==0)4 k;2(a==g.charCodeAt(0)){2(b.p>0&&6.q.D(g)==-1)4 k;l 4 o}2(a!=8&&a!=9&&a!=13&&a!=35&&a!=36&&a!=37&&a!=F){4 o}4 k}l 2(b.j=="E"){2(a==8||a==9||a==13||(a>L&&a<M)||a==F||a==w||a==46||(a>N&&a<91)||(a>96&&a<16)){4 k}2(a==N&&6.q.D("@")==-1)4 k;4 o}l 2(b.j=="H-I"){2(a==w&&6.q.12==0)4 o;2(a==8||a==9||a==13||(a>L&&a<M)||a==F||a==w){4 k}4 o}l 2(b.j=="C"){2(a==8||a==9||a==13||(a>L&&a<M)||a==F||(a>N&&a<91)||(a>96&&a<16))4 k}l 4 o}l{2(b.j=="C"){4 o}l 4 k}}).blur(m(){2(b.j=="E"){2(!B.U(6)){e.17(6)}}l{2(!f(6).R(":O("+B.S(c)+")")){e.17(6)}}}).focus(m(){f(6).select()});2(b.X){6.keyup(m(d){2(f(6).Y("Z-q")!=f(6).G())B.W(6,b)})}4 6}})(jQuery)',[],70,'||if||return||this|var||||||||||||type|true|else|function|decimal|false|precision|value|allow_negative||replace|new|RegExp|45|extend|output|||formatter|alphabet|indexOf|email|39|val|phone|number|match|null|34|38|64|regex|text|fn|is|getRegex|Za|isEmail|tldn|formatString|autofix|data|old|charCode|keyCode|length||||123|apply'.split('|'),0,{}))
