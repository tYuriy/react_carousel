(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),r=n(3),c=n(5),l=n(4),o=n(1),m=n.n(o),p=(n(12),n(13),n(0)),u=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={currentItemIndex:0},t.handleNavButton=function(e){var n=t.props.images.length-1,i=0,a=t.state.currentItemIndex+e;e<0?(i=t.props.infinity?n:0,a=a<0?i:a):(i=t.props.infinity?0:n,a=a>n?i:a),t.setState((function(){return{currentItemIndex:a}}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.images,i=e.step,a=e.frameSize,s=e.itemWidth,r=e.animationDuration,c=this.state.currentItemIndex;return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{width:a*s,transition:"".concat(r,"ms"),borderRadius:"".concat(s,"px"),border:"6px solid grey"},children:n.map((function(t){return Object(p.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(-c*s,"px)"),transition:"".concat(r,"ms")},children:Object(p.jsx)("img",{width:s,src:t,alt:t})},t)}))}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{disabled:c<=1&&!this.props.infinity,type:"button",onClick:function(){t.handleNavButton(-i)},children:"Prev item"}),Object(p.jsx)("button",{"data-cy":"next",disabled:c>=n.length-1&&!this.props.infinity,type:"button",onClick:function(){t.handleNavButton(i)},children:"Next item"})]})]})}}]),n}(o.Component),h=u,d=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinity:!1},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.step,a=e.itemWidth,s=e.frameSize,r=e.animationDuration,c=e.infinity;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(p.jsxs)("label",{htmlFor:"itemId",className:"App__label",children:["Item Width:",Object(p.jsx)("input",{id:"itemId",type:"number",value:a,min:130,max:260,step:10,onChange:function(e){t.setState({itemWidth:+e.target.value})}})]}),Object(p.jsxs)("label",{htmlFor:"frameId",className:"App__label",children:["Frame Size:",Object(p.jsx)("input",{id:"frameId",type:"number",value:s,min:1,max:n.length,step:1,onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(p.jsxs)("label",{htmlFor:"stepId",className:"App__label",children:["Step:",Object(p.jsx)("input",{id:"stepId",type:"number",value:i,min:1,max:n.length,step:1,onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(p.jsxs)("label",{htmlFor:"animation",className:"App__label",children:["Animation:",Object(p.jsx)("input",{id:"animation",type:"number",value:r,min:500,max:5e3,step:500,onChange:function(e){t.setState({animationDuration:+e.target.value})}})]}),Object(p.jsxs)("label",{htmlFor:"infinity",className:"App__label",children:["Infinity:",Object(p.jsx)("input",{id:"infinity",type:"checkbox",onChange:function(e){t.setState({infinity:e.target.checked})}})]}),Object(p.jsx)(h,{images:n,step:i,frameSize:s,itemWidth:a,animationDuration:r,infinity:c})]})}}]),n}(m.a.Component),b=d;a.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.884c57ee.chunk.js.map