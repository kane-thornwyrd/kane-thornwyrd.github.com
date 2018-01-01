webpackJsonp([2],{264:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),u=n(107),c=n.n(u),s=n(292),f=(n.n(s),n(296)),d=n.n(f),p=n(297),y=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),b=[{title:"Senior JS Dev.",subtitle:"Convargo",createdAt:"June 2016 - January 2018",body:i.a.createElement(o.Fragment,null,i.a.createElement("h3",null,"Missions:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Craft the MVP in less than 3 months as 2nd member of the core team\u2026"),i.a.createElement("li",null,"Design and implement the multivector pricing calculation system\u2026"),i.a.createElement("li",null,"Craft the Slack bot which generate BI reports\u2026"),i.a.createElement("li",null,"Wrote a HOC to redirect people based on ACL\u2026"),i.a.createElement("li",null,"A whole lot  more during this beautiful project nurtured until the current, well mature, state.")),i.a.createElement("h3",null,"Architectures:")," CQRS DDD Event Sourcing",i.a.createElement("h3",null,"Technologies:")," Botkit Elasticsearch ES 6/7 Express MongoDB Node.js RabbitMQ React Redux Relay")},{title:"The JS Guy",subtitle:"Forma-Dis",createdAt:"March 2016 - May 2016",body:i.a.createElement(o.Fragment,null,i.a.createElement("h3",null,"Missions:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Built a Redux/Flux-like in vanilla js following strong constraints in terms of maintainability."),i.a.createElement("li",null,"Built a dynamic survey SPA on top of Backbone, using jQuery as DOM altering lib and Ajax toolbox, wrapped by Bluebird for neat and fast ES6-compliant promises."),i.a.createElement("li",null,"Built an admin UX using Bootstrap3, Material design for Bs3, jQuery-UI, and Toastr for the waow effect.")),i.a.createElement("h3",null,"Architectures:")," Flux",i.a.createElement("h3",null,"Technologies:")," Backbone.js Bluebird Bootstrap3 jQuery jQuery-UI Material Design Toastr")},{title:"Senior JS Dev. & Drupal Adviser",subtitle:"Cellfish",createdAt:"July 2013 - October 2015",body:i.a.createElement(o.Fragment,null,i.a.createElement("h3",null,"Missions:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Built from ground up the JavaScript Framework/Library we are using on all the projects. Require.js, jQuery, Underscore.js and many more libraries packed."),i.a.createElement("li",null,"Design and implementation of the automatic continuous integration workflow, used by the web integration department, thank to Grunt.js and recently Gulp too."),i.a.createElement("li",null,"Javascript Guru, helping on a daily basis a team of 7 persons to get a grasp on the JS universe."),i.a.createElement("li",null,"Last chance adviser for fast issue resolution on the Drupal platform.")),i.a.createElement("h3",null,"Technologies:")," jQuery Grunt Gulp Require.js Underscore")},{title:"Web Developer/Drupal Expert",subtitle:"YGL Consulting",createdAt:"January 2012 - February 2014",body:i.a.createElement(o.Fragment,null,i.a.createElement("h3",null,"Missions:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Drupal",i.a.createElement("ul",null,i.a.createElement("li",null,"Developing"),i.a.createElement("li",null,"Industrializing"),i.a.createElement("li",null,"Advising"),i.a.createElement("li",null,"Pulling the projects out of Hell"),i.a.createElement("li",null,"Evangelizing"),i.a.createElement("li",null,"Spreading the knowledge"))),i.a.createElement("li",null,"Node.js/Express.js/other technos *.js:",i.a.createElement("ul",null,i.a.createElement("li",null,"Discovering the next step of the Web"),i.a.createElement("li",null,"Having fun with something that most people consider as a weird heresy and some as a true Leap forward something we dreamt for Decades."),i.a.createElement("li",null,"Writing Code that is as beautiful as useful and efficient.")))))},{title:"Web Dev Drupal/PHP/JS",subtitle:"Alter Way",createdAt:"January 2012 - February 2014",body:i.a.createElement(o.Fragment,null,"I intervened as Lead Developer on more than a dozen projects, ranging in size between the institutional site of a European lobby to one of the largest French travel agency.")},{icon:i.a.createElement(d.a,{glyph:"education"}),title:"Software Engineering Technician",subtitle:"In'Tech INFO",createdAt:"March 2007 - January 2012",body:"Promotion: ITI07M, TOEIC: 775/990"}],m=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),y(t,[{key:"generateTimelineEvent",value:function(e){var t=e.title,n=e.subtitle,r=e.createdAt,l=e.icon,a=void 0===l?i.a.createElement(d.a,{glyph:"briefcase"}):l,o=e.body;return i.a.createElement(s.TimelineEvent,{title:t,subtitle:n,createdAt:r,icon:a,iconColor:"#158CBA",titleStyle:{fontWeight:"bold"},subtitleStyle:{fontWeight:"bold"},style:{fontSize:"1.5em"},key:t+"-"+r},o)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement(c.a,null,"Resume ",i.a.createElement("small",null,"also known as Curriculum Vitae")),i.a.createElement(s.Timeline,null,b.map(this.generateTimelineEvent)))}}]),t}(o.Component);t.default=m},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,left:18,height:"100%",width:2,background:"#a0b2b8"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0",paddingLeft:45},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,left:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{float:"right",textAlign:"right",marginTop:-20},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"}};t.default=r},292:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TimelineBlip=t.TimelineEvent=t.Timeline=void 0;var l=n(293),a=r(l),o=n(294),i=r(o),u=n(295),c=r(u);t.Timeline=a.default,t.TimelineEvent=i.default,t.TimelineBlip=c.default},293:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),f=n(1),d=r(f),p=n(281),y=r(p),b=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("section",i({style:y.default.container},this.props),s.default.createElement("div",{style:y.default.containerBefore}),this.props.children,s.default.createElement("div",{style:y.default.containerAfter})))}}]),t}(c.Component);b.propTypes={children:d.default.node.isRequired},t.default=b},294:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),d=n(1),p=r(d),y=n(281),b=r(y),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"mergeNotificationStyle",value:function(e,t){var n=e?u({},b.default.eventType,{color:e,borderColor:e}):b.default.eventType;return u({},n,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?b.default.cardBody:b.default.message;return e?u({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?b.default.time:u({},b.default.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=u({},b.default.eventContainer,e);return this.showAsCard()?u({},b.default.card,t):t}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,r=e.subtitle,a=e.contentStyle,o=e.iconStyle,i=e.bubbleStyle,c=e.buttons,s=e.icon,d=e.iconColor,p=e.container,y=e.cardHeaderStyle,m=e.titleStyle,h=e.subtitleStyle,g=l(e,["createdAt","title","subtitle","contentStyle","iconStyle","bubbleStyle","buttons","icon","iconColor","container","cardHeaderStyle","titleStyle","subtitleStyle"]);return f.default.createElement("div",{style:b.default.event},f.default.createElement("div",{style:this.mergeNotificationStyle(d,i)},f.default.createElement("span",{style:u({},b.default.materialIcons,o)},s)),f.default.createElement("div",u({},g,{style:this.containerStyle()}),f.default.createElement("div",{style:b.default.eventContainerBefore}),f.default.createElement("div",{style:"card"===p?u({},b.default.cardTitle,y):{}},t&&f.default.createElement("div",{style:this.timeStyle()},t),f.default.createElement("div",{style:m},n),r&&f.default.createElement("div",{style:u({},b.default.subtitle,h)},r),f.default.createElement("div",{style:b.default.actionButtons},c)),this.props.children&&f.default.createElement("div",{style:this.mergeContentStyle(a)},this.props.children,f.default.createElement("div",{style:b.default.messageAfter}))),f.default.createElement("div",{style:b.default.eventAfter}))}}]),t}(s.Component);m.propTypes={title:p.default.node.isRequired,subtitle:p.default.node,createdAt:p.default.node,children:p.default.node,buttons:p.default.node,container:p.default.string,icon:p.default.node,iconColor:p.default.string,iconStyle:p.default.object,bubbleStyle:p.default.object,contentStyle:p.default.object,cardHeaderStyle:p.default.object,style:p.default.object,titleStyle:p.default.object,subtitleStyle:p.default.object},m.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{}},t.default=m},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),d=n(1),p=r(d),y=n(281),b=r(y),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"mergeNotificationStyle",value:function(e){return e?u({},b.default.eventType,{color:e,borderColor:e}):b.default.eventType}},{key:"iconStyle",value:function(e){return u({},b.default.materialIcons,{iconStyle:e})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,r=e.icon,a=e.iconColor,o=l(e,["title","iconStyle","icon","iconColor"]);return f.default.createElement("div",{style:u({},b.default.event,{marginBottom:50})},f.default.createElement("div",{style:this.mergeNotificationStyle(a)},f.default.createElement("span",{style:this.iconStyle(n)},r)),f.default.createElement("div",u({},o,{style:b.default.blipStyle}),f.default.createElement("div",null,t)),f.default.createElement("div",{style:b.default.eventAfter}))}}]),t}(s.Component);m.propTypes={title:p.default.node.isRequired,icon:p.default.node,iconColor:p.default.string,iconStyle:p.default.object,style:p.default.object},m.defaultProps={iconStyle:{},style:{}},t.default=m},296:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(4),a=r(l),o=n(5),i=r(o),u=n(6),c=r(u),s=n(7),f=r(s),d=n(8),p=r(d),y=n(9),b=r(y),m=n(0),h=r(m),g=n(1),v=r(g),E=n(10),S={glyph:v.default.string.isRequired},j=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.glyph,r=t.className,l=(0,i.default)(t,["glyph","className"]),o=(0,E.splitBsProps)(l),u=o[0],c=o[1],s=(0,a.default)({},(0,E.getClassSet)(u),(e={},e[(0,E.prefix)(u,n)]=!0,e));return h.default.createElement("span",(0,a.default)({},c,{className:(0,b.default)(r,s)}))},t}(h.default.Component);j.propTypes=S,t.default=(0,E.bsClass)("glyphicon",j),e.exports=t.default},297:function(e,t,n){e.exports=n.p+"static/media/index.79fb2325.sass"}});
//# sourceMappingURL=2.3b6cdaf6.chunk.js.map