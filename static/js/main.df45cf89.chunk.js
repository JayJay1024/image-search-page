(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{112:function(e,t,a){e.exports=a(216)},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),r=a.n(o),i=(a(117),a(118),a(53)),s=(a(119),a(86)),l=a.n(s),h=a(219),u=a(220),m=a(63),p=a(218),d=h.a.Search,f=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),h=s[0],f=s[1],g=Object(n.useState)([]),v=Object(i.a)(g,2),E=v[0],w=v[1],b=h.length?c.a.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},c.a.createElement(m.a,{onClick:function(){if(h.length){var e=h.slice(0,16);h.splice(0,16),f(h),w(E.concat(e)),window.dispatchEvent(new Event("resize"))}}},"loading more")):null;return c.a.createElement("div",{className:"page"},c.a.createElement(d,{className:"seach-input",placeholder:"input search text",onSearch:function(e){e.length<=0?u.a.warning("Enter something firstly ~"):(o(!0),l.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&format=json&nojsoncallback=1&safe_search=1",{params:{text:e}}).then((function(e){if(200===e.status&&e.data.photos&&e.data.photos.photo.length){var t=[];if(e.data.photos.photo.forEach((function(e){var a=e.farm,n=e.server,c=e.id,o=e.secret,r=e.title,i=function(e,t,a,n){return"http://farm"+e+".static.flickr.com/"+t+"/"+a+"_"+n+".jpg"}(a,n,c,o);t.push({title:r,path:i})})),t.length){var a=t.slice(0,16);t.splice(0,16),f(t),w(a),o(!1)}o(!1)}})).catch((function(e){console.error(e)})))},style:{width:520}}),c.a.createElement(p.b,{className:"seach-display",loading:a,loadMore:b,itemLayout:"horizontal",grid:{gutter:16,column:4},dataSource:E,renderItem:function(e){return c.a.createElement(p.b.Item,null,c.a.createElement("img",{alt:e.title,width:272,src:e.path}))}}))};var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.df45cf89.chunk.js.map