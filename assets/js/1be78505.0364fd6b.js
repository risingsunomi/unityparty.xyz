(self.webpackChunkunityparty=self.webpackChunkunityparty||[]).push([[514,608],{767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Be}});var a=n(7294),o=n(3905),r=n(2263),l=n(6291),i=n(2611),s=n(2122),c=n(9756),u=n(6010),d=n(6700),p=n(944),m=n(1839),h=n(3783),f=n(7898),b=n(6742),y=n(3919),g=n(5537),v=function(e){return a.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(4478),E=n(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",_="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",T="menu_Bmed",S="menuLinkText_2aKo",x="menuWithAnnouncementBar_2WvA",I="collapseSidebarButton_1CGd",L="collapseSidebarButtonIcon_3E-R",j="sidebarMenuIcon_fgN0",B="sidebarMenuCloseIcon_1lpH",P="menuLinkExternal_1OhN",A=["items"],w=["item","onItemClick","collapsible","activePath"],R=["item","onItemClick","activePath","collapsible"];var O=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},D=(0,a.memo)((function(e){var t=e.items,n=(0,c.Z)(e,A);return t.map((function(e,t){return a.createElement(M,(0,s.Z)({key:t,item:e},n))}))}));function M(e){switch(e.item.type){case"category":return a.createElement(F,e);case"link":default:return a.createElement(W,e)}}function F(e){var t,n,o,r=e.item,l=e.onItemClick,i=e.collapsible,d=e.activePath,p=(0,c.Z)(e,w),m=r.items,h=r.label,f=O(r,d),b=(n=f,o=(0,a.useRef)(n),(0,a.useEffect)((function(){o.current=n}),[n]),o.current),y=(0,a.useState)((function(){return!!i&&(!f&&r.collapsed)})),g=y[0],v=y[1],k=(0,a.useRef)(null),E=(0,a.useState)(void 0),C=E[0],N=E[1],_=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!b&&g&&v(!1)}),[f,b,g]);var Z=(0,a.useCallback)((function(e){e.preventDefault(),C||_(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[C]);return 0===m.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":g})},a.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[S]=!i,t)),onClick:i?Z:void 0,href:i?"#!":void 0},p),h),a.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){g||_(!1)}},a.createElement(D,{items:m,tabIndex:g?"-1":"0",onItemClick:l,collapsible:i,activePath:d})))}function W(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,l=(e.collapsible,(0,c.Z)(e,R)),i=n.href,d=n.label,p=O(n,r);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(b.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":p},t[P]=!(0,y.Z)(i),t)),to:i},(0,y.Z)(i)&&{isNavLink:!0,exact:!0,onClick:o},l),d))}function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(v,{className:L}))}function z(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(j,B)},"\xd7"):a.createElement(k.Z,{className:j,height:24,width:24}))}var U=function(e){var t,n,o=e.path,r=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,c=e.isHidden,b=function(){var e=(0,p.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),y=(0,d.LU)(),v=y.navbar.hideOnScroll,k=y.hideableSidebar,E=(0,p.Z)().isAnnouncementBarClosed,S=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var o=(0,h.Z)();return(0,a.useEffect)((function(){o===h.D.desktop&&n(!1)}),[o]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),I=S.showResponsiveSidebar,L=S.closeResponsiveSidebar,j=S.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=v,t[_]=c,t))},v&&a.createElement(g.Z,{tabIndex:-1,className:Z}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",T,(n={"menu--show":I},n[x]=!E&&b,n))},a.createElement(z,{responsiveSidebarOpened:I,onClick:j}),a.createElement("ul",{className:"menu__list"},a.createElement(D,{items:r,onItemClick:L,collapsible:i,activePath:o}))),k&&a.createElement(H,{onClick:s}))},$={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},K={Prism:n(7410).Z,theme:$};function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Y=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},q=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Q=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=V({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=V({},n,{backgroundColor:null}),o};function X(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ee=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),J(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Q(e.theme,e.language):void 0;return t.themeDict=n})),J(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=V({},X(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?V({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),J(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(i))}})),J(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=V({},X(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?V({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),J(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,i=[],s=[i];l>-1;){for(;(r=a[l]++)<o[l];){var c=void 0,u=t[l],d=n[l][r];if("string"==typeof d?(u=l>0?u:["plain"],c=d):(u=q(u,d.type),d.alias&&(u=q(u,d.alias)),c=d.content),"string"==typeof c){var p=c.split(Y),m=p.length;i.push({types:u,content:p[0]});for(var h=1;h<m;h++)G(i),s.push(i=[]),i.push({types:u,content:p[h]})}else l++,t.push(u),n.push(c),a.push(0),o.push(c.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return G(i),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var te=n(7594),ne=n.n(te),ae={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},oe=n(5350),re=function(){var e=(0,d.LU)().prism,t=(0,oe.Z)().isDarkTheme,n=e.theme||ae,a=e.darkTheme||n;return t?a:n},le="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",se="codeBlockTitle_eoMF",ce="codeBlock_23N8",ue="codeBlockWithTitle_2JqI",de="copyButton_Ue-o",pe="codeBlockLines_39YC",me=/{([\d,-]+)}/,he=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function fe(e){var t=e.children,n=e.className,o=e.metastring,r=e.title,l=(0,d.LU)().prism,i=(0,a.useState)(!1),c=i[0],p=i[1],m=(0,a.useState)(!1),h=m[0],f=m[1];(0,a.useEffect)((function(){f(!0)}),[]);var b=(0,d.bc)(o)||r,y=(0,a.useRef)(null),g=[],v=re(),k=Array.isArray(t)?t.join(""):t;if(o&&me.test(o)){var C=o.match(me)[1];g=ne()(C).filter((function(e){return e>0}))}var N=n&&n.replace(/language-/,"");!N&&l.defaultLanguage&&(N=l.defaultLanguage);var _=k.replace(/\n$/,"");if(0===g.length&&void 0!==N){for(var Z,T="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return he(["js","jsBlock"]);case"jsx":case"tsx":return he(["js","jsBlock","jsx"]);case"html":return he(["js","jsBlock","html"]);case"python":case"py":return he(["python"]);default:return he()}}(N),x=k.replace(/\n$/,"").split("\n"),I=0;I<x.length;){var L=I+1,j=x[I].match(S);if(null!==j){switch(j.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":T+=L+",";break;case"highlight-start":Z=L;break;case"highlight-end":T+=Z+"-"+(L-1)+","}x.splice(I,1)}else I+=1}g=ne()(T),_=x.join("\n")}var B=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(_),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.createElement(ee,(0,s.Z)({},K,{key:String(h),theme:v,code:_,language:N}),(function(e){var t,n=e.className,o=e.style,r=e.tokens,l=e.getLineProps,i=e.getTokenProps;return a.createElement("div",{className:le},b&&a.createElement("div",{style:o,className:se},b),a.createElement("div",{className:(0,u.Z)(ie,N)},a.createElement("div",{tabIndex:0,className:(0,u.Z)(n,ce,"thin-scrollbar",(t={},t[ue]=b,t))},a.createElement("div",{className:pe,style:o},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.createElement("div",(0,s.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,s.Z)({key:t},i({token:e,key:t})))})))})))),a.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(de),onClick:B},c?a.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var be="enhancedAnchor_2LWZ",ye=["id"],ge=function(e){return function(t){var n,o=t.id,r=(0,c.Z)(t,ye),l=(0,d.LU)().navbar.hideOnScroll;return o?a.createElement(e,r,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[be]=!l,n)),id:o}),r.children,a.createElement("a",{className:"hash-link",href:"#"+o,title:(0,E.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,r)}},ve={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(fe,e):a.createElement("code",e)},a:function(e){return a.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(fe,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:ge("h1"),h2:ge("h2"),h3:ge("h3"),h4:ge("h4"),h5:ge("h5"),h6:ge("h6")},ke=n(4608),Ee=n(5977),Ce="docPage_31aa",Ne="docMainContainer_3ufF",_e="docMainContainerEnhanced_3NYZ",Ze="docSidebarContainer_3Kbt",Te="docSidebarContainerHidden_3pA8",Se="collapsedDocSidebar_2JMH",xe="expandSidebarButtonIcon_1naQ",Ie="docItemWrapperEnhanced_2vyJ",Le="docItemWrapper_3FMP";function je(e){var t,n,l,s,c,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,f=(0,r.default)(),b=f.siteConfig,y=f.isClient,g=m.pluginId,k=m.permalinkToSidebar,C=m.docsSidebars,N=m.version,_=k[p.path],Z=C[_],T=(0,a.useState)(!1),S=T[0],x=T[1],I=(0,a.useState)(!1),L=I[0],j=I[1],B=(0,a.useCallback)((function(){L&&j(!1),x(!S)}),[L]);return a.createElement(i.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(g,N)}},a.createElement("div",{className:Ce},Z&&a.createElement("div",{className:(0,u.Z)(Ze,(t={},t[Te]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ze)&&S&&j(!0)},role:"complementary"},a.createElement(U,{key:_,sidebar:Z,path:p.path,sidebarCollapsible:null==(n=null==(l=b.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:B,isHidden:L}),L&&a.createElement("div",{className:Se,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:B,onClick:B},a.createElement(v,{className:xe}))),a.createElement("main",{className:(0,u.Z)(Ne,(s={},s[_e]=S||!Z,s))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",Le,(c={},c[Ie]=S,c))},a.createElement(o.Zo,{components:ve},h)))))}var Be=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,Ee.LX)(o.pathname,e)}));return r?a.createElement(je,{currentDocRoute:r,versionMetadata:n},(0,l.Z)(t)):a.createElement(ke.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(2611),r=n(4973);t.default=function(){return a.createElement(o.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);