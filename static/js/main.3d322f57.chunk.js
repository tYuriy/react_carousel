(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),r=n(3),c=n(5),l=n(4),o=n(1),m=n.n(o),u=(n(12),n(13),n(0)),p=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={currentItemIndex:0},t.handleNavButton=function(e){var n=t.props.images.length-t.props.frameSize,i=t.state.currentItemIndex+e;e<0&&(0===t.state.currentItemIndex?i=n:i<0&&(i=0)),e>0&&(t.state.currentItemIndex===n?i=0:i>n&&(i=n)),t.setState((function(){return{currentItemIndex:i}}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.images,i=e.step,a=e.frameSize,s=e.itemWidth,r=e.animationDuration,c=e.infinity,l=this.state.currentItemIndex;return Object(u.jsxs)("div",{className:"Carousel",style:{width:"".concat(a*s,"px"),transition:"".concat(r,"ms")},children:[Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"Carousel__list",style:{borderRadius:"".concat(s,"px"),border:"6px solid grey"},children:n.map((function(t){return Object(u.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(-l*s,"px)"),transition:"".concat(r,"ms")},children:Object(u.jsx)("img",{width:s,src:t,alt:t})},t)}))})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{disabled:l<=0&&!this.props.infinity,type:"button",onClick:function(){t.handleNavButton(-i)},children:"Prev item"}),Object(u.jsx)("button",{"data-cy":"next",disabled:l>=n.length-a&&!c,type:"button",onClick:function(){t.handleNavButton(i)},children:"Next item"})]})]})}}]),n}(o.Component),d=p,h=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinity:!1},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.step,a=e.itemWidth,s=e.frameSize,r=e.animationDuration,c=e.infinity;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(u.jsxs)("label",{htmlFor:"itemId",className:"App__label",children:["Item Width:",Object(u.jsx)("input",{id:"itemId",type:"number",value:a,min:130,max:260,step:10,onChange:function(e){t.setState({itemWidth:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"frameId",className:"App__label",children:["Frame Size:",Object(u.jsx)("input",{id:"frameId",type:"number",value:s,min:1,max:n.length,step:1,onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"stepId",className:"App__label",children:["Step:",Object(u.jsx)("input",{id:"stepId",type:"number",value:i,min:1,max:n.length,step:1,onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"animation",className:"App__label",children:["Animation:",Object(u.jsx)("input",{id:"animation",type:"number",value:r,min:500,max:5e3,step:500,onChange:function(e){t.setState({animationDuration:+e.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"infinity",className:"App__label",children:["Infinity:",Object(u.jsx)("input",{id:"infinity",type:"checkbox",onChange:function(e){t.setState({infinity:e.target.checked})}})]}),Object(u.jsx)(d,{images:n,step:i,frameSize:s,itemWidth:a,animationDuration:r,infinity:c})]})}}]),n}(m.a.Component),b=h;a.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3d322f57.chunk.js.map