(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,n){e.exports={GetContainer:"GetImg_GetContainer___4ULB",BtnForm:"GetImg_BtnForm__M_LKx"}},13:function(e,t,n){e.exports={DownloadContainer:"DownloadImg_DownloadContainer__1x3Y-",DownloadBtnImg:"DownloadImg_DownloadBtnImg__2veQd"}},14:function(e,t,n){e.exports={Overlay:"ModalImg_Overlay__3ro9e",Modal:"ModalImg_Modal__1dG33"}},37:function(e,t,n){},6:function(e,t,n){e.exports={ImgContainer:"ImgContainer_ImgContainer__2vtBM"}},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(37),n(17)),l=n(4),s=n(31),m=n(12),u=n.n(m),g=n(1);function d(e){var t=e.onSubmit,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],r=o[1];return Object(g.jsx)("div",{className:u.a.GetContainer,children:Object(g.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438!");t(c),r("")},children:[Object(g.jsx)("button",{className:u.a.BtnForm,type:"submit",children:Object(g.jsx)(s.a,{style:{width:24,height:24}})}),Object(g.jsx)("input",{type:"tel",placeholder:"Search images...",name:"number",value:c,onChange:function(e){r(e.currentTarget.value.toLowerCase())},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432!!!"})]})})}var j=n(13),b=n.n(j);function h(e){var t=e.nameImgState,n=e.onClickPageState;return Object(g.jsx)("div",{className:b.a.DownloadContainer,children:""!==t&&Object(g.jsx)("button",{className:b.a.DownloadBtnImg,onClick:n,children:"Add image"})})}var O=n(26),f=n(27),p=n(32),I=n(30),v=n(14),x=n.n(v),C=document.querySelector("#modal-root"),_=function(e){Object(p.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleClickKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClickBackDrop=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleClickKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleClickKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{id:"Overlay",className:x.a.Overlay,onClick:this.handleClickBackDrop,children:Object(g.jsx)("div",{className:x.a.Modal,children:this.props.children})}),C)}}]),n}(a.Component),y=n(9),w=n.n(y);function k(e){var t=e.imgName,n=e.imgList,a=e.onClickToggleModal,o=e.onClickOpenModal;return Object(g.jsx)("ul",{className:w.a.ImageGallery,onClick:o,children:n.map((function(e){var n=e.id,o=e.webformatURL;return Object(g.jsx)("li",{className:w.a.ImageGalleryItem,onClick:a,children:Object(g.jsx)("img",{className:w.a.ImageGalleryItemImage,src:o,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(t)})},n)}))})}n(39);var S=n(15),M=n.n(S),N=n(6),D=n.n(N);function G(e){var t=e.imgList,n=e.toggleModal,a=e.modalRendImg,o=e.onClickPageState,c=e.targetImg,r=e.showModal,i=e.statusLoad,l=e.imgName,s=e.imgStatus,m=e.errorApi;return"idle"===s?Object(g.jsx)("div",{className:D.a.ImgContainer,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u043f\u043e\u043b\u0435 \u0432\u044b\u0448\u0435!! "}):"error"===s?Object(g.jsxs)("h1",{className:D.a.ImgContainer,children:[" ",m," "]}):"load"===s?Object(g.jsx)("div",{className:D.a.ImgContainer,children:Object(g.jsx)(M.a,{type:"Oval",color:"#00BFFF",height:50,width:50})}):"resolved"===s?Object(g.jsxs)(g.Fragment,{children:[t&&Object(g.jsx)(k,{imgName:l,imgList:t,onClickOpenModal:a,onClickToggleModal:n}),i&&Object(g.jsx)("div",{className:D.a.ImgContainer,children:Object(g.jsx)(M.a,{type:"Oval",color:"#00BFFF",height:50,width:50})}),Object(g.jsx)(h,{nameImgState:l,onClickPageState:function(){o()}}),r&&Object(g.jsx)(_,{onClose:n,children:Object(g.jsx)("img",{src:c,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(l)})})]}):void 0}var B=n(16),L=n.n(B),A=n(28),F=n(29),E=n.n(F),T={fetchApi:function(){var e=Object(A.a)(L.a.mark((function e(t){var n,a,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.nameImg,a=t.pageImg,e.next=3,E.a.get("".concat("https://pixabay.com/api/","?q=").concat(n,"&page=").concat(a,"&key=").concat("22248336-3f9f08778186b55c7ac32d168","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return o=e.sent,e.abrupt("return",o.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function P(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],m=r[1],u=Object(a.useState)(1),j=Object(l.a)(u,2),b=j[0],h=j[1],O=Object(a.useState)("idle"),f=Object(l.a)(O,2),p=f[0],I=f[1],v=Object(a.useState)(""),x=Object(l.a)(v,2),C=x[0],_=x[1],y=Object(a.useState)(null),w=Object(l.a)(y,2),k=w[0],S=w[1],M=Object(a.useState)(!1),N=Object(l.a)(M,2),D=N[0],B=N[1],L=Object(a.useState)(!1),A=Object(l.a)(L,2),F=A[0],E=A[1];Object(a.useEffect)((function(){""!==s&&(I("load"),T.fetchApi({nameImg:s,pageImg:b}).then((function(e){return o(e)})).catch((function(e){return S(e)})).finally((function(){return I("resolved")})))}),[s]),Object(a.useEffect)((function(){1!==b&&(B(!0),T.fetchApi({nameImg:s,pageImg:b}).then((function(e){return o((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))})).then(P).catch((function(e){return S(e)})).finally((function(){return B(!1)})))}),[b]);var P=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(d,{onSubmit:function(e){o([]),m(e),h(1)}}),Object(g.jsx)(G,{imgList:n,imgName:s,imgStatus:p,errorApi:k,statusLoad:D,showModal:F,targetImg:C,onClickPageState:function(){h((function(e){return e+1}))},modalRendImg:function(e){e.target!==e.currentTarget&&_(e.target.currentSrc)},toggleModal:function(){E((function(e){return!e}))}})]})}r.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={ImgContainer:"ImgItem_ImgContainer__3ebJi",ImageGallery:"ImgItem_ImageGallery__1QTYk",ImageGalleryItem:"ImgItem_ImageGalleryItem__x9RtM",ImageGalleryItemImage:"ImgItem_ImageGalleryItemImage__2g9uo"}}},[[80,1,2]]]);
//# sourceMappingURL=main.f4322550.chunk.js.map