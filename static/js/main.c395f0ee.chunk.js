(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{42:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(32),s=n.n(r),a=(n(42),n(19)),i=n.n(a),d=n(33),o=n(7),u=n(8),j=n(10),b=n(9),l=n(4),p=n(1),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Bank of React"})})}}]),n}(c.Component),m=h,O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"User Profile"}),Object(p.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(p.jsxs)("div",{children:["Member Since: ",this.props.memberSince]})]})}}]),n}(c.Component),x=O,f=function(e){var t=e.addDebit;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Debit"}),Object(p.jsx)("input",{id:"myInput_1",class:"form__field",type:"text",placeholder:"Enter Desription"}),Object(p.jsx)("input",{id:"myInput_2",class:"form__field",type:"text",placeholder:"Enter amount"}),Object(p.jsx)("button",{onClick:function(){return t([document.getElementById("myInput_1").value,document.getElementById("myInput_2").value])},class:"btn_1 custom_btn",children:"Add Debit"}),Object(p.jsx)("div",{class:"debit_card",children:e.debits.map((function(e){var t=e.date.slice(0,10);return Object(p.jsxs)("div",{class:"card",children:[Object(p.jsx)("img",{src:"https://www.pngkit.com/png/detail/359-3592939_big-money-bag-vector-big-money-icon-png.png"}),Object(p.jsxs)("div",{class:"container",children:[Object(p.jsxs)("p",{children:["amount: ",e.amount]}),Object(p.jsxs)("p",{children:["description: ",e.description]}),Object(p.jsxs)("p",{children:["date: ",t]})]})]})}))})]})},v=function(e){var t=e.addCredit;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Credit"}),Object(p.jsx)("input",{id:"myInput_1",class:"form__field",type:"text",placeholder:"Enter Desription"}),Object(p.jsx)("input",{id:"myInput_2",class:"form__field",type:"text",placeholder:"Enter amount"}),Object(p.jsx)("button",{onClick:function(){return t([document.getElementById("myInput_1").value,document.getElementById("myInput_2").value])},class:"btn_1 custom_btn",children:"Add Debit"}),Object(p.jsx)("div",{class:"debit_card",children:e.credits.map((function(e){var t=e.date.slice(0,10);return Object(p.jsxs)("div",{class:"card_1",children:[Object(p.jsx)("img",{src:"https://www.pngkit.com/png/detail/359-3592939_big-money-bag-vector-big-money-icon-png.png"}),Object(p.jsxs)("div",{class:"container",children:[Object(p.jsxs)("p",{children:["amount: ",e.amount]}),Object(p.jsxs)("p",{children:["description: ",e.description]}),Object(p.jsxs)("p",{children:["date: ",t]})]})]})}))})]})},g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),y=g,_=n(37),k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(_.a)({},e.state.user),c=t.target.name,r=t.target.value;n[c]=r,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(p.jsx)(l.c,{to:"/userProfile"}):Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(p.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",name:"password"})]}),Object(p.jsx)("button",{children:"Log In"})]})})}}]),n}(c.Component),B=n(20),C=n.n(B),I=(n(67),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).addDebit=function(t){var n=e.state.debits,c={id:e.state.id,description:t[0],amount:t[1],date:String(new Date)};e.setState({debits:[c].concat(n),id:e.state.id+1,accountBalance:e.state.accountBalance+parseFloat(t[1])})},e.addCredit=function(t){var n=e.state.credits,c={id:e.state.id,description:t[0],amount:t[1],date:String(new Date)};e.setState({credits:[c].concat(n),id:e.state.id+1,accountBalance:e.state.accountBalance-parseFloat(t[1])})},e.state={accountBalance:0,currentUser:{userName:"joe_shmo",memberSince:"07/23/96"},debits:[],credits:[],id:0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t,n,c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://moj-api.herokuapp.com/debits");case 2:return t=e.sent,e.next=5,C.a.get("https://moj-api.herokuapp.com/credits");case 5:n=e.sent,t=t.data,n=n.data,c=0,r=0,t.forEach((function(e){c=e.amount})),n.forEach((function(e){r=e.amount})),s=r-c,this.setState({debits:t,credits:n,accountBalance:s,debitSum:c,creditSum:r});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.debits,n=this.state.credits;return Object(p.jsx)(l.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{class:"top",children:[Object(p.jsxs)("div",{class:"links",children:[Object(p.jsx)(l.b,{to:"/",children:" Home "}),Object(p.jsx)(l.b,{to:"/userProfile",children:" User Profile "}),Object(p.jsx)(l.b,{to:"/login",children:" Login "}),Object(p.jsx)(l.b,{to:"/credit",children:" Credit "}),Object(p.jsx)(l.b,{to:"/debit",children:" Debit "})]}),Object(p.jsx)("div",{class:"accountBalance",children:Object(p.jsx)(y,{accountBalance:this.state.accountBalance})})]}),Object(p.jsx)(l.d,{exact:!0,path:"/",component:function(){return Object(p.jsx)(m,{accountBalance:e.state.accountBalance})}}),Object(p.jsx)(l.d,{exact:!0,path:"/userProfile",component:function(){return Object(p.jsx)(x,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(p.jsx)(l.d,{exact:!0,path:"/login",component:function(){return Object(p.jsx)(k,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(p.jsx)(l.d,{exact:!0,path:"/debit",component:function(){return Object(p.jsx)(f,{addDebit:e.addDebit,debits:t})}}),Object(p.jsx)(l.d,{exact:!0,path:"/credit",component:function(){return Object(p.jsx)(v,{addCredit:e.addCredit,credits:n})}})]})})}}]),n}(c.Component)),S=I,w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};s.a.render(Object(p.jsx)(S,{}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.c395f0ee.chunk.js.map