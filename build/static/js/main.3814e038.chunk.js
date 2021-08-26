(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(15),i=n.n(r),o=(n(6),n(3)),s=n(0),u=function(e){var t=e.searchFilter,n=e.handleChange;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Filter contacts:"}),Object(s.jsx)("label",{children:"Filter: "}),Object(s.jsx)("input",{value:t,onChange:n})]})},l=function(e){var t=e.name,n=e.number,c=e.handleSubmit,a=e.handleNameChange,r=e.handleNumberChange;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Add new contact:"}),Object(s.jsxs)("form",{onSubmit:c,className:"Form",children:[Object(s.jsx)("label",{children:"Name: "}),Object(s.jsx)("input",{onChange:a,value:t}),Object(s.jsx)("label",{children:"Number: "}),Object(s.jsx)("input",{onChange:r,value:n}),Object(s.jsx)("button",{type:"submit",id:"addButton",children:"Add"})]})]})},d=function(e){var t=e.persons,n=e.handleDeleteButton;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Contacts:"}),Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsxs)("div",{className:"ContactInfo",children:[Object(s.jsxs)("p",{children:[e.name," : ",e.number," "," "]}),Object(s.jsx)("button",{onClick:function(){return n(e.id)},id:"deleteButton",children:"Delete"})]},e.name)}))})]})},j=function(e){var t=e.message,n=e.type;return null===t?null:Object(s.jsx)("div",{className:"Success"===n?"NotificationSuccess":"NotificationError",children:t})},b=n(4),h=n.n(b),f="/api/persons",m=function(){return h.a.get(f).then((function(e){return e.data}))},O=function(e){return h.a.post(f,e).then((function(e){return e.data}))},x=function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},p=function(e,t){return h.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},v=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),b=i[0],h=i[1],f=Object(c.useState)(""),v=Object(o.a)(f,2),g=v[0],C=v[1],N=Object(c.useState)(""),S=Object(o.a)(N,2),w=S[0],F=S[1],k=Object(c.useState)(null),B=Object(o.a)(k,2),D=B[0],y=B[1],E=Object(c.useState)(""),T=Object(o.a)(E,2),A=T[0],L=T[1];Object(c.useEffect)((function(){m().then((function(e){a(e)}))}),[]);var I=""===w?n:n.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"ContainerHalf",children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsxs)("div",{className:"Contacts",children:[Object(s.jsx)(d,{persons:I,handleDeleteButton:function(e){var t=n.filter((function(t){return t.id===e}))[0].name;window.confirm('Delete "'.concat(t,'"?'))&&(x(e),a(n.filter((function(t){return t.id!==e}))),y('"'.concat(t,'" was deleted from contacts')),L("Success"),setTimeout((function(){y(null)}),5e3))}}),Object(s.jsx)(u,{searchFilter:w,handleChange:function(e){F(e.target.value)}})]})]}),Object(s.jsx)("div",{className:"ContainerHalf",children:Object(s.jsxs)("div",{className:"ContactActions",children:[Object(s.jsx)(l,{name:b,number:g,handleSubmit:function(e){e.preventDefault();var t={name:b,number:g};if(n.some((function(e){return e.name===b}))){if(window.confirm("'".concat(b,"' already exist. Replace his number with ").concat(g,"?"))){var c=n.find((function(e){return e.name===b})).id;p(c,t).then((function(e){a(n.map((function(t){return t.id!==c?t:e}))),h(""),C(""),y('"'.concat(b,'" number is updated to ').concat(g)),L("Success")})).catch((function(e){y(e.response.data.error),L("Error")})),setTimeout((function(){y(null)}),5e3)}}else O(t).then((function(e){a(n.concat(e)),h(""),C(""),y('"'.concat(b,'" has been added to contacts.')),L("Success")})).catch((function(e){y(e.response.data.error),L("Error")})),setTimeout((function(){y(null)}),5e3)},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),Object(s.jsx)(j,{message:D,type:A})]})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),g()},6:function(e,t,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.3814e038.chunk.js.map