(this.webpackJsonpredux_lecture_2=this.webpackJsonpredux_lecture_2||[]).push([[0],{21:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(6),i=n(2),u=n(4),a=n(13),l=n(14),s=n(18),d=n(3),f={isFetching:!1,todos:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ADD_TODO":return Object(d.a)({},e,{isFetching:!0});case"RECEIVE_ADD_TODO":return Object(d.a)({},e,{isFetching:!1,todos:[].concat(Object(s.a)(e.todos),[{id:t.id,value:t.value,completed:t.completed}])});case"REQUEST_TODOS":return Object(d.a)({},e,{isFetching:!0});case"RECEIVE_TODOS":return Object(d.a)({},e,{isFetching:!1,todos:t.todos});case"REQUEST_TOGGLE_TODO":return Object(d.a)({},e,{isFetching:!0});case"RECEIVE_TOGGLE_TODO":return Object(d.a)({},e,{isFetching:!1,todos:e.todos.map((function(e){return e.id===t.updatedTodo.id?Object(d.a)({},e,{completed:t.updatedTodo.completed}):e}))});default:return e}},E="SHOW_ALL",O="SHOW_COMPLETED",h="SHOW_ACTIVE",m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},T=Object(u.c)({todos:p,visibilityFilter:m}),b=Object(l.createLogger)(),v=function(e){var t=e.active,n=e.children,r=e.onClick;return o.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},_=Object(i.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(v),j=function(){return o.a.createElement("div",null,o.a.createElement("span",null,"Show: "),o.a.createElement(_,{filter:E},"All"),o.a.createElement(_,{filter:h},"Active"),o.a.createElement(_,{filter:O},"Completed"))},y=Object(i.b)()((function(e){var t,n=e.dispatch;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(e){var r;(e.preventDefault(),t.value.trim())&&(n((r=t.value,function(e){return e({type:"REQUEST_ADD_TODO"}),fetch("".concat("https://powerful-fortress-54332.herokuapp.com","/create-todo"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:r})}).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"RECEIVE_ADD_TODO",id:e.id,value:e.value,completed:e.completed}}(t))}))})),t.value="")}},o.a.createElement("input",{ref:function(e){return t=e}}),o.a.createElement("button",{type:"submit"},"Add Todo")))})),g=n(15),D=n(16),S=n(19),C=n(17),I=n(20),k=function(e){var t=e.onClick,n=e.completed,r=e.value;return o.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},r)},R=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTodo()}},{key:"render",value:function(){var e=this.props,t=e.todos,n=e.toggleTodo;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(k,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))})))}}]),t}(o.a.Component),L=function(e,t){switch(t){case E:return e;case O:return e.filter((function(e){return e.completed}));case h:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},w=Object(i.b)((function(e){return{todos:L(e.todos.todos,e.visibilityFilter)}}),(function(e){return{fetchTodo:function(){return e((function(e){return console.log("success"),e({type:"REQUEST_TODOS"}),fetch("".concat("https://powerful-fortress-54332.herokuapp.com","/request-todo")).then((function(e){return e.json()})).then((function(t){return e({type:"RECEIVE_TODOS",todos:t})}))}))},toggleTodo:function(t){return e(function(e){return function(t){return t(function(e){return{type:"REQUEST_TOGGLE_TODO",id:e}}()),fetch("".concat("https://powerful-fortress-54332.herokuapp.com","/update-todo"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"RECEIVE_TOGGLE_TODO",updatedTodo:e}}(e))}))}}(t))}}}))(R),F=function(){return o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(w,null),o.a.createElement(j,null))},A=Object(u.d)(T,Object(u.a)(a.a,b));Object(c.render)(o.a.createElement(i.a,{store:A},o.a.createElement(F,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.27021ef0.chunk.js.map