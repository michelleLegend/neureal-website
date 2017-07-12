/*! Inbound Analyticsv1.0.0 | (c) 2017 Inbound Now | https://github.com/inboundnow/cta */
function inboundFormNoRedirect(){if(null==window.frames.frameElement)var e=document.querySelectorAll("button.inbound-button-submit[disabled]")[0];else if("iframe"==window.frames.frameElement.tagName.toLowerCase())var e=window.frames.frameElement.contentWindow.document.querySelectorAll("button.inbound-button-submit")[0];if("undefined"!=typeof e){var t=e.form,n=t.querySelectorAll('input[value][type="hidden"][name="inbound_furl"]:not([value=""])');(0==n.length||"IA=="==n[0].value)&&(t.action="javascript:void(0)")}}function inboundFormNoRedirectContent(){if(null==window.frames.frameElement)var e=document.querySelectorAll("button.inbound-button-submit[disabled]")[0];else if("iframe"==window.frames.frameElement.tagName.toLowerCase())var e=window.frames.frameElement.contentWindow.document.querySelectorAll("button.inbound-button-submit")[0];if("undefined"!=typeof e){var t=e.form,n=t.querySelectorAll('input[value][type="hidden"][name="inbound_furl"]:not([value=""])'),i=jQuery(e).css("background"),o=jQuery(e).css("color"),a=jQuery(e).css("height"),r=e.getElementsByClassName("inbound-form-spinner");(0==n.length||"IA=="==n[0].value)&&(jQuery(r).remove(),jQuery(e).prepend('<div id="redir-check"><i class="fa fa-check-square" aria-hidden="true" style="background='+i+"; color="+o+"; font-size:calc("+a+' * .42);"></i></div>'))}}var inbound_data=inbound_data||{},_inboundOptions=_inboundOptions||{},_gaq=_gaq||[],_inbound=function(e){var t={timeout:inbound_settings.is_admin?500:1e4,formAutoTracking:!0,formAutoPopulation:!0},n={init:function(){_inbound.Utils.init(),_inbound.Utils.domReady(window,function(){_inbound.DomLoaded()})},DomLoaded:function(){_inbound.PageTracking.init(),_inbound.Forms.init(),_inbound.Utils.setUrlParams(),_inbound.LeadsAPI.init(),setTimeout(function(){_inbound.Forms.init()},2e3),_inbound.trigger("analytics_ready")},extend:function(e,t){var n,i={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},debug:function(){},deBugger:function(e,t,n){if(console){var i,o,a,r=document.location.hash?document.location.hash:"",s=r.indexOf("#debug")>-1,t=t||!1;r&&r.match(/debug/)&&(r=r.split("-"),a=r[1]),o="true"===_inbound.Utils.readCookie("inbound_debug")?!0:!1,i="true"===_inbound.Utils.readCookie("inbound_debug_"+e)?!0:!1,(i||s||o)&&(t&&"string"==typeof t&&(o||"all"===a?console.log('logAll "'+e+'"  =>',t):i?console.log('log "'+e+'" =>',t):e===a&&console.log('#log "'+e+'" =>',t)),n&&n instanceof Function&&n())}}},i=n.extend(t,e);return n.Settings=i||{},n}(_inboundOptions),_inboundHooks=function(e){var t=function(){function e(e,t,n,i){return"string"==typeof e&&"function"==typeof t&&(n=parseInt(n||10,10),s("actions",e,t,n,i)),d}function t(){var e=Array.prototype.slice.call(arguments),t=e.shift();return"string"==typeof t&&u("actions",t,e),d}function n(e,t){return"string"==typeof e&&r("actions",e,t),d}function i(e,t,n){return"string"==typeof e&&"function"==typeof t&&(n=parseInt(n||10,10),s("filters",e,t,n)),d}function o(){var e=Array.prototype.slice.call(arguments),t=e.shift();return"string"==typeof t?u("filters",t,e):d}function a(e,t){return"string"==typeof e&&r("filters",e,t),d}function r(e,t,n,i){if(c[e][t])if(n){var o,a=c[e][t];if(i)for(o=a.length;o--;){var r=a[o];r.callback===n&&r.context===i&&a.splice(o,1)}else for(o=a.length;o--;)a[o].callback===n&&a.splice(o,1)}else c[e][t]=[]}function s(e,t,n,i,o){var a={callback:n,priority:i,context:o},r=c[e][t];r?(r.push(a),r=l(r)):r=[a],c[e][t]=r}function l(e){for(var t,n,i,o=1,a=e.length;a>o;o++){for(t=e[o],n=o;(i=e[n-1])&&i.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}function u(e,t,n){var i=c[e][t];if(!i)return"filters"===e?n[0]:!1;var o=0,a=i.length;if("filters"===e)for(;a>o;o++)n[0]=i[o].callback.apply(i[o].context,n);else for(;a>o;o++)i[o].callback.apply(i[o].context,n);return"filters"===e?n[0]:!0}var d={removeFilter:a,applyFilters:o,addFilter:i,removeAction:n,doAction:t,addAction:e},c={actions:{},filters:{}};return d};return e.hooks=new t,e.add_action=function(){var t=arguments[0].split(" ");for(k in t)arguments[0]="inbound."+t[k],e.hooks.addAction.apply(this,arguments);return this},e.remove_action=function(){return arguments[0]="inbound."+arguments[0],e.hooks.removeAction.apply(this,arguments),this},e.do_action=function(){return arguments[0]="inbound."+arguments[0],e.hooks.doAction.apply(this,arguments),this},e.add_filter=function(){return arguments[0]="inbound."+arguments[0],e.hooks.addFilter.apply(this,arguments),this},e.remove_filter=function(){return arguments[0]="inbound."+arguments[0],e.hooks.removeFilter.apply(this,arguments),this},e.apply_filters=function(){return arguments[0]="inbound."+arguments[0],e.hooks.applyFilters.apply(this,arguments)},e}(_inbound||{}),_inboundUtils=function(e){var t,n=window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,i=(Object.prototype.toString,("https:"==location.protocol?"https://":"http://")+location.hostname+location.pathname.replace(/\/$/,"")),o={api_host:i,track_pageview:!0,track_links_timeout:300,cookie_name:"_sp",cookie_expiration:365,cookie_domain:(host=location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i))?host[0]:""};return e.Utils={init:function(){this.polyFills(),this.checkLocalStorage(),this.SetUID(),this.storeReferralData()},polyFills:function(){window.console||(window.console={});for(var e=["log","info","warn","error","debug","trace","dir","group","groupCollapsed","groupEnd","time","timeEnd","profile","profileEnd","dirxml","assert","count","markTimeline","timeStamp","clear"],t=0;t<e.length;t++)window.console[e[t]]||(window.console[e[t]]=function(){});Date.prototype.toISOString||!function(){function e(e){var t=String(e);return 1===t.length&&(t="0"+t),t}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}();try{new CustomEvent("?")}catch(n){this.CustomEvent=function(e,t){function n(n,o){var a=document.createEvent(e);return null!==n?i.call(a,n,(o||(o=t)).bubbles,o.cancelable,o.detail):a.initCustomEvent=i,a}function i(t,n,i,o){this["init"+e](t,n,i,o),"detail"in this||(this.detail=o)}return n}(this.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}document.querySelectorAll||(document.querySelectorAll=function(e){var t,n=document.createElement("style"),i=[];for(document.documentElement.firstChild.appendChild(n),document._qsa=[],n.styleSheet.cssText=e+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),n.parentNode.removeChild(n);document._qsa.length;)t=document._qsa.shift(),t.style.removeAttribute("x-qsa"),i.push(t);return document._qsa=null,i}),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null}),!("innerText"in document.createElement("a"))&&"getSelection"in window&&HTMLElement.prototype.__defineGetter__("innerText",function(){for(var e,t=window.getSelection(),n=[],i=0;i<t.rangeCount;i++)n[i]=t.getRangeAt(i);t.removeAllRanges(),t.selectAllChildren(this),e=t.toString(),t.removeAllRanges();for(var i=0;i<n.length;i++)t.addRange(n[i]);return e})},createCookie:function(e,t,n){var i="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toGMTString()}document.cookie=e+"="+t+i+"; path=/"},readCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},eraseCookie:function(e){this.createCookie(e,"",-1)},getAllCookies:function(){var t={};if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var o=n[i].split("=");o[0]=o[0].replace(/^ /,""),t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e.totalStorage("inbound_cookies",t),t},setUrlParams:function(){var n={};!function(){for(var e,t=function(e){return decodeURIComponent(e).replace(/\+/g," ")},i=window.location.search.substring(1),o=/([^&=]+)=?([^&]*)/g;e=o.exec(i);)if("-1"==e[1].indexOf("["))n[t(e[1])]=t(e[2]);else{var a=e[1].indexOf("["),r=e[1].slice(a+1,e[1].indexOf("]",a)),s=t(e[1].slice(0,a));"object"!=typeof n[s]&&(n[t(s)]={},n[t(s)].length=0),r?n[t(s)][t(r)]=t(e[2]):Array.prototype.push.call(n[t(s)],t(e[2]))}}();for(var i in n)if("action"!=i)if("object"==typeof n[i])for(var o in n[i])this.createCookie(o,n[i][o],30);else this.createCookie(i,n[i],30);if(t){var a=e.totalStorage("inbound_url_params")||{},r=this.mergeObjs(a,n);e.totalStorage("inbound_url_params",r)}var s={option1:"yo",option2:"woooo"};e.trigger("url_parameters",n,s)},getAllUrlParams:function(){var n={};if(t)var n=e.totalStorage("inbound_url_params");return n},getParameterVal:function(e,t){return(RegExp(e+"=(.+?)(&|$)").exec(t)||[,!1])[1]},checkLocalStorage:function(){if("localStorage"in window)try{ls="undefined"==typeof window.localStorage?void 0:window.localStorage,t="undefined"==typeof ls||"undefined"==typeof window.JSON?!1:!0}catch(e){t=!1}return t},showLocalStorageSize:function(){function e(e){return 2*e.length}function t(e){return e/1024/1024}function n(t){return{name:t,size:e(localStorage[t])}}function i(e){return e.size=t(e.size).toFixed(2)+" MB",e}var o=Object.keys(localStorage).map(n).map(i);console.table(o)},addDays:function(e,t){return new Date(e.getTime()+24*t*60*60*1e3)},GetDate:function(){var e=new Date,t=e.getDate(),n=10>t?"0":"",i=e.getFullYear(),o=e.getHours(),a=10>o?"0":"",r=e.getMinutes(),s=10>r?"0":"",l=e.getSeconds(),u=10>l?"0":"",d=e.getMonth()+1,c=10>d?"0":"",m=i+"/"+c+d+"/"+n+t+" "+a+o+":"+s+r+":"+u+l;return m},SetSessionTimeout:function(){var e=(this.readCookie("lead_session_expire"),new Date);e.setTime(e.getTime()+18e5),this.createCookie("lead_session_expire",!0,e)},storeReferralData:function(){var t=new Date,n=document.referrer||"Direct Traffic",i=e.Utils.readCookie("inbound_referral_site"),o=e.totalStorage("inbound_original_referral");t.setTime(t.getTime()+18e5),i||this.createCookie("inbound_referral_site",n,t),o||e.totalStorage("inbound_original_referral",o)},CreateUID:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(""),n="";e||(e=Math.floor(Math.random()*t.length));for(var i=0;e>i;i++)n+=t[Math.floor(Math.random()*t.length)];return n},generateGUID:function(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,guid)},SetUID:function(e){if(!this.readCookie("wp_lead_uid")){var t=e||this.CreateUID(35);this.createCookie("wp_lead_uid",t)}},countProperties:function(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&++t;return t},mergeObjs:function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},hasClass:function(e,t){var n;if("classList"in document.documentElement)var n=t.classList.contains(e);else var n=new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className);return n},addClass:function(e,t){"classList"in document.documentElement?t.classList.add(e):this.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},removeClass:function(e,t){"classList"in document.documentElement?t.classList.remove(e):this.hasClass(t,e)&&(t.className=t.className.replace(new RegExp("(^|\\s)*"+e+"(\\s|$)*","g"),""))},removeElement:function(e){e.parentNode.removeChild(e)},trim:function(e){return e=e.replace(/(^\s*)|(\s*$)/gi,""),e=e.replace(/[ ]{2,}/gi," "),e=e.replace(/\n /,"\n")},ajaxPolyFill:function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,t=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],n=0;n<t.length;n++)try{e=new ActiveXObject(t[n]);break}catch(i){}return e},ajaxSendData:function(e,t,n,i){var o=this.ajaxPolyFill();setTimeout(function(){o.open(n,e,!0),o.onreadystatechange=function(){4==o.readyState&&t(o.responseText)},"POST"==n&&o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(i)},100)},ajaxGet:function(e,t,n,i){var o=[];for(var a in t)o.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));this.ajaxSendData(e+"?"+o.join("&"),n,"GET",null,i)},ajaxPost:function(e,t,n,i){var o=[];for(var a in t)o.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));this.ajaxSendData(e,n,"POST",o.join("&"),i)},sendEvent:function(e,t,i){t=t||{},async=!0;var a=getCookie();if(a){var r;for(r in a)t[r]=a[r]}t.id||(t.id=getId());var s={e:e,t:(new Date).toISOString(),kv:t},l=o.api_host+"/track?data="+encodeURIComponent(JSON.stringify(s));if(n){var u=new XMLHttpRequest;u.open("GET",l,async),u.withCredentials=async,u.send(null)}else{var d=document.createElement("script");d.type="text/javascript",d.async=async,d.defer=async,d.src=l;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(d,c)}return action(i),self},domReady:function(e,t){var n=!1,i=!0,o=e.document,a=o.documentElement,r=o.addEventListener?"addEventListener":"attachEvent",s=o.addEventListener?"removeEventListener":"detachEvent",l=o.addEventListener?"":"on",u=function(i){("readystatechange"!=i.type||"complete"==o.readyState)&&(("load"==i.type?e:o)[s](l+i.type,u,!1),!n&&(n=!0)&&t.call(e,i.type||i))},d=function(){try{a.doScroll("left")}catch(e){return setTimeout(d,50),void 0}u("poll")};if("complete"==o.readyState)t.call(e,"lazy");else{if(o.createEventObject&&a.doScroll){try{i=!e.frameElement}catch(c){}i&&d()}o[r](l+"DOMContentLoaded",u,!1),o[r](l+"readystatechange",u,!1),e[r](l+"load",u,!1)}},addListener:function(e,t,n){e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n)},removeListener:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},throttle:function(e,t){var n,i,o,a=null,r=0,s=function(){r=new Date,a=null,o=e.apply(n,i)};return function(){var l=new Date;r||(r=l);var u=t-(l-r);return n=this,i=arguments,0>=u?(clearTimeout(a),a=null,r=l,o=e.apply(n,i)):a||(a=setTimeout(s,u)),o}},checkTypeofGA:function(){"function"==typeof ga&&(universalGA=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(classicGA=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(googleTagManager=!0)}},e}(_inbound||{}),InboundForms=function(e){var t=!1,n=e.Utils,o=[],a=[],r=[],s=e.Settings,l=["first name","last name","name","email","e-mail","phone","website","job title","your favorite food","company","tele","address","comment"];if(e.Forms={init:function(){e.Forms.runFieldMappingFilters(),e.Forms.assignTrackClass(),e.Forms.formTrackInit()},runFieldMappingFilters:function(){l=e.hooks.applyFilters("forms.field_map",l)},debug:function(e,n){if(t&&console){var e=e||!1;e&&"string"==typeof e&&console.log(e),n&&n instanceof Function&&n()}},formTrackInit:function(){for(var e=0;e<window.document.forms.length;e++){var t=!1,n=window.document.forms[e];n.dataset.formProcessed||(n.dataset.formProcessed=!0,t=this.checkTrackStatus(n),t&&(this.attachFormSubmitEvent(n),this.initFormMapping(n)))}},checkTrackStatus:function(t){var n=t.getAttribute("class");return""!==n&&null!==n?n.toLowerCase().indexOf("wpl-track-me")>-1?!0:n.toLowerCase().indexOf("inbound-track")>-1?!0:(cb=function(){console.log(t)},e.deBugger("forms","This form not tracked. Please assign on in settings...",cb),!1):void 0},assignTrackClass:function(){if(window.inbound_settings){if(inbound_settings.inbound_track_include){var t=inbound_settings.inbound_track_include.split(","),n="add selectors "+inbound_settings.inbound_track_include;e.deBugger("forms",n),this.loopClassSelectors(t,"add")}if(inbound_settings.inbound_track_exclude){var t=inbound_settings.inbound_track_exclude.split(","),n="remove selectors "+inbound_settings.inbound_track_exclude;e.deBugger("forms",n),this.loopClassSelectors(t,"remove")}}},loopClassSelectors:function(t,i){for(var o=t.length-1;o>=0;o--){var a=n.trim(t[o]);-1===a.indexOf("#")&&-1===a.indexOf(".")&&(a="#"+a),a=document.querySelector(a),a&&("add"===i?(e.Utils.addClass("wpl-track-me",a),e.Utils.addClass("inbound-track",a)):(e.Utils.removeClass("wpl-track-me",a),e.Utils.removeClass("inbound-track",a)))}},initFormMapping:function(t){for(var n=[],i=0;i<t.elements.length;i++)formInput=t.elements[i],"hidden"!==formInput.type?(this.mapField(formInput),this.rememberInputValues(formInput),s.formAutoPopulation&&!e.Utils.hasClass("nopopulate",t)&&this.fillInputValues(formInput)):n.push(formInput);for(var o=n.length-1;o>=0;o--)formInput=n[o],this.mapField(formInput)},mapField:function(t){var a=t.id||!1,r=t.name||!1,s=this.getInputLabel(t);if(s){var u=this.ignoreFieldByLabel(s[0].innerText);if(u)return t.dataset.ignoreFormField=!0,!1}for(i=0;i<l.length;i++){var d=!1,c=l[i],m=n.trim(c),f=m.replace(/ /g,"_");r&&r.toLowerCase().indexOf(m)>-1?(d=!0,e.deBugger("forms","Found matching name attribute for -> "+m)):a&&a.toLowerCase().indexOf(m)>-1?(d=!0,e.deBugger("forms","Found matching ID attribute for ->"+m)):s?s[0].innerText.toLowerCase().indexOf(m)>-1&&(d=!0,e.deBugger("forms","Found matching sibling label for -> "+m)):o.push(m),d&&(this.addDataAttr(t,f),this.removeArrayItem(l,m),i--)}return inbound_data},formListener:function(t){t.preventDefault(),e.Forms.saveFormData(t.target),document.body.style.cursor="wait"},attachFormSubmitEvent:function(e){n.addListener(e,"submit",this.formListener);document.querySelector(".inbound-email")},ignoreFieldByLabel:function(t){var n=!1;return t?((-1!=t.toLowerCase().indexOf("credit card")||-1!=t.toLowerCase().indexOf("card number"))&&(n=!0),(-1!=t.toLowerCase().indexOf("expiration")||-1!=t.toLowerCase().indexOf("expiry"))&&(n=!0),("month"==t.toLowerCase()||"mm"==t.toLowerCase()||"yy"==t.toLowerCase()||"yyyy"==t.toLowerCase()||"year"==t.toLowerCase())&&(n=!0),(-1!=t.toLowerCase().indexOf("cvv")||-1!=t.toLowerCase().indexOf("cvc")||-1!=t.toLowerCase().indexOf("secure code")||-1!=t.toLowerCase().indexOf("security code"))&&(n=!0),n&&e.deBugger("forms","ignore "+t),n):!1},ignoreFieldByValue:function(e){var t=!1;if(!e)return!1;("visa"==e.toLowerCase()||"mastercard"==e.toLowerCase()||"american express"==e.toLowerCase()||"amex"==e.toLowerCase()||"discover"==e.toLowerCase())&&(t=!0);var n=new RegExp("/^[0-9]+$/");if(n.test(e)){var i=e.replace(" ","");this.isInt(i)&&i.length>=16&&(t=!0)}return t},isInt:function(e){return"number"==typeof e&&isFinite(e)&&e%1===0},releaseFormSubmit:function(e){document.body.style.cursor="default",n.removeClass("wpl-track-me",e),n.removeListener(e,"submit",this.formListener);var t=e.getAttribute("class");return""!==t&&null!==t&&-1!=t.toLowerCase().indexOf("wpcf7-form")?(setTimeout(function(){document.body.style.cursor="default"},300),!0):(e.submit(),setTimeout(function(){for(var t=0;t<e.elements.length;t++)formInput=e.elements[t],type=formInput.type||!1,"submit"===type&&"submit"===formInput.name&&e.elements[t].click()},2e3),void 0)},saveFormData:function(t){for(var i=i||{},o=0;o<t.elements.length;o++)if(formInput=t.elements[o],multiple=!1,formInput.name){if(formInput.dataset.ignoreFormField){e.deBugger("forms","ignore "+formInput.name);continue}switch(inputName=formInput.name.replace(/\[([^\[]*)\]/g,"%5B%5D$1"),i[inputName]||(i[inputName]={}),formInput.type&&(i[inputName].type=formInput.type),i[inputName].name||(i[inputName].name=formInput.name),formInput.dataset.mapFormField&&(i[inputName].map=formInput.dataset.mapFormField),formInput.nodeName){case"INPUT":if(l=this.getInputValue(formInput),l===!1)continue;break;case"TEXTAREA":l=formInput.value;break;case"SELECT":if(formInput.multiple){values=[],multiple=!0;for(var s=0;s<formInput.length;s++)formInput[s].selected&&values.push(encodeURIComponent(formInput[s].value))}else l=formInput.value}if(e.deBugger("forms","Input Value = "+l),l){i[inputName].value||(i[inputName].value=[]),i[inputName].value.push(multiple?values.join(","):encodeURIComponent(l));var l=multiple?values.join(","):encodeURIComponent(l)}}e.deBugger("forms",i);for(var u in i){var d=i[u].value,c=i[u].map;if("undefined"!=typeof d&&null!=d&&""!=d&&a.push(u+"="+i[u].value.join(",")),"undefined"!=typeof c&&null!=c&&i[u].value&&(r.push(c+"="+i[u].value.join(",")),"email"===u))var m=i[u].value.join(",")}var f=a.join("&");e.deBugger("forms","Stringified Raw Form PARAMS: "+f);var g=r.join("&");e.deBugger("forms","Stringified Mapped PARAMS"+g);var m=n.getParameterVal("email",g)||n.readCookie("wp_lead_email");m||(m=n.getParameterVal("wpleads_email_address",g));var p=n.getParameterVal("name",g),v=n.getParameterVal("first_name",g),h=n.getParameterVal("last_name",g);if(!h&&v){var _=decodeURI(v).split(" ");_.length>0&&(v=_[0],h=_[1])}if(p&&!h&&!v){var _=decodeURI(p).split(" ");_.length>0&&(v=_[0],h=_[1])}p=v&&h?v+" "+h:p,v||(v=""),h||(h=""),e.deBugger("forms","fName = "+v),e.deBugger("forms","lName = "+h),e.deBugger("forms","fullName = "+p);var b=e.totalStorage("page_views")||{},y=e.totalStorage("inbound_url_params")||{},w=t.querySelectorAll('input[value][type="hidden"][name="inbound_furl"]:not([value=""])'),k=!1;if(0==w.length||"IA=="==w[0].value)var k=!0;var C=t.querySelectorAll('input[value][type="hidden"][name="inbound_form_id"]');C=C.length>0?C[0].value:0;if("undefined"!=typeof landing_path_info)var S=landing_path_info.variation;else if("undefined"!=typeof cta_path_info)var S=cta_path_info.variation;else var S=inbound_settings.variation_id;var I=inbound_settings.post_type||"page",L=inbound_settings.post_id||0;search_data={},formData={action:"inbound_lead_store",email:m,full_name:p,first_name:v,last_name:h,raw_params:f,mapped_params:g,url_params:JSON.stringify(y),search_data:"test",page_views:JSON.stringify(b),post_type:I,page_id:L,variation:S,source:n.readCookie("inbound_referral_site"),inbound_submitted:k,inbound_form_id:C,inbound_nonce:inbound_settings.ajax_nonce,event:t},callback=function(i){e.deBugger("forms","Lead Created with ID: "+i),i=parseInt(i,10),formData.leadID=i,i&&(n.createCookie("wp_lead_id",i),e.totalStorage.deleteItem("page_views"),e.totalStorage.deleteItem("tracking_events")),e.trigger("form_after_submission",formData),e.Forms.releaseFormSubmit(t)},e.trigger("form_before_submission",formData),n.ajaxPost(inbound_settings.admin_url,formData,callback)},rememberInputValues:function(t){var i=(t.name?"inbound_"+t.name:"",t.type?t.type:"text");return"submit"===i||"hidden"===i||"file"===i||"password"===i||t.dataset.ignoreFormField?!1:(n.addListener(t,"change",function(t){if(t.target.name){if("checkbox"!==i)var o=t.target.value;else for(var a=[],r=document.querySelectorAll('input[name="'+t.target.name+'"]'),s=0;s<r.length;s++){var l=r[s].checked;l&&a.push(r[s].value),o=a.join(",")}inputData={name:t.target.name,node:t.target.nodeName.toLowerCase(),type:i,value:o,mapping:t.target.dataset.mapFormField},e.trigger("form_input_change",inputData),n.createCookie("inbound_"+t.target.name,encodeURIComponent(o))}}),void 0)},fillInputValues:function(e){var t=e.name?"inbound_"+e.name:"",i=e.type?e.type:"text";if("submit"===i||"hidden"===i||"file"===i||"password"===i)return!1;if(n.readCookie(t)&&"comment"!=t)if(value=decodeURIComponent(n.readCookie(t)),"checkbox"===i||"radio"===i)for(var o=value.split(","),a=0;a<o.length;a++)e.value.indexOf(o[a])>-1&&(e.checked=!0);else"undefined"!==value&&(e.value=value)},getInputLabel:function(e){var t;return(t=this.siblingsIsLabel(e))?t:(t=this.CheckParentForLabel(e))?t:!1},getInputValue:function(e){var t=!1;switch(e.type){case"radio":case"checkbox":e.checked&&(t=e.value);break;case"text":case"hidden":default:t=e.value}return t},addDataAttr:function(e,t){for(var n=document.getElementsByName(e.name),i=n.length-1;i>=0;i--)e.dataset.mapFormField||(n[i].dataset.mapFormField=t)},removeArrayItem:function(e,t){if(e.indexOf)index=e.indexOf(t);else for(index=e.length-1;index>=0&&e[index]!==t;--index);index>=0&&e.splice(index,1)},siblingsIsLabel:function(e){for(var t=this.getSiblings(e),n=[],i=t.length-1;i>=0;i--)"label"===t[i].nodeName.toLowerCase()&&n.push(t[i]);return n.length>0&&n.length<2?n:!1},getChildren:function(e,t){for(var n=[];e;e=e.nextSibling)1==e.nodeType&&e!=t&&n.push(e);return n},getSiblings:function(e){return this.getChildren(e.parentNode.firstChild,e)},CheckParentForLabel:function(e){if("FORM"===e.nodeName)return null;do{var t=e.getElementsByTagName("label");if(t.length>0&&t.length<2)return e.getElementsByTagName("label")}while(e=e.parentNode);return null},mailCheck:function(){var e=document.querySelector(".inbound-email");e&&(n.addListener(e,"blur",this.mailCheck),u.run({email:document.querySelector(".inbound-email").value,suggested:function(t){var i=document.querySelector(".email_suggestion");i&&n.removeElement(i);var o=document.createElement("span");o.innerHTML="<span class=\"email_suggestion\">Did youu mean <b><i id='email_correction' style='cursor: pointer;' title=\"click to update\">"+t.full+"</b></i>?</span>",e.parentNode.insertBefore(o,e.nextSibling);var a=document.getElementById("email_correction");n.addListener(a,"click",function(){e.value=a.innerHTML,a.parentNode.parentNode.innerHTML="Fixed!"})},empty:function(){}}))}},"undefined"==typeof u)var u={domainThreshold:1,topLevelThreshold:3,defaultDomains:["yahoo.com","google.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","live.com","comcast.net","googlemail.com","msn.com","hotmail.co.uk","yahoo.co.uk","facebook.com","verizon.net","sbcglobal.net","att.net","gmx.com","mail.com","outlook.com","icloud.com"],defaultTopLevelDomains:["co.jp","co.uk","com","net","org","info","edu","gov","mil","ca","de"],run:function(e){e.domains=e.domains||u.defaultDomains,e.topLevelDomains=e.topLevelDomains||u.defaultTopLevelDomains,e.distanceFunction=e.distanceFunction||u.sift3Distance;var t=function(e){return e},n=e.suggested||t,i=e.empty||t,o=u.suggest(u.encodeEmail(e.email),e.domains,e.topLevelDomains,e.distanceFunction);return o?n(o):i()},suggest:function(e,t,n,i){e=e.toLowerCase();var o=this.splitEmail(e),a=this.findClosestDomain(o.domain,t,i,this.domainThreshold);if(a){if(a!=o.domain)return{address:o.address,domain:a,full:o.address+"@"+a}}else{var r=this.findClosestDomain(o.topLevelDomain,n,i,this.topLevelThreshold);if(o.domain&&r&&r!=o.topLevelDomain){var s=o.domain;return a=s.substring(0,s.lastIndexOf(o.topLevelDomain))+r,{address:o.address,domain:a,full:o.address+"@"+a}}}return!1},findClosestDomain:function(e,t,n,i){i=i||this.topLevelThreshold;var o,a=99,r=null;if(!e||!t)return!1;n||(n=this.sift3Distance);for(var s=0;s<t.length;s++){if(e===t[s])return e;o=n(e,t[s]),a>o&&(a=o,r=t[s])}return i>=a&&null!==r?r:!1},sift3Distance:function(e,t){if(null===e||0===e.length)return null===t||0===t.length?0:t.length;if(null===t||0===t.length)return e.length;for(var n=0,i=0,o=0,a=0,r=5;n+i<e.length&&n+o<t.length;){if(e.charAt(n+i)==t.charAt(n+o))a++;else{i=0,o=0;for(var s=0;r>s;s++){if(n+s<e.length&&e.charAt(n+s)==t.charAt(n)){i=s;break}if(n+s<t.length&&e.charAt(n)==t.charAt(n+s)){o=s;break}}}n++}return(e.length+t.length)/2-a},splitEmail:function(e){var t=e.trim().split("@");if(t.length<2)return!1;for(var n=0;n<t.length;n++)if(""===t[n])return!1;var i=t.pop(),o=i.split("."),a="";if(0===o.length)return!1;if(1==o.length)a=o[0];else{for(var n=1;n<o.length;n++)a+=o[n]+".";o.length>=2&&(a=a.substring(0,a.length-1))}return{topLevelDomain:a,domain:i,address:t.join("@")}},encodeEmail:function(e){var t=encodeURI(e);return t=t.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};return e}(_inbound||{}),_inboundEvents=function(e){function t(t,i,o){var i=i||{};o=o||{},o.bubbles=o.bubbles||!0,o.cancelable=o.cancelable||!0,i=e.apply_filters("filter_"+t,i);!window.ActiveXObject&&"ActiveXObject"in window;if("function"==typeof CustomEvent)var a=new CustomEvent(t,{detail:i,bubbles:o.bubbles,cancelable:o.cancelable});else{var a=document.createEvent("Event");a.initEvent(t,!0,!0)}window.dispatchEvent(a),e.do_action(t,i),n(t,i)}function n(e,t){if(window.jQuery){var t=t||{};jQuery(document).trigger(e,t)}}e.trigger=function(t,n){e.Events[t](n)};return e.Events={analytics_ready:function(){var e={opt1:!0},n={data:"xyxy"};t("analytics_ready",n,e)},url_parameters:function(e){t("url_parameters",e)},session_start:function(){console.log(""),t("session_start")},session_end:function(e){t("session_end",e),console.log("Session End")},session_active:function(){t("session_active")},session_idle:function(e){t("session_idle",e)},session_resume:function(){t("session_resume")},session_heartbeat:function(e){var n={clock:e,leadData:InboundLeadData};t("session_heartbeat",n)},page_visit:function(e){t("page_view",e)},page_first_visit:function(){t("page_first_visit"),e.deBugger("pages","First Ever Page View of this Page")},page_revisit:function(n){t("page_revisit",n);var i=function(){console.log("pageData",n),console.log("Page Revisit viewed "+n+" times")};e.deBugger("pages",status,i)},tab_hidden:function(){e.deBugger("pages","Tab Hidden"),t("tab_hidden")},tab_visible:function(){e.deBugger("pages","Tab Visible"),t("tab_visible")},tab_mouseout:function(){e.deBugger("pages","Tab Mouseout"),t("tab_mouseout")},form_input_change:function(n){var i=function(){console.log(n)};e.deBugger("forms","inputData change. Data=",i),t("form_input_change",n)},form_before_submission:function(e){t("form_before_submission",e)},form_after_submission:function(e){t("form_after_submission",e)},analyticsError:function(e,t,n){var i=new CustomEvent("inbound_analytics_error",{detail:{MLHttpRequest:e,textStatus:t,errorThrown:n}});window.dispatchEvent(i),console.log("Page Save Error")}},e}(_inbound||{});_inbound.add_action("form_before_submission",inboundFormNoRedirect,10),_inbound.add_action("form_after_submission",inboundFormNoRedirectContent,10);var InboundTotalStorage=function(e){var t,n,i="_inbound";if("localStorage"in window)try{n="undefined"==typeof window.localStorage?void 0:window.localStorage,t="undefined"==typeof n||"undefined"==typeof window.JSON?!1:!0,window.localStorage.setItem(i,"1"),window.localStorage.removeItem(i)}catch(o){t=!1}e.totalStorage=function(t,n){return e.totalStorage.impl.init(t,n)},e.totalStorage.setItem=function(t,n){return e.totalStorage.impl.setItem(t,n)},e.totalStorage.getItem=function(t){return e.totalStorage.impl.getItem(t)},e.totalStorage.getAll=function(){return e.totalStorage.impl.getAll()},e.totalStorage.deleteItem=function(t){return e.totalStorage.impl.deleteItem(t)},e.totalStorage.impl={init:function(e,t){return"undefined"!=typeof t?this.setItem(e,t):this.getItem(e)},setItem:function(i,o){if(!t)try{return e.Utils.createCookie(i,o),o}catch(a){console.log("Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie")}var r=JSON.stringify(o);return n.setItem(i,r),this.parseResult(r)},getItem:function(i){if(!t)try{return this.parseResult(e.Utils.readCookie(i))}catch(o){return null}var a=n.getItem(i);return this.parseResult(a)},deleteItem:function(i){if(!t)try{return e.Utils.eraseCookie(i,null),!0}catch(o){return!1}return n.removeItem(i),!0},getAll:function(){var i=[];if(t)for(var o in n)o.length&&i.push({key:o,value:this.parseResult(n.getItem(o))});else try{for(var a=document.cookie.split(";"),r=0;r<a.length;r++){var s=a[r].split("="),l=s[0];i.push({key:l,value:this.parseResult(e.Utils.readCookie(l))})}}catch(u){return null}return i},parseResult:function(e){var t;try{t=JSON.parse(e),"undefined"==typeof t&&(t=e),"true"==t&&(t=!0),"false"==t&&(t=!1),parseFloat(t)==t&&"object"!=typeof t&&(t=parseFloat(t))}catch(n){t=e}return t}}}(_inbound||{}),_inboundLeadsAPI=function(e){return e.LeadsAPI={init:function(){var t=e.Utils,n=(t.readCookie("wp_lead_uid"),t.readCookie("wp_lead_id")),i=t.readCookie("lead_session_expire");i||(e.deBugger("leads","expired vistor. Run Processes"),n&&e.LeadsAPI.getAllLeadData())},setGlobalLeadData:function(e){InboundLeadData=e},getAllLeadData:function(){var t=e.Utils.readCookie("wp_lead_id"),n=e.totalStorage("inbound_lead_data"),i=e.Utils.readCookie("lead_data_expire");
data={action:"inbound_get_all_lead_data",wp_lead_id:t},success=function(t){var n=JSON.parse(t);e.LeadsAPI.setGlobalLeadData(n),e.totalStorage("inbound_lead_data",n);var i=new Date;i.setTime(i.getTime()+18e5);var o=e.Utils.addDays(i,3);e.Utils.createCookie("lead_data_expire",!0,o)},n?(e.LeadsAPI.setGlobalLeadData(n),e.deBugger("lead","Set Global Lead Data from Localstorage"),i||(e.Utils.ajaxPost(inbound_settings.admin_url,data,success),e.deBugger("lead","localized data old. Pull new from DB"))):e.Utils.ajaxPost(inbound_settings.admin_url,data,success)},getLeadLists:function(){var t=e.Utils.readCookie("wp_lead_id"),n={action:"wpl_check_lists",wp_lead_id:t},i=function(){e.Utils.createCookie("lead_session_list_check",!0,{path:"/",expires:1}),e.deBugger("lead","Lists checked")};e.Utils.ajaxPost(inbound_settings.admin_url,n,i)}},e}(_inbound||{}),_inboundPageTracking=function(e){var t,n,i=!1,o=!1,a=!1,r=parseInt(e.Utils.readCookie("lead_session"),10)||0,s=0,l=(new Date,null),u=null,d=null,c=e.Utils,m=e.Utils.GetDate(),f="page_views",g=e.totalStorage(f)||{},p=inbound_settings.post_id||window.location.pathname,v=e.Settings.timeout||1e4;return e.PageTracking={init:function(i){return"page_views"!==f?!1:(this.CheckTimeOut(),i=i||{},t=parseInt(i.reportInterval,10)||10,n=parseInt(i.idleTimeout,10)||3,c.addListener(document,"keydown",c.throttle(e.PageTracking.pingSession,1e3)),c.addListener(document,"click",c.throttle(e.PageTracking.pingSession,1e3)),c.addListener(window,"mousemove",c.throttle(e.PageTracking.pingSession,1e3)),e.PageTracking.checkVisibility(),this.startSession(),void 0)},setIdle:function(t){var t=t||"No Movement",n="Session IDLE. Activity Timeout due to "+t;e.deBugger("pages",n),clearTimeout(e.PageTracking.idleTimer),e.PageTracking.stopClock(),e.trigger("session_idle")},checkVisibility:function(){var t,n,i;"undefined"!=typeof document.hidden?(t="hidden",i="visibilitychange",n="visibilityState"):"undefined"!=typeof document.mozHidden?(t="mozHidden",i="mozvisibilitychange",n="mozVisibilityState"):"undefined"!=typeof document.msHidden?(t="msHidden",i="msvisibilitychange",n="msVisibilityState"):"undefined"!=typeof document.webkitHidden&&(t="webkitHidden",i="webkitvisibilitychange",n="webkitVisibilityState");var o=document[t];e.Utils.addListener(document,i,function(){o!=document[t]&&(document[t]?(e.trigger("tab_hidden"),e.PageTracking.setIdle("browser tab switch")):(e.trigger("tab_visible"),e.PageTracking.pingSession()),o=document[t])})},clock:function(){r+=1;var n=r/60,i="Total time spent on Page in this Session: "+n.toFixed(2)+" min";if(e.deBugger("pages",i),r>0&&r%t===0){var o=new Date;o.setTime(o.getTime()+18e5),c.createCookie("lead_session",r,o),e.trigger("session_heartbeat",r)}},inactiveClock:function(){s+=1;var t=(1800-s)/60,n="Time until Session Timeout: "+t.toFixed(2)+" min";e.deBugger("pages",n),s>1800&&(e.trigger("session_end",InboundLeadData),e.Utils.eraseCookie("lead_session"),s=0,clearTimeout(u))},stopClock:function(){o=!0,clearTimeout(l),clearTimeout(u),u=setInterval(e.PageTracking.inactiveClock,1e3)},restartClock:function(){o=!1,e.trigger("session_resume"),e.deBugger("pages","Activity resumed. Session Active"),clearTimeout(l),s=0,clearTimeout(u),l=setInterval(e.PageTracking.clock,1e3)},turnOff:function(){e.PageTracking.setIdle(),a=!0},turnOn:function(){a=!1},startSession:function(){new Date;i=!0,l=setInterval(e.PageTracking.clock,1e3);var t=c.readCookie("lead_session");if(t)e.trigger("session_active");else{e.trigger("session_start");var n=new Date;n.setTime(n.getTime()+18e5),e.Utils.createCookie("lead_session",1,n)}this.pingSession()},resetInactiveFunc:function(){s=0,clearTimeout(u)},pingSession:function(t){a||(i||e.PageTracking.startSession(),o&&e.PageTracking.restartClock(),clearTimeout(d),d=setTimeout(e.PageTracking.setIdle,1e3*n+100),"undefined"!=typeof t&&"mousemove"===t.type&&e.PageTracking.mouseEvents(t))},mouseEvents:function(t){t.pageY<=5&&e.trigger("tab_mouseout")},getPageViews:function(){var t=e.Utils.checkLocalStorage();if(t){var n=localStorage.getItem(f),i=JSON.parse(n);return i}},isRevisit:function(e){var t=!1,e=e||{},n=e[p];return"undefined"!=typeof n&&null!==n&&(t=!0),t},triggerPageView:function(t){var n={title:document.title,url:document.location.href,path:document.location.pathname,count:1};t?(g[p].push(m),n.count=g[p].length,e.trigger("page_revisit",n)):(g[p]=[],g[p].push(m),e.trigger("page_first_visit",n)),e.trigger("page_visit",n),e.totalStorage(f,g),this.storePageView()},CheckTimeOut:function(){var t,n,i=this.isRevisit(g);if(i){var o=g[p].length-1,a=g[p][o],r=Math.abs(new Date(a).getTime()-new Date(m).getTime());n=r>v,n?(t="Timeout Happened. Page view fired",this.triggerPageView(i)):(time_left=.001*Math.abs(v-r),t=v/1e3+" sec timeout not done: "+time_left+" seconds left")}else this.triggerPageView(i);e.deBugger("pages",t)},storePageView:function(){if("off"!=inbound_settings.page_tracking){var t=e.Utils.readCookie("wp_lead_id")?e.Utils.readCookie("wp_lead_id"):"",n=e.Utils.readCookie("wp_lead_uid")?e.Utils.readCookie("wp_lead_uid"):"",i={action:"inbound_track_lead",wp_lead_uid:n,wp_lead_id:t,page_id:inbound_settings.post_id,variation_id:inbound_settings.variation_id,post_type:inbound_settings.post_type,current_url:window.location.href,page_views:JSON.stringify(e.PageTracking.getPageViews()),json:"0"},o=function(){};e.Utils.ajaxPost(inbound_settings.admin_url,i,o)}}},e}(_inbound||{});_inbound.init(),InboundLeadData=_inbound.totalStorage("inbound_lead_data")||null;