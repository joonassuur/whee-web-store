(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{67:function(t,e,a){"use strict";var n=a(0),c=a.n(n),r=a(13),i=a(15),o=a(30),m=a.n(o),l=a(31);a(68),a(69);e.a=function(t,e,a){var n=Object(r.b)(),o=Object(r.c)(i.b),u=o.cart,d=o.cartQuantity,s=Object(r.c)(i.d),v=function(t){return Object(l.b)(t)},b=function(r,o){return c.a.createElement("div",{key:r.id,className:"storeItem"},c.a.createElement("div",{title:r.name,className:"image ".concat(r.name.toLowerCase())}),c.a.createElement("div",{className:"item-details"},c.a.createElement("div",{className:"name-price"},c.a.createElement("h1",{className:"product-name"},r.name),c.a.createElement("h1",{className:"product-price"},"".concat(r.price," \u20ac"))),c.a.createElement("div",{className:"desc-btn-quantity"},c.a.createElement("div",{className:"product-desc"},r.description),c.a.createElement("div",{className:"quantity-btn"},"cart"===a&&c.a.createElement("h3",{className:"product-quantity"},"Quantity: ".concat(o)),c.a.createElement("button",{className:"addRemove-btn",onClick:function(){return function(e){var a=function(){var t=u.filter((function(t){return t.id===e.id}));return t.length>0?t:[{id:e.id,quantity:0}]}(),c=m.a.cloneDeep(a[0]);"remove"===t&&(c.quantity-=1,v("Item removed from cart")),"add"===t&&(c.quantity+=1,n(Object(i.f)(!0)),v("Item added to cart")),n(Object(i.e)(c))}(r)}},e)))))};return"cart"===a&&d<1?c.a.createElement("h2",null,"No items in cart"):c.a.createElement(c.a.Fragment,null,null===s||void 0===s?void 0:s.map((function(t){return"cart"===a?u&&u.map((function(e){return t.id===e.id&&e.quantity>0&&b(t,e.quantity)})):b(t)})))}},68:function(t,e,a){},69:function(t,e,a){},90:function(t,e,a){},96:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(13),i=a(15),o=a(67);a(90);e.default=function(t){var e=t.navigateToStore,a=Object(r.c)(i.b),n=a.cartQuantity,m=a.cartTotalCost;return c.a.createElement("div",{id:"cart"},c.a.createElement("h1",null,"Cart"),c.a.createElement("div",{id:"cart-content"},Object(o.a)("remove","Remove from cart","cart"),n>0&&c.a.createElement("h1",{id:"total-amount"},"Total: ",m," \u20ac"),c.a.createElement("button",{id:"backToStoreBtn",onClick:e},"Back to store")))}}}]);
//# sourceMappingURL=5.b9123de9.chunk.js.map