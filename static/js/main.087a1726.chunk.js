(this.webpackJsonpemployeetable=this.webpackJsonpemployeetable||[]).push([[0],{30:function(e,a,t){e.exports=t(57)},57:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t.n(r),o=t(9),i=t(1),s=t(24),m=t(25),u=t(29),h=t(28),d=t(26),v=t.n(d),E=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:e.name,src:e.image})),l.a.createElement("div",{className:"content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Name:")," ",e.name," ",e.lastName," ",l.a.createElement("strong",null,"Age:")," ",e.age),l.a.createElement("li",null,l.a.createElement("strong",null,"Email:")," ",e.email),l.a.createElement("li",null,l.a.createElement("strong",null,"Location:")," ",e.city,", ",e.country))))},g=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={employees:[],searchValue:"",value:""},e.handleSearch=function(a){var t=e.state.employees.filter((function(e){return e.name.first.includes(a)}));e.setState({employees:t}),console.log(e.state.searchValue)},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://randomuser.me/api/?results=100").then((function(a){e.setState({employees:a.data.results})})).catch((function(e){console.log(e)}))}},{key:"handleOnChange",value:function(e){this.setState({value:e.target.value}),this.handleSearch(this.state.value)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h1",null,"Employees Table")),l.a.createElement("div",{className:"col"},l.a.createElement("div",null,l.a.createElement("h4",null,"Search by name: "),l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleOnChange,placeholder:"Name"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},this.state.employees.map((function(e){return l.a.createElement(E,{key:e.login.uuid,name:e.name.first,lastName:e.name.last,image:e.picture.medium,email:e.email,country:e.location.country,city:e.location.city,age:e.dob.age})})))))}}]),t}(n.Component),p=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Employee Finder"))};var y=function(){return l.a.createElement(o.a,null,l.a.createElement(p,null),l.a.createElement(i.a,{exact:!0,path:"/",component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.087a1726.chunk.js.map