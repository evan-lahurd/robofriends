(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(14),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 tc shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"".concat(n)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,t)},b=function(e){var t=e.onSearchChange;return r.a.createElement("div",null,r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots"}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"750px"}},e.children)},g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. Something went wrong!"):this.props.children}}]),t}(a.Component),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){var n=t.target.value.toLowerCase();e.setState({searchValue:n})},e.state={robots:[],searchValue:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})).catch(console.log("Error fetching users"))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchValue,a=t.filter((function(e){var t=e.name.toLowerCase().includes(n),a=e.email.toLowerCase().includes(n);return t||a}));return 0===a.length?r.a.createElement("h1",{className:"tc"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{onSearchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement(d,{robots:a}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.18402efc.chunk.js.map