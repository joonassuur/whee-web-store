(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(25),r=n.n(a),c=n(34),o=n(14),i=n(40),u=Object(o.b)("@app: fetchStoreData",Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))),l=Object(o.a)("@app: modifyCart",(function(e){return{payload:e}})),s=Object(o.a)("@app: toggleModal",(function(e){return{payload:e}}))},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return a.a})),n.d(t,"e",(function(){return a.b})),n.d(t,"f",(function(){return a.c})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var a=n(11),r=function(e){return e.app.products},c=function(e){var t=e.app.cart,n=e.app.products,a=Object.values(t).reduce((function(e,t){return e+t.quantity}),0),r=function(){var e=t.map((function(e){return n.map((function(t){return t.id===e.id?t.price*e.quantity:0}))}));return e.length>0?e:[0]}().flat().reduce((function(e,t){return e+t})),c=1===a?"".concat(a," item in cart"):a>1?"".concat(a," items in cart"):"No items in cart";return{cart:t,cartQuantity:a,cartTotalCost:r,cartQuantityString:c}},o=function(e){return e.app.isModalOpen}},40:function(e){e.exports=JSON.parse('{"products":[{"id":1,"name":"Circle","description":"Perfect choice when you don\u2019t need any corners.","price":999},{"id":2,"name":"Rectangle","description":"For once, it\u2019s a great idea to think inside the box.","price":899},{"id":3,"name":"Triangle","description":"A true classic with three elegant corners.","price":1009}]}')},43:function(e,t,n){e.exports=n(65)},55:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(7),i=n.n(o),u=n(13),l=n(37),s=n(26),d=n(5),p=n(18),m=n(38),f=n(29),h=n(39),b=n.n(h),v=n(19),g=n(14),E=n(11),O=n(30),j=n.n(O),y=Object(g.c)({name:"app",initialState:{products:[],cart:[],isModalOpen:!1},reducers:{},extraReducers:(a={},Object(v.a)(a,E.a.fulfilled.toString(),(function(e,t){var n=t.payload;e.products=n.products})),Object(v.a)(a,E.a.rejected.toString(),(function(e){return e})),Object(v.a)(a,E.b.toString(),(function(e,t){var n=t.payload,a=j.a.cloneDeep(e.cart),r=a.filter((function(e){return e.id===n.id}));r.length>0?a.map((function(e){return e.id===r[0].id&&(e.quantity=n.quantity)})):a.push(n),e.cart=a})),Object(v.a)(a,E.c.toString(),(function(e,t){var n=t.payload;e.isModalOpen=n})),a)}),w=Object(d.combineReducers)({app:y.reducer}),N={key:"root",storage:b.a},S=Object(f.a)(N,w),T=Object(d.createStore)(S,Object(m.composeWithDevTools)(Object(d.applyMiddleware)(p.a))),k=Object(f.b)(T),C=(n(55),n(4)),x=n(15),M=(n(56),function(e){var t=e.navigateToCart,n=e.navigateToStore,a=Object(u.c)(x.b),r=a.cartTotalCost,o=a.cartQuantityString;return c.a.createElement("header",{id:"header-container"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"store-name"},c.a.createElement("div",{className:"logo",onClick:function(){return n()}},"whee"),c.a.createElement("div",{className:"description"},"The most definitive shape store in the world")),c.a.createElement("div",{className:"cart-display"},c.a.createElement("div",{className:"cart"},c.a.createElement("div",{className:"cart-quantity"},o),c.a.createElement("div",{className:"cart-cost"},"Total: ".concat(r," \u20ac"))),c.a.createElement("div",{className:"cart-icon",onClick:function(){return t()}},c.a.createElement("span",{className:"material-icons"},"shopping_cart"))))))}),q=n(31),P=n(41);n(63);var z=function(){var e=Object(u.b)(),t=Object(C.f)(),a=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,98))})),o=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,96))})),i=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,97))})),l=function(){t.push("/cart")},s=function(){t.push("/")},d=function(n){"contact"===n&&t.push("/contact"),e(Object(x.f)(!1))};return Object(r.useEffect)((function(){e(Object(x.a)())})),c.a.createElement("div",{className:"App"},c.a.createElement(P.ToastProvider,null,c.a.createElement(M,{navigateToCart:l,navigateToStore:s}),c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(C.c,null,c.a.createElement(C.a,{exact:!0,path:"/",render:function(){return c.a.createElement(a,{handleModal:d})}}),c.a.createElement(C.a,{exact:!0,path:"/cart",render:function(){return c.a.createElement(o,{navigateToStore:s})}}),c.a.createElement(C.a,{exact:!0,path:"/contact",render:function(){return c.a.createElement(i,{navigateToCart:l})}}))),c.a.createElement(q.a,{position:"bottom-center",hideProgressBar:!1,autoClose:1500,pauseOnFocusLoss:!1})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(u.a,{store:T},c.a.createElement(l.a,{loading:null,persistor:k},c.a.createElement(s.a,{hashType:"slash"},c.a.createElement(z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.f24c7d4f.chunk.js.map