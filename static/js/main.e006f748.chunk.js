(this.webpackJsonpreact_tutorial_tania=this.webpackJsonpreact_tutorial_tania||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=a(8),u=a(1),i=a(2),m=a(4),s=a(3),p=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Actions")))},b=function(e){var t=e.data.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.remover(a)}},"Purge")))}));return r.a.createElement("tbody",null,t)},h=function(e){var t=e.data,a=e.remover;return r.a.createElement("table",null,r.a.createElement(p,null),r.a.createElement(b,{data:t,remover:a}))},v=a(7),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(v.a)({},n,r))},e.submitForm=function(){e.props.submitHandler(e.state),e.setState(e.initialState)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},"Your Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"job"},"Role"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={people:[]},e.removePerson=function(t){var a=e.state.people;e.setState({people:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({people:[].concat(Object(c.a)(e.state.people),[t])})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.people;return r.a.createElement("div",{className:"container"},r.a.createElement(h,{data:e,remover:this.removePerson}),r.a.createElement(E,{submitHandler:this.handleSubmit}))}}]),a}(r.a.Component);a(14);o.a.render(r.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e006f748.chunk.js.map