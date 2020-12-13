(this["webpackJsonptutorial-create-react-app-with-web-worker-and-typescript"]=this["webpackJsonptutorial-create-react-app-with-web-worker-and-typescript"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){e.exports=function(){return new Worker(n.p+"1842a42fb778e2deb404.worker.js")}},20:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),o=n.n(c),s=n(7),i=n.n(s),a=(n(15),n(6)),l=n.n(a),u=n(8),p=n(1),b=n.p+"static/media/logo.6ce24c58.svg",d=(n(17),n(9));var h=new(0,n.n(d).a);var j=function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(0),i=Object(p.a)(s,2),a=i[0],d=i[1],j=Object(c.useState)(0),f=Object(p.a)(j,2),m=f[0],O=f[1],w=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=performance.now(),o(!0),e.next=4,h.processDataWithWebWorker(a);case 4:n=e.sent,d(n),o(!1),r=performance.now(),console.log("Web worker took ".concat(Math.floor(r-t)," milliseconds."));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)("img",{src:b,className:"App-logo",alt:"logo"})}),Object(r.jsxs)("main",{children:[Object(r.jsx)("p",{children:"This is a completely artificial example to compare using a web worker and the main thread for processing something intensive that may hang the UI."}),Object(r.jsx)("p",{children:"Warning: You may ran out of memory depending on your PC specs, so be careful!"}),Object(r.jsx)("p",{children:"The count button is there to test the UI is still responsive."}),Object(r.jsxs)("p",{children:[Object(r.jsx)("button",{onClick:function(){O(m+1)},children:"Count"}),"Count: ",m]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:w,disabled:n,children:"Click to process with web worker"}),Object(r.jsx)("button",{onClick:function(){var e=performance.now();o(!0);var t=function(e){for(var t={},n=0;n<e+1e6;n++)t[n]=n;return Object.keys(t).length}(a);d(t),o(!1);var n=performance.now();console.log("Main thread took ".concat(Math.floor(n-e)," milliseconds."))},disabled:n,children:"Click to process on main thread"})]}),Object(r.jsxs)("p",{children:["Processing status: ",n?"PROCESSING":"IDLE"]}),Object(r.jsxs)("p",{children:["Number of items: ",a]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){d(0),O(0)},disabled:n,children:"Reset"})})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),f()},9:function(e,t,n){var r,c=n(19).wrap,o=n(18);e.exports=function e(){return this instanceof e?c(o()):r||(r=c(o()))}}},[[20,1,2]]]);
//# sourceMappingURL=main.7f9aeb3c.chunk.js.map