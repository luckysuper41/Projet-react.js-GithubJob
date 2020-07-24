(this["webpackJsonpgithub-job"]=this["webpackJsonpgithub-job"]||[]).push([[0],{158:function(e,a,t){},159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=(t(57),t(19)),i=t(7),s=t(11),m=t(163),u=t(12),p=t.n(u),d="make-request",b="get-data",g="error",E="update-has-next-page",h="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function f(e,a){switch(a.type){case d:return{loading:!0,jobs:[]};case b:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case g:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case E:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var y=t(166),j=t(161),v=t(162),k=t(165),x=t(30),N=t.n(x);function O(e){var a=e.job,t=Object(n.useState)(!1),c=Object(s.a)(t,2),l=c[0],o=c[1];return r.a.createElement(y.a,{className:"mb-3"},r.a.createElement(y.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(y.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(y.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(j.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(j.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(N.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})),r.a.createElement(y.a.Text,null,r.a.createElement(v.a,{onClick:function(){return o((function(e){return!e}))},variant:"primary"},l?"Hide Details":"View Details")),r.a.createElement(k.a,{in:l},r.a.createElement("div",{className:"mt-4"},r.a.createElement(N.a,{source:a.description})))))}var w=t(167);function C(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(w.a,null,1!==a&&r.a.createElement(w.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(w.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(w.a.Ellipsis,null),a>2&&r.a.createElement(w.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(w.a.Item,{active:!0},a),n&&r.a.createElement(w.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(w.a.Next,{onClick:function(){return c(1)}}))}var P=t(164),T=t(51),S={marginTop:"75px"};function _(e){var a=e.params,t=e.onParamChange;return r.a.createElement(P.a,{className:"mb-4",style:S},r.a.createElement(P.a.Row,{className:"align-items-end"},r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Description"),r.a.createElement(P.a.Control,{onChange:t,value:a.description,name:"description",type:"text",placeholder:"Filter by title, benefits, companies, expertise"})),r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Location"),r.a.createElement(P.a.Control,{onChange:t,value:a.location,name:"location",type:"text",placeholder:"Filter by city, state, zip code or country"})),r.a.createElement(P.a.Group,{as:T.a,xs:"auto",className:"ml-2"},r.a.createElement(P.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}t(158);var D=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),u=Object(s.a)(l,2),y=u[0],j=u[1],v=function(e,a){var t=Object(n.useReducer)(f,{jobs:[],loading:!0}),r=Object(s.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=p.a.CancelToken.source();l({type:d}),p.a.get(h,{cancelToken:t.token,params:Object(i.a)({markdown:!0,page:a},e)}).then((function(e){l({type:b,payload:{jobs:e.data}})})).catch((function(e){p.a.isCancel(e)||l({type:g,payload:{error:e}})}));var n=p.a.CancelToken.source();return p.a.get(h,{cancelToken:n.token,params:Object(i.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:E,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){p.a.isCancel(e)||l({type:g,payload:{error:e}})})),console.log("tesxsxsxs"),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,y),k=v.jobs,x=v.loading,N=v.error,w=v.hasNextPage;return r.a.createElement(m.a,{className:"my-4"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-content"},r.a.createElement("span",null,"GitHub")," Jobs")),r.a.createElement(_,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;j(1),c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},a,t))}))}}),r.a.createElement(C,{page:y,setPage:j,hasNextPage:w}),x&&r.a.createElement("h2",null,"Loading..."),N&&r.a.createElement("h2",null,"Error. Try Refreshing."),k.map((function(e){return r.a.createElement(O,{key:e.id,job:e})})),r.a.createElement(C,{page:y,setPage:j,hasNextPage:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){e.exports=t(159)},57:function(e,a,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.bde743c8.chunk.js.map