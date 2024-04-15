//~~tv:1191.aid500.20220622
//~~tc: Added setCustomerID Event


var loadLibrary = function () {
/**
*	@license
*	Adobe Visitor API for JavaScript version: 5.0.0
*	Copyright 2020 Adobe, Inc. All Rights Reserved
*	More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
*/
var e=function(){"use strict";function e(t){"@babel/helpers - typeof";return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,i=this;return function(){i.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!V.isObjectEmpty(e))&&Object.keys(this.ca llbacks).forEach(function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function i(e,t,n){var i=null==e?void 0:e[t];return void 0===i?n:i}function r(e){for(var t=/^\d+$/,n=0,i=e.length;n<i;n++)if(!t.test(e[n]))return!1;return!0}function a(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function o(e,t){for(var n=0;n<e.length;n++){var i=parseInt(e[n],10),r=parseInt(t[n],10);if(i>r)return 1;if(r>i)return-1}return 0}function s(e,t){if(e===t)return 0;var n=e.toString().split("."),i=t.toString().split(".");return r(n.concat(i))?(a(n,i),o(n,i)):NaN}function c(e){return e===Object(e)&&0===Object.keys(e).length}function u(e){return"function"==typeof e||e instanceof Array&&e.length}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=Ie("log",e,t),this.warn=Ie("warn",e,t),this. error=Ie("error",e,t)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cookieName,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.cookies;if(!t||!i)return{get:we,set:we,remove:we};var r={remove:function(){i.remove(t)},get:function(){var e=i.get(t),n={};try{n=JSON.parse(e)}catch(e){n={}}return n},set:function(e,n){n=n||{};var
 
a=r.get(),o=Object.assign(a,e);i.set(t,JSON.stringify(o),{domain:n.optInCookieDomain||"",cookieLifetime
:n.optInStorageExpiry||3419e4,expires:!0})}};return r}function f(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function p(){function e(e,t){var n=Ae(e);return n.length?n.every(function(e){return!!t[e]}):be(t)}function t(){M(b),O(le.COMPLETE),_(h.status,h.permissions),s&&m.set(h.permissions,{optInCookieDomain:c,optI nStorageExpiry:u}),C.execute(He)}function n(e){return function(n,i){if(!Oe(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return O(le.CHANGED),Object.assign(b,Me(Ae(n),e)),i||t(),h}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.doesOptInApply,a=i.previousPermissions,o=i.preOptInApprovals,s
=i.isOptInStorageEnabled,c=i.optInCookieDomain,u=i.optInStorageExpiry,l=i.isIabContext,f=arguments.le ngth>1&&void 0!==arguments[1]?arguments[1]:{},p=f.cookies,g=Fe(a);Ne(g,"Invalid
`previousPermissions`!"),Ne(o,"Invalid `preOptInApprovals`!");var m=d({cookieName:"adobeujs- optin"},{cookies:p}),h=this,_=ue(h),C=he(),I=Te(g),S=Te(o),v=s?m.get():{},D={},y=function(e,t){return Pe(e)||t&&Pe(t)?le.COMPLETE:le.PENDING}(I,v),A=function(e,t,n){var i=Me(me,!r);return r?Object.assign({},i,e,t,n):i}(S,I,v),b=ke(A),O=function(e){return y=e},M=function(e){return A=e};h.deny=n(!1),h.approve=n(!0),h.denyAll=h.deny.bind(h,me),h.approveAll=h.approve.bind(h,me),h.i sApproved=function(t){return e(t,h.permissions)},h.isPreApproved=function(t){return e(t,S)},h.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?h.on(le.COMPLETE,e):we;return!r||r&&h.isComplete||!!o?e(h.p ermissions):t||C.add(He,function(){return e(h.permissions)}),n},h.complete=function(){h.status===le.CHANGED&&t()},h.registerPlugin=function(e){ if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(Ue);D[e.name]||(D[e.name]=e,e.onRegister.call(e,h))},h.execute=Ve(D),h.memoizeContent=functi on(e){Re(e)&&m.set(e,{optInCookieDomain:c,optInStorageExpiry:u})},h.getMemoizedContent=function( e){var t=m.get();if(t)return t[e]},Object.defineProperties(h,{permissions:{get:function(){return A}},status:{get:function(){return y}},Categories:{get:function(){return de}},doesOptInApply:{get:function(){return!!r}},isPending:{get:function(){return h.status===le.PENDING}},isComplete:{get:function(){return
h.status===le.COMPLETE}}, plugins:{get:function(){return Object.keys(D)}},isIabContext:{get:function(){return l}}})}function g(e,t){function n(){r=null,e.call(e,new f("The call took longer than you wanted!"))}function i(){r&&(clearTimeout(r),e.apply(e,arguments))}if(void 0===t)return e;var r=setTimeout(n,t);return i}function m(){if(window. tcfapi)return window. tcfapi;var e=window;if(e===window.top)return void De.error(" tcfapi not found");for(var
t;!t;){e=e.parent;try{e.frames. tcfapiLocator&&(t=e)}catch(e){}if(e===window.top)break}if(!t)return void De.error(" tcfapi not found");var n={};return window. tcfapi=function(e,i,r,a){var o=Math.random()+"",s={ tcfapiCall:{command:e,parameter:a,version:i,callId:o}};n[o]=r,t.postMessage( s,"*")},window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t. tcfapiReturn){var i=t. tcfapiReturn;"function"==typeof n[i.callId]&&(n[i.callId](i.returnValue,i.success),delete n[i.callId])}},!1),window. tcfapi}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=!0===e.vendor.consents[t],r=n.every(function(t){return!0===e.pur
 
pose.consents[t]});return i&&r}function _(){var e=this;e.name="iabPlugin",e.version="0.0.2";var t,n=he(),i={transparencyAndConsentData:null},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i[e]=t};e.fetchConsentData=function(e){var t=e.callback,n=e.timeout,i=g(t,n);a({callback:i})},e.isApproved=function(e){var t=e.callback,n=e.category,r=e.timeout;if(i.transparencyAndConsentData)return t(null,h(i.transparencyAndConsentData,fe[n],pe[n]));var o=g(function(e,i){t(e,h(i,fe[n],pe[n]))},r);a({category:n,callback:o})},e.onRegister=function(n){t=n;var i=Object.keys(fe),r=function(e,t){!e&&t&&(i.forEach(function(e){var i=h(t,fe[e],pe[e]);n[i?"approve":"deny"](e,!0)}),n.complete())};e.fetchConsentData({callback:r})};var a=function(e){var a=e.callback;if(i.transparencyAndConsentData)return a(null,i.transparencyAndConsentData);n.add("FETCH_CONSENT_DATA",a),o(function(e,a){if(a){var o=ke(e),s=t.getMemoizedContent("iabConsentHash"),c=ve(o.tcString).toString(32);o.consentString=e.tc String,o.hasConsentChangedSinceLastCmpPull=s!==c,r("transparencyAndConsentData",o),t.memoizeCo ntent({iabConsentHash:c})}n.execute("FETCH_CONSENT_DATA",[null,i.transparencyAndConsentData])})}
,o=function(e){var t=je(fe),n=m();"function"==typeof n&&n("getTCData",2,e,t)}}var C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,i=1;i<arguments.length;++i){n=arguments[i];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};var I,S,v={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},D={MCMID:" MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CU
STOMERIDS:"CUSTOMERIDS"},y={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID", MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isO ptedOut",ALLFIELDS:"getVisitorValues"},A={CUSTOMERIDS:"getCustomerIDs"},b={MCMID:"getMarketin gCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint", MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"g etVisitorValues"},O={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},M={MCMID:"MCMID",MCOPTOUT:"M COPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},k={UNKNOWN:0,AUTHENTI CATED:1,LOGGED_OUT:2},E={GLOBAL:"global"},T={MESSAGES:v,STATE_KEYS_MAP:D,ASYNC_API_MAP:y
,SYNC_API_MAP:A,ALL_APIS:b,FIELDGROUP_TO_FIELD:O,FIELDS:M,AUTH_STATE:k,OPT_OUT:E},P=T.STA
TE_KEYS_MAP,L=function(e){function t(){}function n(t,n){var i=this;return function(){var r=e(0,t),a={};return a[t]=r,i.setStateAndPublish(a),n(r),r}}this.getMarketingCloudVisitorID=function(e){e=e||t;var i=this.findField(P.MCMID,e),r=n.call(this,P.MCMID,e);return void 0!==i?i:r()},this.getVisitorValues=function(e){this.getMarketingCloudVisitorID(function(t){e({MCMID:t})})
}},R=T.MESSAGES,w=T.ASYNC_API_MAP,F=T.SYNC_API_MAP,N=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(R.GETSTATE),""}}function n(n){this[w[n]]=function(i){i=i||e;var r=this.findField(n,i),a=t.call(this,n,i);return void 0!==r?r:a()}}function i(t){this[F[t]]=function(){return this.findField(t,e)||{}}}Object.keys(w).forEach(n,this),Object.keys(F).forEach(i,this)},x=T.ASYNC_API_MA P,j=function(){Object.keys(x).forEach(function(e){this[x[e]]=function(t){this.callbackRegistry.add(e,t)}},thi s)},V=function(e,t){return
 
t={exports:{}},e(t,t.exports),t.exports}(function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpt y(e)};var i=function(){var e=navigator.appName,t=navigator.userAgent;return"Microsoft Internet Explorer"===e||t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0&&t.indexOf("Windows NT 6")>=0};n.getIeVersion=function(){return document.documentMode?document.documentMode:i()?7:null},n.encodeAndBuildRequest=function(e, t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){retur n t.reduce(function(t,n){return e[n]&&(t[n]=e[n]),t},Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_opto ut instanceof Array&&(t=e.d_optout.join(",")));var i=parseInt(e.d_ottl,10);return isNaN(i)&&(i=7200),{optOut:t,d_ottl:i}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}}),H=(V.isObjectEmpty,V.isValueEmpty,V.getIeVersion, V.encodeAndBuildRequest,V.isObject,V.defineGlobalNamespace,V.pluck,V.parseOptOut,V.normalizeBoo lean,n),U=T.MESSAGES,B={0:"prefix",1:"orgID",2:"state"},G=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,n){if(void 0!==e){t[B[n]]=2!==n?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(n){var i=this.parse(n);if(!i||Object.keys(i).length<2)return!0;var r=e!==i.orgID,a=!t||n.origin!==t,o=- 1===Object.keys(U).indexOf(i.prefix);return r||a||o},this.send=function(n,i,r){var a=i+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{n.postMessage(a,t)}catch(e){}}},Y=T.MESSA GES,q=function(e,t,n,i){function r(e){Object.assign(p,e)}function a(e){Object.assign(p.state,e),Object.assign(p.state.ALLFIELDS,e),p.callbackRegistry.executeAll(p.state)}fu nction o(e){if(!h.isInvalid(e)){m=!1;var t=h.parse(e);p.setStateAndPublish(t.state)}}function s(e){!m&&g&&(m=!0,h.send(i,e))}function c(){r(new L(n._generateID)),p.getMarketingCloudVisitorID(),p.callbackRegistry.executeAll(p.state,!0),C.removeEve ntListener("message",u)}function u(e){if(!h.isInvalid(e)){var t=h.parse(e);m=!1,C.clearTimeout(p._handshakeTimeout),C.removeEventListener("message",u),r(new N(p)),C.addEventListener("message",o),p.setStateAndPublish(t.state),p.callbackRegistry.hasCallbacks()& &s(Y.GETSTATE)}}function l(){g&&postMessage?(C.addEventListener("message",u),s(Y.HANDSHAKE),p._handshakeTimeout=setTim eout(c,250)):c()}function d(){C.s_c_in||(C.s_c_il=[],C.s_c_in=0),p._c="Visitor",p._il=C.s_c_il,p._in=C.s_c_in,p._il[p._in]=p,C.s_c_in+
+}function f(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(p[e]=function(){})}Object.keys(n).forEach(e),p.getSupplementalDataID=n.getSupplementalDataI D,p.isAllowed=function(){return!0}}var p=this,g=t.whitelistParentDomain;p.state={ALLFIELDS:{}},p.version=n.version,p.marketingCloudOrgID=e, p.cookieDomain=n.cookieDomain||"",p._instanceType="child";var m=!1,h=new G(e,g);p.callbackRegistry=H(),p.init=function(){d(),f(),r(new j(p)),l()},p.findField=function(e,t){if(void 0!==p.state[e])return t(p.state[e]),p.state[e]},p.messageParent=s,p.setStateAndPublish=a},W=T.MESSAGES,X=T.ALL_APIS,K=T. ASYNC_API_MAP,J=T.FIELDGROUP_TO_FIELD,z=function(e,t){function n(){var t={};return Object.keys(X).forEach(function(n){var i=X[n],r=e[i]();V.isValueEmpty(r)||(t[n]=r)}),t}function i(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(n){if(e._loading[n]){var
 
i=J[n];t.push(i)}}),t.length?t:null}function r(t){return function n(r){var a=i();if(a){var
o=K[a[0]];e[o](n,!0)}else t()}}function a(e,i){var r=n();t.send(e,i,r)}function
o(e){c(e),a(e,W.HANDSHAKE)}function s(e){r(function(){a(e,W.PARENTSTATE)})()}function c(n){function i(i){r.call(e,i),t.send(n,W.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=i}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===W.HANDSHAKE?o:s)(e.source)}}},Q=function(e,t){functi on n(e){return function(n){i[e]=n,r++,r===a&&t(i)}}var i={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var i=e[t];if(i.fn){var r=i.args||[];r.unshift(n(t)),i.fn.apply(i.context||null,r)}})},$={get:function(e){e=encodeURIComponent(e); var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),i=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,i<0?t.length:i))},set:function(e,t,n){var r=i(n,"cookieLifetime"),a=i(n,"expires"),o=i(n,"domain"),s=i(n,"secure"),c=s?"Secure":"";if(a&&"SESSION "!==r&&"NONE"!==r){var u=""!==t?parseInt(r||0,10):-60;if(u)a=new Date,a.setTime(a.getTime()+1e3*u);else if(1===a){a=new Date;var l=a.getYear();a.setYear(l+2+(l<1900?1900:0))}}else a=0;return e&&"NONE"!==r?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(a?" expires="+a.toGMTString()+";":"")+(o?" domain="+o+";":"")+c,this.get(e)===t):0},remove:function(e,t){var n=i(t,"domain");n=n?" domain="+n+";":"",document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970
00:00:01 GMT;"+n}},Z=function(e){var t;!e&&C.location&&(e=C.location.hostname),t=e;var n,i=t.split(".");for(n=i.length-2;n>=0;n--)if(t=i.slice(n).join("."),$.set("test","cookie",{domain:t}))return
$.remove("test",{domain:t}),t;return""},ee={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}},te=!!C.postMessage,ne={postMessage:function(e,t,n){var i=1;t&&(te?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+" #"+ +new Date+i+++"&"+e))},receiveMessage:function(e,t){var n;try{te&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),C.addEventListener?C[ e?"addEventListener":"removeEventListener"]("message",n):C[e?"attachEvent":"detachEvent"]("onmes sage",n))}catch(e){}}},ie=function(e){var t,n,i="0123456789",r="",a="",o=8,s=10,c=10;if(1==e){for(i+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math. random()*o),r+=i.substring(n,n+1),n=Math.floor(Math.random()*o),a+=i.substring(n,n+1),o=16;return r+"-
"+a}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),r+=i.substring(n,n+1),0===t&&9==n?s=3:(1==t||2
==t)&&10!=s&&2>n?s=10:2<t&&(s=10),n=Math.floor(Math.random()*c),a+=i.substring(n,n+1),0===t&& 9==n?c=3:(1==t||2==t)&&10!=c&&2>n?c=10:2<t&&(c=10);return r+a},re=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.c all(C.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSIn stance:function(){return"none"===this.corsMetadata.corsType?null:new C[this.corsMetadata.corsType]},fireCORS:function(t,n,i){function r(e){var
 
n;try{if((n=JSON.parse(e))!==Object(n))return void a.handleCORSError(t,null,"Response is not JSON")}catch(e){return void a.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var i=t.callback,r=C,o=0;o<i.length;o++)r=r[i[o]];r(n)}catch(e){a.handleCORSError(t,e,"Error forming callback function")}}var a=this;n&&(t.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeo ut=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form- urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.respo nseText)}),o.onerror=function(e){a.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){a.handleC ORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"t ry- catch")}},handleCORSError:function(t,n,i){e.CORSErrors.push({corsData:t,error:n,description:i}),t.loadErr orHandler&&("ontimeout"===i?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},ae={POST_MESSAGE_E NABLED:!!C.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"ado
be_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-
]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_ PARTY_SERVER_COOKIE:"s_ecid"},oe=function(e,t){var n=C.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPa gePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"htt ps://fast.":"https://"),t=i+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeH ost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIfra meSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||th is.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e. dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoade d:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoaded Callbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted: [],messagesReceived:[],messageSendingInterval:ae.POST_MESSAGE_ENABLED?null:100,onPageDestinati onsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCoo kies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.i dSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e
.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain &&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIfra me},attachIframe:function(){function e(){r=n.createElement("iframe"),r.sandbox="allow-scripts allow- same-origin",r.title="Adobe ID Syncing iFrame",r.id=i.id,r.name=i.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=i.url,i.newIframeCreated=!0,t(),n.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.fireIf rameLoadedCallbacks(e),i.requestToProcess()})}this.startedAttachingIframe=!0;var
 
i=this,r=n.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e(
)):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready
=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLo adedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframe LoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var i,r=this;if(t===Object(t)&&t.ibs)if(i=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,o,s,c=!1;for(a=0,o=this.jsonForComparison.length;a<o;a++)if(s=this.jsonForComparison[a],i===JSON.str ingify(s.ibs||[])){c=!0;break}c?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!ae.POST_MESSAGE_ENABLED||this.iframeHasLoade d)&&this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSync s||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this
.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=ae.POST_MESSAGE_ENABLED?nu ll:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfCha nged:function(t,n){var i=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return i?r&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r),parseInt(i,10)!==r&&(this.regionCha nged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),i=r)):(i=r) &&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",i)),i||(i=""),i},processSyncOnPage:functio n(e){var t,n,i,r;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(i=0;i<n;i++)r=t[i],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage"
)},process:function(e){var t,n,i,r,a,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,i=0;i<n;i++)r=t[i],a=[o("ibs"),o(r.id||""),o(r.tag||""),V.encodeAndBuildReq
uest(r.url||[],","),o(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCo okies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));s&&this.jso nProcessed.push(e)},checkFirstPartyCookie:function(t,n,i){var r="syncOnPage"===i,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,c=e._getField(a),u=!1,l=!1,d=Math.ceil((new Date).getTime()/ae.MILLIS_PER_DAY);c?(o=c.split("*"),s=this.pruneSyncData(o,t.id,d),u=s.dataPresent,l= s.dataValid,u&&l||this.fireSync(r,t,n,o,a,d)):(o=[],this.fireSync(r,t,n,o,a,d))},pruneSyncData:function(e,t, n){var i,r,a,o=!1,s=!1;for(r=0;r<e.length;r++)i=e[r],a=parseInt(i.split("-")[1],10),i.match("^"+t+"-
")?(o=!0,n<a?s=!0:(e.splice(r,1),r--)):n>=a&&(e.splice(r,1),r--
);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS
_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("- ")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,i,r,a,o){var s=this;if(t){if("img"===n.tag){var c,u,l,d,f=n.url,p=e.loadSSL?"https:":"http:";for(c=0,u=f.length;c<u;c++){l=f[c],d=/^\/\//.test(l);var g=new Image;g.addEventListener("load",function(t,n,i,r){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,c=e._getField(a),u=[];if(c){o=c.split("*");var l,d,f;for(l=0,d=o.length;l<d;l++)f=o[l],f.match("^"+n.id+"-
 
")||u.push(f)}s.setSyncTrackingData(u,n,i,r)}}(this.onPagePixels.length,n,a,o)),g.src=(d?p:"")+l,this.onPag ePixels.push(g)}}}else this.addMessage(i),this.setSyncTrackingData(r,n,a,o)},addMessage:function(t){var n=encodeURIComponent,i=n(e._enableErrorReporting?"---destpub-debug---":"---destpub--- ");this.messages.push((ae.POST_MESSAGE_ENABLED?"":i)+t)},setSyncTrackingData:function(t,n,i,r){t.pus h(n.id+"- "+(r+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(i,t.join("*"))},sendMessages:function(){ var e,t=this,n="",i=encodeURIComponent;this.regionChanged&&(n=i("---destpub-clear-dextp--- "),this.regionChanged=!1),this.messages.length?ae.POST_MESSAGE_ENABLED?(e=n+i("---destpub- combined--- ")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.m essages.shift(),this.postMessage(n+e),setTimeout(function(){t.sendMessages()},this.messageSendingInte rval)):this.sendingMessages=!1},postMessage:function(e){ne.postMessage(e,this.url,this.iframe.content Window),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---
/;"string"==typeof e&&n.test(e)&&(t=e.replace(n,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdParty Cookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.mess agesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainretu rned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||""
,this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOn WindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attach Iframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>ae.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},se={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLif etime:{},cookieName:{},doesOptInApply:{},disableThirdPartyCalls:{},discardTrackingServerECID:{},idSync AfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySy ncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncS SLUseAkamai:{},isCoopSafe:{},isIabContext:{},isOptInStorageEnabled:{},loadSSL:{},loadTimeout:{},market ingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwrite CrossDomainMCIDAndAID:{},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidPar amExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{
},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},ce={getConfigNames:func tion(){return Object.keys(se)},getConfigs:function(){return se},normalizeConfig:function(e){return"function"!=typeof e?e:e()}},ue=function(e){var t={};return e.on=function(e,n,i){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var r=t[e].push({callback:n,context:i})-1;return function(){t[e].splice(r,1),t[e].length||delete t[e]}},e.off=function(e,n){t.hasOwnProperty(e)&&(t[e]=t[e].filter(function(e){if(e.callback!==n)return e}))},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach(function(e){e.callback.apply(e.context,n)})}},e.publish},le
 
={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},de={AAM:"aam",ADCLOUD:"adclou d",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",MEDIA_AN ALYTICS:"mediaaa"},fe=(I={},t(I,de.AAM,565),t(I,de.ECID,565),I),pe=(S={},t(S,de.AAM,[1,10]),t(S,de.ECID,[
1,10]),S),ge=["videoaa","iabConsentHash"],me=function(e){return Object.keys(e).map(function(t){return e[t]})}(de),he=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!u(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var i=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(i,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=void 0===n?[]:n,n=n instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var i=e.callbacks[t].shift();"function"==typeof i?i.apply(null,n):i instanceof Array&&i[1].apply(i[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!c(t))&&Object.keys(e.callbacks).forEach(fu nction(n){var i=void 0!==t[n]?t[n]:"";e.execute(n,i)},e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},_e=function(){},Ce=function(e){var t=window,n=t.console;return!!n&&"function"==typeof n[e]},Ie=function(e,t,n){return n()?function(){if(Ce(e)){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];console[e].apply(console,[t].concat(i))}}:_e},Se=l,ve=function(){fo r(var e=[],t=0;t<256;t++){for(var n=t,i=0;i<8;i++)n=1&n?3988292384^n>>>1:n>>>1;e.push(n)}return function(t,n){t=unescape(encodeURIComponent(t)),n||(n=0),n^=-1;for(var i=0;i<t.length;i++){var r=255&(n^t.charCodeAt(i));n=n>>>8^e[r]}return(n^=-1)>>>0}}(),De=new Se("[ADOBE OPT- IN]"),ye=function(t,n){return e(t)===n},Ae=function(e,t){return e instanceof Array?e:ye(e,"string")?[e]:t||[]},be=function(e){var t=Object.keys(e);return!!t.length&&t.every(function(t){return!0===e[t]})},Oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!e||Ee(e))&&Ae(e).every(function(e){return me.indexOf(e)>- 1||t&&ge.indexOf(e)>-1})},Me=function(e,t){return e.reduce(function(e,n){return e[n]=t,e},{})},ke=function(e){return JSON.parse(JSON.stringify(e))},Ee=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},Te=function(e){if(Re(e))return e;try{return JSON.parse(e)}catch(e){return{}}},Pe=function(e){return void 0===e||(Re(e)?Oe(Object.keys(e),!0):Le(e))},Le=function(e){try{var t=JSON.parse(e);return!!e&&ye(e,"string")&&Oe(Object.keys(t),!0)}catch(e){return!1}},Re=function(e){r eturn null!==e&&ye(e,"object")&&!1===Array.isArray(e)},we=function(){},Fe=function(e){return ye(e,"function")?e():e},Ne=function(e,t){Pe(e)||De.error("".concat(t))},xe=function(e){return Object.keys(e).map(function(t){return e[t]})},je=function(e){return xe(e).filter(function(e,t,n){return n.indexOf(e)===t})},Ve=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,i=t.params,r=void 0===i?{}:i,a=t.callback,o=void 0===a?we:a;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),c=e[s[0]],u=s[1];if(!c||"function"!=typeof c[u])throw new Error("Make sure the plugin and API name exist.");var l=Object.assign(r,{callback:o});c[u].call(c,l)}catch(e){De.error("[execute] Something went wrong: "+e.message)}}};f.prototype=Object.create(Error.prototype),f.prototype.constructor=f;var He="fetchPermissions",Ue="[OptIn#registerPlugin] Plugin is invalid.";p.Categories=de,p.TimeoutError=f;var Be=Object.freeze({OptIn:p,IabPlugin:_}),Ge=function(e,t){e.publishDestinations=function(n){var
 
i=arguments[1],r=arguments[2];try{r="function"==typeof r?r:n.callback}catch(e){r=function(){}}var a=t;if(!a.readyToAttachIframePreliminary())return void r({error:"The destination publishing iframe is disabled in the Visitor library."});if("string"==typeof n){
if(!n.length)return void r({error:"subdomain is not a populated string."});if(!(i instanceof Array&&i.length))return void r({error:"messages is not a populated array."});var o=!1;if(i.forEach(function(e){"string"==typeof e&&e.length&&(a.addMessage(e),o=!0)}),!o)return void r({error:"None of the messages are populated strings."})}else{if(!V.isObject(n))return void r({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void r({error:"config.subdomain is not a populated string."});var c=s.urlDestinations;if(!(c instanceof Array&&c.length))return void r({error:"config.urlDestinations is not a populated array."});var u=[];c.forEach(function(e){V.isObject(e)&&(e.hideReferrer?e.message&&a.addMessage(e.message):u.pu sh(e))});!function e(){u.length&&setTimeout(function(){var t=new Image,n=u.shift();t.src=n.url,a.onPageDestinationsFired.push(n),e()},100)}()}a.iframe?(r({message:"The destination publishing iframe is already attached and loaded."}),a.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(a.subdomain=n,a.doAttachIfr ame=!0,a.url=a.getUrl(),a.readyToAttachIframe()?(a.iframeLoadedCallbacks.push(function(e){r({message
:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),a.attachIframe()):r({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})}},Ye=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var i,r,a=Math.pow,o=a(2,32),s="",c=[],u=8*t.length,l=e.h=e.h||[],d=e.k=e.k||[],f=d.length,p={},g=2;f<64;g+
+)if(!p[g]){for(i=0;i<313;i+=g)p[i]=g;l[f]=a(g,.5)*o|0,d[f++]=a(g,1/3)*o|0}for(t+="";t.length%64- 56;)t+="\0";for(i=0;i<t.length;i++){if((r=t.charCodeAt(i))>>8)return;c[i>>2]|=r<<(3- i)%4*8}for(c[c.length]=u/o|0,c[c.length]=u,r=0;r<c.length;){var m=c.slice(r,r+=16),h=l;for(l=l.slice(0,8),i=0;i<64;i++){var _=m[i-15],C=m[i- 2],I=l[0],S=l[4],v=l[7]+(n(S,6)^n(S,11)^n(S,25))+(S&l[5]^~S&l[6])+d[i]+(m[i]=i<16?m[i]:m[i-
16]+(n(_,7)^n(_,18)^_>>>3)+m[i-
7]+(n(C,17)^n(C,19)^C>>>10)|0);l=[v+((n(I,2)^n(I,13)^n(I,22))+(I&l[1]^I&l[2]^l[1]&l[2]))|0].concat(l),l[4]=l
[4]+v|0}for(i=0;i<8;i++)l[i]=l[i]+h[i]|0}for(i=0;i<8;i++)for(r=3;r+1;r--){var D=l[i]>>8*r&255;s+=(D<16?0:"")+D.toString(16)}return s},qe=function(e,t){return"SHA- 256"!==t&&"SHA256"!==t&&"sha256"!==t&&"sha-256"!==t||(e=Ye(e)),e},We=function(e){return String(e).trim().toLowerCase()},Xe=Be.OptIn;V.defineGlobalNamespace(),window.adobe.OptInCategorie s=Xe.Categories;var Ke=function(t,n,i){function r(){I._customerIDsHashChanged=!1}function a(e){var t=e;return function(e){var n=e||b.location.href;try{var i=I._extractParamFromUri(n,t);if(i)return B.parsePipeDelimetedKeyValues(i)}catch(e){}}}function o(e){function t(e,t,n){e&&e.match(ae.VALID_VISITOR_ID_REGEX)&&(n===E&&(A=!0),t(e))}t(e[E],I.setMarketingCloudV isitorID,E),I._setFieldExpire(F,-1),t(e[R],I.setAnalyticsVisitorID)}function s(e){e=e||{},I._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",I._supplementalDataIDC urrentConsumed=e.supplementalDataIDCurrentConsumed||{},I._supplementalDataIDLast=e.supplemen talDataIDLast||"",I._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}functi on c(e){function t(e,t,n){return n=n?n+="|":n,n+=e+"="+encodeURIComponent(t)}function n(e,n){var i=n[0],r=n[1];return null!=r&&r!==N&&(e=t(i,r,e)),e}var i=e.reduce(n,"");return function(e){var
 
t=B.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(i)}function u(e){var t=e.minutesToLive,n="";return(I.idSyncDisableSyncs||I.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function l(){return!!I.configs.doesOptInApply&&!(S.optIn.isComplete&&d())}function d(){return I.configs.doesOptInApply&&I.configs.isIabContext?S.optIn.isApproved(S.optIn.Categories.ECID)&&y:S.op tIn.isApproved(S.optIn.Categories.ECID)}function f(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["syncIdentity",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceMa nagerBlob"]].forEach(function(e){var t=e[0],n=2===e.length?e[1]:"",i=I[t];I[t]=function(e){return d()&&I.isAllowed()?i.apply(I,arguments):("function"==typeof e&&I._callCallback(e,[n]),n)}})}function p(){var e=I._getAudienceManagerURLData(),t=e.url;return I._loadData(k,t,null,e)}function g(e,t){if(y=!0,e)throw new Error("[IAB plugin] : "+e);t&&t.gdprApplies&&(v=t.consentString,D=t.hasConsentChangedSinceLastCmpPull?1:0),p(),_()}funct ion m(e,t){if(y=!0,e)throw new Error("[IAB plugin] : "+e);t.gdprApplies&&(v=t.consentString,D=t.hasConsentChangedSinceLastCmpPull?1:0),I.init(),_()}functi on h(){S.optIn.isComplete&&(S.optIn.isApproved(S.optIn.Categories.ECID)?I.configs.isIabContext?S.optIn.ex ecute({command:"iabPlugin.fetchConsentData",callback:m}):(I.init(),_()):I.configs.isIabContext?S.optIn.e xecute({command:"iabPlugin.fetchConsentData",callback:g}):(f(),_()))}function
_(){S.optIn.off("complete",h)}if(!i||i.split("").reverse().join("")!==t)throw new Error("Please use
`Visitor.getInstance` to instantiate Visitor.");var I=this,S=window.adobe,v="",D=0,y=!1,A=!1;I.version="5.0.0";var b=C,O=b.Visitor;O.version=I.version,O.AuthState=T.AUTH_STATE,O.OptOut=T.OPT_OUT,b.s_c_in||(b.s_ c_il=[],b.s_c_in=0),I._c="Visitor",I._il=b.s_c_il,I._in=b.s_c_in,I._il[I._in]=I,b.s_c_in++,I._instanceType="reg ular",I._log={requests:[]},I.marketingCloudOrgID=t,I.cookieName="AMCV_"+t,I.sessionCookieName="A MCVS_"+t,I.cookieDomain=Z(),I.loadSSL=!0,I.loadTimeout=3e4,I.CORSErrors=[],I.marketingCloudServer=I
.audienceManagerServer="dpm.demdex.net",I.sdidParamExpiry=30;var M=null,k="MC",E="MCMID",P="MCIDTS",L="A",R="MCAID",w="AAM",F="MCAAMB",N="NONE",x=functi
on(e){return!Object.prototype[e]},j=re(I);I.FIELDS=T.FIELDS,I.cookieRead=function(e){return
$.get(e)},I.cookieWrite=function(e,t,n){var i=I.cookieLifetime?(""+I.cookieLifetime).toUpperCase():"",r=!1;return I.configs&&I.configs.secureCookie&&"https:"===location.protocol&&(r=!0),$.set(e,""+t,{expires:n,domai n:I.cookieDomain,cookieLifetime:i,secure:r})},I.resetState=function(e){e?I._mergeServerState(e):s()},I._is AllowedDone=!1,I._isAllowedFlag=!1,I.isAllowed=function(){return I._isAllowedDone||(I._isAllowedDone=!0,(I.cookieRead(I.cookieName)||I.cookieWrite(I.cookieName,"T"
,1))&&(I._isAllowedFlag=!0)),"T"===I.cookieRead(I.cookieName)&&I._helpers.removeCookie(I.cookieNa me),I._isAllowedFlag},I.setMarketingCloudVisitorID=function(e){I._setMarketingCloudFields(e)},I._use1st PartyMarketingCloudServer=!1,I.getMarketingCloudVisitorID=function(e,t){I.marketingCloudServer&&I. marketingCloudServer.indexOf(".demdex.net")<0&&(I._use1stPartyMarketingCloudServer=!0);var n=I._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return I._getRemoteField(E,i,e,t,n)};var H=function(e,t){var
 
n={};I.getMarketingCloudVisitorID(function(){t.forEach(function(e){n[e]=I._getField(e,!0)}),- 1!==t.indexOf("MCOPTOUT")?I.isOptedOut(function(t){n.MCOPTOUT=t,e(n)},null,!0):e(n)},!0)};I.getVisito rValues=function(e,t){var n={MCMID:{fn:I.getMarketingCloudVisitorID,args:[!0],context:I},MCOPTOUT:{fn:I.isOptedOut,args:[void 0,!0],context:I},MCAID:{fn:I.getAnalyticsVisitorID,args:[!0],context:I},MCAAMLH:{fn:I.getAudienceManag erLocationHint,args:[!0],context:I},MCAAMB:{fn:I.getAudienceManagerBlob,args:[!0],context:I}},i=t&&t.l ength?V.pluck(n,t):n;t&&- 1===t.indexOf("MCAID")?H(e,t):Q(i,e)},I._currentCustomerIDs={},I._customerIDsHashChanged=!1,I._new CustomerIDsHash="",I.setCustomerIDs=function(t,n){if(!I.isOptedOut()&&t){if(!V.isObject(t)||V.isObject Empty(t))return!1;I._readVisitor();var i,a,o,s;for(i in t)if(x(i)&&(I._currentCustomerIDs.dataSources=I._currentCustomerIDs.dataSources||{},a=t[i],n=a.hasO wnProperty("hashType")?a.hashType:n,a))if("object"===e(a)){var c={};if(a.id){if(n){if(!(s=qe(We(a.id),n)))return;a.id=s,c.hashType=n}c.id=a.id}void 0!=a.authState&&(c.authState=a.authState),I._currentCustomerIDs.dataSources[i]=c}else if(n){if(!(s=qe(We(a),n)))return;I._currentCustomerIDs.dataSources[i]={id:s,hashType:n}}else I._currentCustomerIDs.dataSources[i]={id:a};var u=I.getCustomerIDs(!0),l=I._getField("MCCIDH"),d="";l||(l=0);for(o in u){var f=u[o];if(!V.isObjectEmpty(f))for(i in f)x(i)&&(a=f[i],d+=(d?"|":"")+i+"|"+(a.id?a.id:"")+(a.authState?a.authState:""))}I._newCustomerIDsHash
=String(I._hash(d)),I._newCustomerIDsHash!==l&&(I._customerIDsHashChanged=!0,I._mapCustomerIDs (r))}},I.syncIdentity=function(t,n){if(!I.isOptedOut()&&t){if(!V.isObject(t)||V.isObjectEmpty(t))return!1;I.
_readVisitor();var i,a,o,s,c;for(i in t)if(x(i)&&(I._currentCustomerIDs.nameSpaces=I._currentCustomerIDs.nameSpaces||{},a=t[i],n=a.hasO wnProperty("hashType")?a.hashType:n,a&&"object"===e(a))){var u={};if(a.id){if(n){if(!(o=qe(We(a.id),n)))return;a.id=o,u.hashType=n}u.id=a.id}void 0!=a.authState&&(u.authState=a.authState),a.dataSource&&(I._currentCustomerIDs.dataSources=I._cur rentCustomerIDs.dataSources||{},s=a.dataSource,I._currentCustomerIDs.dataSources[s]=u),I._currentCu stomerIDs.nameSpaces[i]=u}var l=I.getCustomerIDs(!0),d=I._getField("MCCIDH"),f="";d||(d="0");for(c in l){var p=l[c];if(!V.isObjectEmpty(p))for(i in p)x(i)&&(a=p[i],f+=(f?"|":"")+i+"|"+(a.id?a.id:"")+(a.authState?a.authState:""))}I._newCustomerIDsHash
=String(I._hash(f)),I._newCustomerIDsHash!==d&&(I._customerIDsHashChanged=!0,I._mapCustomerIDs (r))}},I.getCustomerIDs=function(e){I._readVisitor();var t,n,i={dataSources:{},nameSpaces:{}},r=I._currentCustomerIDs.dataSources;for(t in r)x(t)&&(n=r[t],n.id&&(i.dataSources[t]||(i.dataSources[t]={}),i.dataSources[t].id=n.id,void 0!=n.authState?i.dataSources[t].authState=n.authState:i.dataSources[t].authState=O.AuthState.UNKNO WN,n.hashType&&(i.dataSources[t].hashType=n.hashType)));var a=I._currentCustomerIDs.nameSpaces;for(t in a)x(t)&&(n=a[t],n.id&&(i.nameSpaces[t]||(i.nameSpaces[t]={}),i.nameSpaces[t].id=n.id,void 0!=n.authState?i.nameSpaces[t].authState=n.authState:i.nameSpaces[t].authState=O.AuthState.UNKNO WN,n.hashType&&(i.nameSpaces[t].hashType=n.hashType)));return e?i:i.dataSources},I.setAnalyticsVisitorID=function(e){I._setAnalyticsFields(e)},I.getAnalyticsVisitorID=fun ction(e,t,n){if(!B.isTrackingServerPopulated()&&!n)return I._callCallback(e,[""]),"";var i="";if(n||(i=I.getMarketingCloudVisitorID(function(t){I.getAnalyticsVisitorID(e,!0)})),i||n){var r=n?I.marketingCloudServer:I.trackingServer,a="";I.loadSSL&&(n?I.marketingCloudServerSecure&&(r=I.
 
marketingCloudServerSecure):I.trackingServerSecure&&(r=I.trackingServerSecure));var o={};if(r){var s="http"+(I.loadSSL?"s":"")+"://"+r+"/id",c="d_visid_ver="+I.version+"&mcorgid="+encodeURICompone nt(I.marketingCloudOrgID)+(i?"&mid="+encodeURIComponent(i):"")+(I.idSyncDisable3rdPartySyncing||I
.disableThirdPartyCookies?"&d_coppa=true":""),u=["s_c_il",I._in,"_set"+(n?"MarketingCloud":"Analytics ")+"Fields"];a=s+"?"+c+"&callback=s_c_il%5B"+I._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fiel ds",o.corsUrl=s+"?"+c,o.callback=u}return o.url=a,I._getRemoteField(n?E:R,a,e,t,o)}return""},I.getAudienceManagerLocationHint=function(e,t){if(I. getMarketingCloudVisitorID(function(t){I.getAudienceManagerLocationHint(e,!0)})){var n=I._getField(R);if(!n&&B.isTrackingServerPopulated()&&(n=I.getAnalyticsVisitorID(function(t){I.getAudi enceManagerLocationHint(e,!0)})),n||!B.isTrackingServerPopulated()){var i=I._getAudienceManagerURLData(),r=i.url;return I._getRemoteField("MCAAMLH",r,e,t,i)}}return""},I.getLocationHint=I.getAudienceManagerLocationHint, I.getAudienceManagerBlob=function(e,t){if(I.getMarketingCloudVisitorID(function(t){I.getAudienceMan agerBlob(e,!0)})){var n=I._getField(R);if(!n&&B.isTrackingServerPopulated()&&(n=I.getAnalyticsVisitorID(function(t){I.getAudi enceManagerBlob(e,!0)})),n||!B.isTrackingServerPopulated()){var i=I._getAudienceManagerURLData(),r=i.url;return I._customerIDsHashChanged&&I._setFieldExpire(F,- 1),I._getRemoteField(F,r,e,t,i)}}return""},I._supplementalDataIDCurrent="",I._supplementalDataIDCurre ntConsumed={},I._supplementalDataIDLast="",I._supplementalDataIDLastConsumed={},I.getSupplement alDataID=function(e,t){I._supplementalDataIDCurrent||t||(I._supplementalDataIDCurrent=I._generateI D(1));var n=I._supplementalDataIDCurrent;return I._supplementalDataIDLast&&!I._supplementalDataIDLastConsumed[e]?(n=I._supplementalDataIDLast,I
._supplementalDataIDLastConsumed[e]=!0):n&&(I._supplementalDataIDCurrentConsumed[e]&&(I._sup plementalDataIDLast=I._supplementalDataIDCurrent,I._supplementalDataIDLastConsumed=I._suppleme ntalDataIDCurrentConsumed,I._supplementalDataIDCurrent=n=t?"":I._generateID(1),I._supplementalDa taIDCurrentConsumed={}),n&&(I._supplementalDataIDCurrentConsumed[e]=!0)),n};var U=!1;I._liberatedOptOut=null,I.getOptOut=function(e,t){var n=I._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;if(d())return I._getRemoteField("MCOPTOUT",i,e,t,n);if(I._registerCallback("liberatedOptOut",e),null!==I._liberatedO ptOut)return I._callAllCallbacks("liberatedOptOut",[I._liberatedOptOut]),U=!1,I._liberatedOptOut;if(U)return null;U=!0;var r="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/\.demdex\.net\/id\?/,".demdex.net/optOutStatus?"),n.callback=[r],C[r]=fu nction(e){if(e===Object(e)){var t,n,i=V.parseOptOut(e,t,N);t=i.optOut,n=1e3*i.d_ottl,I._liberatedOptOut=t,setTimeout(function(){I._libe ratedOptOut=null},n)}I._callAllCallbacks("liberatedOptOut",[t]),U=!1},j.fireCORS(n),null},I.isOptedOut=fu nction(e,t,n){t||(t=O.OptOut.GLOBAL);var i=I.getOptOut(function(n){var i=n===O.OptOut.GLOBAL||n.indexOf(t)>=0;I._callCallback(e,[i])},n);return i?i===O.OptOut.GLOBAL||i.indexOf(t)>=0:null},I._fields=null,I._fieldsExpired=null,I._hash=function(e){va  r t,n,i=0;if(e)for(t=0;t<e.length;t++)n=e.charCodeAt(t),i=(i<<5)-i+n,i&=i;return i},I._generateID=ie,I._generateLocalMID=function(){var e=I._generateID(0);return q.isClientSideMarketingCloudVisitorID=!0,e},I._callbackList=null,I._callCallback=function(e,t){try{"functio n"==typeof e?e.apply(b,t):e[1].apply(e[0],t)}catch(e){}},I._registerCallback=function(e,t){t&&(null==I._callbackList&&
 
(I._callbackList={}),void 0==I._callbackList[e]&&(I._callbackList[e]=[]),I._callbackList[e].push(t))},I._callAllCallbacks=function(e,t){i f(null!=I._callbackList){var n=I._callbackList[e];if(n)for(;n.length>0;)I._callCallback(n.shift(),t)}},I._addQuerystringParam=function(e, t,n,i){var r=encodeURIComponent(t)+"="+encodeURIComponent(n),a=B.parseHash(e),o=B.hashlessUrl(e);if(- 1===o.indexOf("?"))return o+"?"+r+a;var s=o.split("?"),c=s[0]+"?",u=s[1];return c+B.addQueryParamAtLocation(u,r,i)+a},I._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)"),i=n.exec(e);if(i&&i.length)return decodeURIComponent(i[1])},I._parseAdobeMcFromUrl=a(ae.ADOBE_MC),I._parseAdobeMcSdidFromUrl
=a(ae.ADOBE_MC_SDID),I._attemptToPopulateSdidFromUrl=function(e){var n=I._parseAdobeMcSdidFromUrl(e),i=1e9;n&&n.TS&&(i=B.getTimestampInSeconds()- n.TS),n&&n.SDID&&n.MCORGID===t&&i<I.sdidParamExpiry&&(I._supplementalDataIDCurrent=n.SDID,I.
_supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},I._attemptToPopulateIdsFromUrl=funct ion(){var e=I._parseAdobeMcFromUrl();if(e&&e.TS){var n=B.getTimestampInSeconds(),i=n- e.TS;if(Math.floor(i/60)>ae.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;o(e)}},I._mergeServerStat e=function(e){if(e)try{if(e=function(e){return B.isObject(e)?e:JSON.parse(e)}(e),e[I.marketingCloudOrgID]){var t=e[I.marketingCloudOrgID];!function(e){B.isObject(e)&&I.setCustomerIDs(e)}(t.customerIDs),s(t.sdid)}}c atch(e){throw new Error("`serverState` has an invalid format.")}},I._timeout=null,I._loadData=function(e,t,n,i){t=I._addQuerystringParam(t,"d_fieldgroup",e,1)
,i.url=I._addQuerystringParam(i.url,"d_fieldgroup",e,1),i.corsUrl=I._addQuerystringParam(i.corsUrl,"d_fi eldgroup",e,1),q.fieldGroupObj[e]=!0,i===Object(i)&&i.corsUrl&&"XMLHttpRequest"===j.corsMetadata. corsType&&j.fireCORS(i,n,e)},I._clearTimeout=function(e){null!=I._timeout&&I._timeout[e]&&(clearTim eout(I._timeout[e]),I._timeout[e]=0)},I._settingsDigest=0,I._getSettingsDigest=function(){if(!I._settingsDi gest){var e=I.version;I.audienceManagerServer&&(e+="|"+I.audienceManagerServer),I.audienceManagerServerS ecure&&(e+="|"+I.audienceManagerServerSecure),I._settingsDigest=I._hash(e)}return I._settingsDigest},I._readVisitorDone=!1,I._readVisitor=function(){if(!I._readVisitorDone){I._readVisitorD one=!0;var e,t,n,i,r,a,o=I._getSettingsDigest(),s=!1,c=I.cookieRead(I.cookieName),u=new Date;if(c||A||I.discardTrackingServerECID||(c=I.cookieRead(ae.FIRST_PARTY_SERVER_COOKIE)),null==I.
_fields&&(I._fields={}),c&&"T"!==c)for(c=c.split("|"),c[0].match(/^[\-0- 9]+$/)&&(parseInt(c[0],10)!==o&&(s=!0),c.shift()),c.length%2==1&&c.pop(),e=0;e<c.length;e+=2)t=c[e].s plit("- "),n=t[0],i=c[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),s&&("MCCIDH"===n& &(i=""),r>0&&(r=u.getTime()/1e3- 60)),n&&i&&(I._setField(n,i,1),r>0&&(I._fields["expire"+n]=r+(a?"s":""),(u.getTime()>=1e3*r||a&&!I.coo kieRead(I.sessionCookieName))&&(I._fieldsExpired||(I._fieldsExpired={}),I._fieldsExpired[n]=!0)));!I._get Field(R)&&B.isTrackingServerPopulated()&&(c=I.cookieRead("s_vi"))&&(c=c.split("|"),c.length>1&&c[0].i ndexOf("v1")>=0&&(i=c[1],e=i.indexOf("["),e>=0&&(i=i.substring(0,e)),i&&i.match(ae.VALID_VISITOR_ID
_REGEX)&&I._setField(R,i)))}},I._appendVersionTo=function(e){var t="vVersion|"+I.version,n=e?I._getCookieVersion(e):null;return n?ee.areVersionsDifferent(n,I.version)&&(e=e.replace(ae.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},I._write Visitor=function(){var e,t,n=I._getSettingsDigest();for(e in
 
I._fields)x(e)&&I._fields[e]&&"expire"!==e.substring(0,6)&&(t=I._fields[e],n+=(n?"|":"")+e+(I._fields["ex pire"+e]?"- "+I._fields["expire"+e]:"")+"|"+t);n=I._appendVersionTo(n),I.cookieWrite(I.cookieName,n,1)},I._getField
=function(e,t){return null==I._fields||!t&&I._fieldsExpired&&I._fieldsExpired[e]?null:I._fields[e]},I._setField=function(e,t,n){n ull==I._fields&&(I._fields={}),I._fields[e]=t,n||I._writeVisitor()},I._getFieldList=function(e,t){var n=I._getField(e,t);return n?n.split("*"):null},I._setFieldList=function(e,t,n){I._setField(e,t?t.join("*"):"",n)},I._getFieldMap=functio n(e,t){var n=I._getFieldList(e,t);if(n){var i,r={};for(i=0;i<n.length;i+=2)r[n[i]]=n[i+1];return r}return null},I._setFieldMap=function(e,t,n){var i,r=null;if(t){r=[];for(i in t)x(i)&&(r.push(i),r.push(t[i]))}I._setFieldList(e,r,n)},I._setFieldExpire=function(e,t,n){var i=new Date;i.setTime(i.getTime()+1e3*t),null==I._fields&&(I._fields={}),I._fields["expire"+e]=Math.floor(i.getTi me()/1e3)+(n?"s":""),t<0?(I._fieldsExpired||(I._fieldsExpired={}),I._fieldsExpired[e]=!0):I._fieldsExpired& &(I._fieldsExpired[e]=!1),n&&(I.cookieRead(I.sessionCookieName)||I.cookieWrite(I.sessionCookieName, "1"))},I._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTA RGET"===(t=t.toUpperCase())&&(t=N),t&&(t===N||t.match(ae.VALID_VISITOR_ID_REGEX))||(t="")),t},I.
_setFields=function(t,n){if(I._clearTimeout(t),null!=I._loading&&(I._loading[t]=!1),q.fieldGroupObj[t]&& q.setState(t,!1),t===k){!0!==q.isClientSideMarketingCloudVisitorID&&(q.isClientSideMarketingCloudVisit orID=!1);var i=I._getField(E);if(!i||I.overwriteCrossDomainMCIDAndAID){if(!(i="object"===e(n)&&n.mid?n.mid:I._find VisitorID(n))){if(I._use1stPartyMarketingCloudServer&&!I.tried1stPartyMarketingCloudServer)return I.tried1stPartyMarketingCloudServer=!0,void I.getAnalyticsVisitorID(null,!1,!0);i=I._generateLocalMID()}I._setField(E,i)}i&&i!==N||(i=""),"object"===e( n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&I._setFields(w,n),I._use1stPartyMarketingCloud Server&&n.mid&&I._setFields(L,{id:n.id})),I._callAllCallbacks(E,[i])}if(t===w&&"object"===e(n)){var r=604800;void 0!=n.id_sync_ttl&&n.id_sync_ttl&&(r=parseInt(n.id_sync_ttl,10));var a=Y.getRegionAndCheckIfChanged(n,r);I._callAllCallbacks("MCAAMLH",[a]);var o=I._getField(F);(n.d_blob||n.blob)&&(o=n.d_blob,o||(o=n.blob),I._setFieldExpire(F,r),I._setField(F,o)),o
||(o=""),I._callAllCallbacks(F,[o]),!n.error_msg&&I._newCustomerIDsHash&&I._setField("MCCIDH",I._ne wCustomerIDsHash)}if(t===L){var s=I._getField(R);s&&!I.overwriteCrossDomainMCIDAndAID||(s=I._findVisitorID(n),s?s!==N&&I._setField Expire(F,- 1):s=N,I._setField(R,s)),s&&s!==N||(s=""),I._callAllCallbacks(R,[s])}if(I.idSyncDisableSyncs||I.disableIdSyn cs)Y.idCallNotProcesssed=!0;else{Y.idCallNotProcesssed=!1;var c={};c.ibs=n.ibs,c.subdomain=n.subdomain,Y.processIDCallData(c)}if(n===Object(n)){var u,l;d()&&I.isAllowed()&&(u=I._getField("MCOPTOUT"));var f=V.parseOptOut(n,u,N);u=f.optOut,l=f.d_ottl,I._setFieldExpire("MCOPTOUT",l,!0),I._setField("MCOPTO UT",u),I._callAllCallbacks("MCOPTOUT",[u])}},I._loading=null,I._getRemoteField=function(e,t,n,i,r){var a,o="",s=B.isFirstPartyAnalyticsVisitorIDCall(e),c={MCAAMLH:!0,MCAAMB:!0};if(d()&&I.isAllowed()){I._re adVisitor(),o=I._getField(e,!0===c[e]);if(function(){return(!o||I._fieldsExpired&&I._fieldsExpired[e])&&(!I
.disableThirdPartyCalls||s)}()){if(e===E||"MCOPTOUT"===e?a=k:"MCAAMLH"===e||e===F?a=w:e===R &&(a=L),a)return!t||null!=I._loading&&I._loading[a]||(null==I._loading&&(I._loading={}),I._loading[a]=! 0,I._loadData(a,t,function(t){if(!I._getField(e)){t&&q.setState(a,!0);var
 
n="";e===E?n=I._generateLocalMID():a===w&&(n={error_msg:"timeout"}),I._setFields(a,n)}},r)),I._regist erCallback(e,n),o||(t||I._setFields(a,{id:N}),"")}else o||(e===E?(I._registerCallback(e,n),o=I._generateLocalMID(),I.setMarketingCloudVisitorID(o)):e===R?(I.
_registerCallback(e,n),o="",I.setAnalyticsVisitorID(o)):(o="",i=!0))}return e!==E&&e!==R||o!==N||(o="",i=!0),n&&i&&I._callCallback(n,[o]),o},I._setMarketingCloudFields=functio n(e){I._readVisitor(),I._setFields(k,e)},I._mapCustomerIDs=function(e){I.getAudienceManagerBlob(e,!0)}, I._setAnalyticsFields=function(e){I._readVisitor(),I._setFields(L,e)},I._setAudienceManagerFields=functio n(e){I._readVisitor(),I._setFields(w,e)},I._getAudienceManagerURLData=function(e){var t=I.audienceManagerServer,n="",i=I._getField(E),r=I._getField(F,!0),a=I._getField(R),o=a&&a!==N?"&d_c id_ic=AVID%01"+encodeURIComponent(a):"";if(I.loadSSL&&I.audienceManagerServerSecure&&(t=I.audi enceManagerServerSecure),t){var s,c,u,l=I.getCustomerIDs(!0);if(l)for(c in l){var d=l[c];if(!V.isObjectEmpty(d)){var f="nameSpaces"===c?"&d_cid_ns=":"&d_cid_ic=";for(s in d)x(s)&&(u=d[s],o+=f+encodeURIComponent(s)+"%01"+encodeURIComponent(u.id?u.id:"")+(u.authStat e?"%01"+u.authState:""))}}e||(e="_setAudienceManagerFields");var p="http"+(I.loadSSL?"s":"")+"://"+t+"/id",g="d_visid_ver="+I.version+(v&&- 1!==p.indexOf("demdex.net")?"&gdpr=1&gdpr_consent="+v:"")+(D&&- 1!==p.indexOf("demdex.net")?"&d_cf="+D:"")+"&d_rtbd=json&d_ver=2"+(!i&&I._use1stPartyMarketing CloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(I.marketingCloudOrgID)+"&d_nsid
="+(I.idSyncContainerID||0)+(i?"&d_mid="+encodeURIComponent(i):"")+(I.idSyncDisable3rdPartySyncin g||I.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===M?"&d_coop_safe=1":!1===M?"&d_coop_u nsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+o;D=0;var m=["s_c_il",I._in,e];return n=p+"?"+g+"&d_cb=s_c_il%5B"+I._in+"%5D."+e,{url:n,corsUrl:p+"?"+g,callback:m}}return{url:n}},I.appen dVisitorIDsTo=function(e){try{var t=[[E,I._getField(E)],[R,I._getField(R)],["MCORGID",I.marketingCloudOrgID]];return I._addQuerystringParam(e,ae.ADOBE_MC,c(t))}catch(t){return e}},I.appendSupplementalDataIDTo=function(e,t){if(!(t=t||I.getSupplementalDataID(B.generateRandom String(),!0)))return e;try{var n=c([["SDID",t],["MCORGID",I.marketingCloudOrgID]]);return I._addQuerystringParam(e,ae.ADOBE_MC_SDID,n)}catch(t){return e}};var B={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var i=e.split("&");return n=null!=n?n:i.length,i.splice(n,0,t),i.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){if(e!==R)re turn!1;var i;return t||(t=I.trackingServer),n||(n=I.trackingServerSecure),!("string"!=typeof(i=I.loadSSL?n:t)||!i.length)&&(i.i ndexOf("2o7.net")<0&&i.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){$.remove(e,{domain:I.cookieDomain})},isTracki ngServerPopulated:function(){return!!I.trackingServer||!!I.trackingServerSecure},getTimestampInSecon ds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--
;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"t rue"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in
 
e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};I._helpers=B;var Y=oe(I,O);I._destinationPublishing=Y,I.timeoutMetricsLog=[];var q={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMI DCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case k:!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;c ase L:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTim edOut=t;break;case w:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}}; I.isClientSideMarketingCloudVisitorID=function(){return q.isClientSideMarketingCloudVisitorID},I.MCIDCallTimedOut=function(){return q.MCIDCallTimedOut},I.AnalyticsIDCallTimedOut=function(){return q.AnalyticsIDCallTimedOut},I.AAMIDCallTimedOut=function(){return q.AAMIDCallTimedOut},I.idSyncGetOnPageSyncInfo=function(){return I._readVisitor(),I._getField("MCSYNCSOP")},I.idSyncByURL=function(e){if(!I.isOptedOut()){var t=u(e||{});if(t.error)return t.error;var n,i,r=e.url,a=encodeURIComponent,o=Y;return r=r.replace(/^https:/,"").replace(/^http:/,""),n=V.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),i
=["ibs",a(e.dpid),"img",a(r),t.ttl,"",n],o.addMessage(i.join("|")),o.requestToProcess(),"Successfully queued"}},I.idSyncByDataSource=function(e){if(!I.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,I.idSy ncByURL(e)):"Error: config or config.dpuuid is empty"},Ge(I,Y),I._getCookieVersion=function(e){e=e||I.cookieRead(I.cookieName);var t=ae.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},I._resetAmcvCookie=function(e){var t=I._getCookieVersion();t&&!ee.isLessThan(t,e)||B.removeCookie(I.cookieName)},I.setAsCoopSafe=func tion(){M=!0},I.setAsCoopUnsafe=function(){M=!1},function(){if(I.configs=Object.create(null),B.isObject(n
))for(var e in n)x(e)&&(I[e]=n[e],I.configs[e]=n[e])}(),f();var W;I.init=function(){l()&&(S.optIn.fetchPermissions(h,!0),!S.optIn.isApproved(S.optIn.Categories.ECID))|| W||(W=!0,function(){if(B.isObject(n)){I.idSyncContainerID=I.idSyncContainerID||0,M="boolean"==typeo  f  I.isCoopSafe?I.isCoopSafe:B.parseBoolean(I.isCoopSafe),I.resetBeforeVersion&&I._resetAmcvCookie(I.re setBeforeVersion),I._attemptToPopulateIdsFromUrl(),I._attemptToPopulateSdidFromUrl(),I._readVisitor ();var e=I._getField(P),t=Math.ceil((new Date).getTime()/ae.MILLIS_PER_DAY);I.idSyncDisableSyncs||I.disableIdSyncs||!Y.canMakeSyncIDCall(e,t
)||(I._setFieldExpire(F,- 1),I._setField(P,t)),I.getMarketingCloudVisitorID(),I.getAudienceManagerLocationHint(),I.getAudienceMa nagerBlob(),I._mergeServerState(I.serverState)}else I._attemptToPopulateIdsFromUrl(),I._attemptToPopulateSdidFromUrl()}(),function(){if(!I.idSyncDisableS yncs&&!I.disableIdSyncs){Y.checkDPIframeSrc();var e=function(){var e=Y;e.readyToAttachIframe()&&e.attachIframe()};b.addEventListener("load",function(){O.windowLoade d=!0,e()});try{ne.receiveMessage(function(e){Y.receiveMessage(e.data)},Y.iframeHost)}catch(e){}}}(),fun ction(){I.whitelistIframeDomains&&ae.POST_MESSAGE_ENABLED&&(I.whitelistIframeDomains=I.whiteli stIframeDomains instanceof Array?I.whitelistIframeDomains:[I.whitelistIframeDomains],I.whitelistIframeDomains.forEach(function(e
){var n=new G(t,e),i=z(I,n);ne.receiveMessage(i,e)}))}())}};Ke.config=ce,C.Visitor=Ke;var
 
Je=Ke,ze=function(e){if(V.isObject(e))return Object.keys(e).filter(function(t){return""!==e[t]}).reduce(function(t,n){var i=ce.normalizeConfig(e[n]),r=V.normalizeBoolean(i);return t[n]=r,t},Object.create(null))},Qe=Be.OptIn,$e=Be.IabPlugin;return Je.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=C.s_c_il;if(t)for(var n=0;n<t.length;n++){var i=t[n];if(i&&"Visitor"===i._c&&i.marketingCloudOrgID===e)return i}}();if(n)return n;var i=ze(t);!function(e){C.adobe.optIn=C.adobe.optIn||function(){var t=V.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","o ptInStorageExpiry","isIabContext"]),n=e.optInCookieDomain||e.cookieDomain;n=n||Z(),n=n===window
.location.hostname?"":n,t.optInCookieDomain=n;var i=new Qe(t,{cookies:$});if(t.isIabContext&&t.doesOptInApply){var r=new $e;i.registerPlugin(r)}return i}()}(i||{});var r=e,a=r.split("").reverse().join(""),o=new Je(e,null,a);V.isObject(i)&&i.cookieDomain&&(o.cookieDomain=i.cookieDomain),function(){C.s_c_il.splic e(--C.s_c_in,1)}();var s=V.getIeVersion();if("number"==typeof s&&s<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var c=function(){try{return C.self!==C.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e._helpers
.removeCookie("TEST_AMCV_COOKIE"),!0)}(o)&&C.parent?new q(e,i,o,C.parent):new Je(e,i,a);return o=null,c.init(),c},function(){function e(){Je.windowLoaded=!0}C.addEventListener?C.addEventListener("load",e):C.attachEvent&&C.attachEve nt("onload",e),Je.codeLoadEnd=(new Date).getTime()}(),Je}();
}


//tealium universal tag - utag.sender.1191 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
(function (id, loader) {


/* Tealium VisitorAPIWrapper v1.0 */ window.utag.tagsettings = window.utag.tagsettings || {};
window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || (function () {
function logger (msg) { utag.DB('[' + id + '] : ' + msg);
}
 
function Observer (orgId, config) { var observers = [],
visitor = {}, demdex = null, instance = null,
/* gotcha: http://stackoverflow.com/questions/6891545/javascript-regexp-test-returns-false- even-though-it-should-return-true */
regex = new RegExp('AMCV_' + window.encodeURIComponent(orgId) + '=(.*?)(;|$)'), active = false,
util = {
'hasOwn': function (o, a) {
return o !== null && Object.prototype.hasOwnProperty.call(o, a);
}
},
/* register all configured marketing cloud tags */ mTags = (function () {
var tags = [], tag,
cfg = utag.loader.cfg, loadcond = {
1: 1,
4: 1
};
for (tag in cfg) {
if (!util.hasOwn(cfg, tag)) { continue;
}
if (cfg[tag].tid && String(cfg[tag].tid).indexOf('1191') === 0 && loadcond[cfg[tag].load]) {
 
tags.push(tag);
}
}
return tags;
}());


function mTagsLoaded () { var loaded = true, id;
for (var i = 0, len = mTags.length; i < len; i++) { id = mTags[i];
if (!utag.sender[id]) { loaded = false; break;
}
}
return loaded;
}


function notify (result) { instance = result;
/* iterate object and reverse lookup auth flags */ if (instance && instance.setCustomerIDs) {
var aliases, alias;
for (aliases in visitor) {
if (util.hasOwn(visitor, aliases)) { alias = visitor[aliases];
if (alias.authState && Visitor.AuthState[alias.authState] !== undefined) { alias.authState = Visitor.AuthState[alias.authState];
}
 
}
}
instance.setCustomerIDs(visitor);
}
while(observers.length !==0) {
var nextCallback = observers.shift(); nextCallback(instance);
}
return true;
}


this.sync = function (ids) { var alias;
for (alias in ids) {
if (util.hasOwn(ids, alias)) { if (!visitor[alias]) { visitor[alias] = ids[alias];
}
}
}
return true;
};
this.subscribe = function (callback) { var self = this;
if (instance !== null) { return callback(instance);
} else { observers.push(callback); if (!active) {
 
logger('demdex org id [' + orgId + '] sync requested'); (function retry(retries) {
if (retries === 0) {
logger('demdex org id [' + orgId + '] sync timed out!'); active = false;
return notify(undefined);
} else {
active = true;
/* demdex org id cookie is set and all 1..n marketing cloud tags fired */ if (regex.test(document.cookie) &&
/\|mcmid\|/i.test(window.decodeURIComponent(RegExp.$1)) && mTagsLoaded()) { logger('demdex org id [' + orgId + '] sync completed');
return config ? notify(window.Visitor.getInstance(orgId, config)) : notify(window.Visitor.getInstance(orgId));
} else {
if (window.Visitor && window.Visitor.getInstance) { if (config && !demdex) {
demdex = window.Visitor.getInstance(orgId, config);
}
}
window.setTimeout(function () {
logger('demdex org id [' + orgId + '] sync, waiting...'); retry(--retries);
}, 25);
}
}
}(80));
}
}
 
return true;
};
}


function VisitorAPIWrapper () { var observers = {}; this._version = '1.0';
this.getInstance = function (orgId, callback, config, customerIds) { if (!orgId) {
return callback(undefined);
}


orgId = !/@AdobeOrg$/.test(orgId) ? orgId + '@AdobeOrg' : orgId; if (!observers[orgId]) {
if (!config) {
logger('demdex org id [' + orgId + '] sync error. marketing cloud tag missing demdex config'); return callback(undefined);
}
observers[orgId] = new Observer(orgId, config);
}
if (customerIds) { observers[orgId].sync(customerIds);
}
observers[orgId].subscribe(callback); return true;
};
}


return new VisitorAPIWrapper();
 
}());


var u = {"id" : id}; utag.o[loader].sender[id] = u;
// Please do not modify
if (utag.ut === undefined) { utag.ut = {}; }
// Start Tealium loader 4.41
/* utag.js version 4.26 or above is required to avoid errors with this loader function */ var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName
== "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img")
{ utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; } else { u.loader = utag.ut.loader; }
// End Tealium loader
// Start Tealium typeOf 4.35
if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA- Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
// End Tealium typeOf


u.hasOwn = function(o, a) { return o != null && Object.prototype.hasOwnProperty.call(o, a); }; u.isEmptyObject = function(o, a) { for (a in o) { if (u.hasOwn(o, a)) return false; } return true; };

u.ev = {view : 1}; u.initialized = false; u.adobeInstance;
 
u.map_func = function (arr, obj, item) { var i = arr.shift();
obj[i] = obj[i] || {}; if (arr.length > 0) {
u.map_func(arr,obj[i], item);
} else {
obj[i] = item;
}
};


u.clearEmptyKeys = function (object) { for (var key in object) {
if (object[key] === '' || object[key] === undefined) { delete object[key];
}
}
return object;
};


u.eventsNameByKey = { setCustomerID: 'setCustomerID',
};


u.sendEvents = function (instance) { u.data.events.forEach(function (eventName) {
if (eventName === u.eventsNameByKey.setCustomerID) { instance.setCustomerIDs(u.data.customer_ids); utag.DB("callEvent:setCustomerIDs");
 
}
})
}


##UTGEN##


u.send = function (a, b) {
if (u.ev[a] || u.ev.all !== undefined) { loadLibrary(); utag.DB("send:##UTID##"); utag.DB(b);

var c, d, e, f;
/* https://marketing.adobe.com/resources/help/en_US/mcvid/mcvid-cookiedomain.html */


var thirdPartyCookies = "false";
if (typeof (utag_data) == "object" && utag_data.gdpr_site !== undefined && utag_data.gdpr_site == 'true' && (typeof (utag_data["cp.wscrCookieConsent"]) != "string" || utag_data["cp.wscrCookieConsent"].indexOf("4=false") != -1) && (typeof (utag_data.wscrConsentString)
!= "string" || (typeof (utag_data.wscrConsentString) == "string" && utag_data.wscrConsentString.indexOf("4=false") != -1))) {
thirdPartyCookies = "true";
}
u.data = {
adobe_org_id: '##UTVARconfig_adobe_org_id##', config : {
trackingServer : '##UTVARconfig_trackingServer##',
trackingServerSecure : '##UTVARconfig_trackingServerSecure##', /* for clients with c-name setup (first party cookie alias) */
marketingCloudServer : '##UTVARconfig_marketingCloudServer##',
 
marketingCloudServerSecure : '##UTVARconfig_marketingCloudServerSecure##', /* set adobe visitor api cookieDomain explicitly http://rossscrivener.co.uk/blog/javascript-get-domain-exclude- subdomain */
disableThirdPartyCalls: thirdPartyCookies, cookieDomain : (function () {
return utag.loader.RC('utag_main').vapi_domain || (function () {
var i = 0, d = document.domain, p = d.split('.'), s = '_vapi' + new Date().getTime(); while (i < (p.length - 1) && document.cookie.indexOf(s + '=' + s) === -1) {
d = p.slice(-1 - (++i)).join('.');
document.cookie = s + '=' + s + ';domain=' + d + ';';
}
document.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + d + ';'; utag.loader.SC('utag_main', {'vapi_domain': d});
return d;
}());
}())
}, /* visitor id sync format 'customer_ids' : { // predefined alias 1 'system1_cid' : { 'id' : [VID1], 'authState' : 'AUTHENTICATED' }, // predefined alias 2 'system2_cid' : { 'id' : [VID2], 'authState' : 'AUTHENTICATED' } } */
'customer_ids' : {}, events: []
};


// Start tag-scoped extensions ##UTEXTEND## utag.DB('send:##UTID##:EXTENSIONS');
utag.DB(b);
// End tag-scoped extensions


c = [];
 
// Start Mapping
for (d in utag.loader.GV(u.map)) {
if (b[d] !== undefined && b[d] !== '') {
e = u.map[d].split(',');
for (f = 0; f < e.length; f++) { u.map_func(e[f].split('.'), u.data, b[d]);
}
} else {
var event_destinations = d.split(':'); if (
event_destinations.length === 2 && String(b[event_destinations[0]]) === String(event_destinations[1])
) {
if (u.map[d]) {
u.data.events = u.data.events.concat(u.map[d].split(","));
}
}
}
}
utag.DB('send:##UTID##:MAPPINGS');
utag.DB(u.data);
// End Mapping


// Report required config is missing, and stop tag from firing. if (!u.data.adobe_org_id) {
utag.DB(u.id + ': Tag not fired: Required attribute not populated [adobe_org_id]'); return;
}
 
if (u.initialized) { u.sendEvents(u.adobeInstance)
} else if (!u.initialized) { u.initialized = !0;
vAPI.getInstance(u.data.adobe_org_id, function (instance) {
/* do something after? */ u.adobeInstance = instance; u.sendEvents(u.adobeInstance);
},
u.clearEmptyKeys(u.data.config), u.data.customer_ids);
} utag.DB('send:##UTID##:COMPLETE');
}
};
utag.o[loader].loader.LOAD(id);
}('##UTID##', '##UTLOADERID##'));
} catch (error) { utag.DB(error);
}
//end tealium universal tag
