(this["webpackJsonpsmall-shopping-cart"]=this["webpackJsonpsmall-shopping-cart"]||[]).push([[0],{13:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(6),r=t.n(i),a=(t(13),t(7)),d=t(2),l=t(8),j=t(0);function o(e){var c=e.cartItems;return Object(j.jsxs)("header",{className:"row block center",children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("h1",{children:"Small Shopping Cart"})})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("a",{href:"#/cart",children:["Cart"," ",c.length>0&&Object(j.jsx)("span",{className:"redBadge",children:Object(j.jsx)("strong",{children:c.length})})]})," ",Object(j.jsx)("a",{href:"#/signing",children:"SignIn"})]})]})}function h(e){var c=e.product,t=e.onAdd;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"small",src:c.image,alt:c.name}),Object(j.jsx)("h3",{children:c.name}),Object(j.jsxs)("div",{children:["$",c.price]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return t(c)},children:"Add to Cart"})})]})}function b(e){var c=e.products,t=e.onAdd;return Object(j.jsxs)("main",{className:"block col-2",children:[Object(j.jsx)("h2",{children:"Products"}),Object(j.jsx)("div",{className:"row",children:c.map((function(e){return Object(j.jsx)(h,{product:e,onAdd:t},e.id)}))})]})}function m(e){var c=e.cartItems,t=e.onAdd,s=e.onRemove,n=c.reduce((function(e,c){return e+c.price*c.qty}),0),i=.15*n,r=n>2e3?0:200,a=n+i+r;return console.log("itemsPrice : "),console.log(n),Object(j.jsxs)("aside",{className:"block col-1",children:[Object(j.jsx)("h2",{children:"Cart items"}),Object(j.jsx)("div",{children:0===c.length&&Object(j.jsx)("div",{children:"Cart is empty"})}),c.map((function(e){return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:e.name}),Object(j.jsxs)("div",{className:"col-2",children:[Object(j.jsx)("button",{onClick:function(){return t(e)},className:"add",children:"+"}),Object(j.jsx)("button",{onClick:function(){return s(e)},className:"remove",children:"-"})]}),Object(j.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x $",e.price.toFixed(2)]})]},e.id)})),c.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-1",children:"Items Price : "}),Object(j.jsx)("span",{className:"col-2 text-right",children:n})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-1",children:"Items Tax : "}),Object(j.jsx)("span",{className:"col-2 text-right",children:i})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-1",children:"Items Shipping : "}),Object(j.jsx)("span",{className:"col-2 text-right",children:r})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-1",children:[Object(j.jsx)("strong",{children:"Total :"})," "]}),Object(j.jsx)("span",{className:"col-2 text-right",children:Object(j.jsx)("strong",{children:a})})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{className:"checkOut",onClick:function(){return alert("Checkout not ready yet")},children:"Checkout"})})]})]})}var O={products:[{id:"1",name:"macBook",price:1400,image:"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"},{id:"2",name:"Old Car",price:2400,image:"https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"},{id:"3",name:"W SHoses",price:1e3,image:"https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs"}]};var x=function(){var e=O.products,c=Object(s.useState)([]),t=Object(l.a)(c,2),n=t[0],i=t[1],r=function(e){var c=n.find((function(c){return c.id===e.id}));i(c?n.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},c),{},{qty:c.qty+1}):t})):[].concat(Object(a.a)(n),[Object(d.a)(Object(d.a)({},e),{},{qty:1})]))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{cartItems:n}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(b,{onAdd:r,products:e}),Object(j.jsx)(m,{onRemove:function(e){var c=n.find((function(c){return c.id===e.id}));c&&1===c.qty&&i(n.filter((function(c){return c.id!==e.id}))),c&&c.qty>1&&i(n.map((function(e){return e.id===c.id?Object(d.a)(Object(d.a)({},c),{},{qty:c.qty-1}):e})))},onAdd:r,cartItems:n})]})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.69f1e06e.chunk.js.map