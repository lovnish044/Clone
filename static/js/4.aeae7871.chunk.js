(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{176:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(158),r=n(177),o=n(174),s=n(175),i=n(39),u=n(173),l=n(37),d=n(41),p=n(16),j=n(167),g=n(164),b=n(181),h=n(166),x=n(107),f=n(182),m=n(159),O=n(163),v=n(3),w=Object(c.a)({imageContainer:{display:"flex",justifyContent:"center"},profilePicture:{width:200,height:200,borderRadius:"50%",padding:"18px 0"},nameContainer:{background:"#FFFFFF",padding:"12px 30px 2px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.08)","& :first-child":{fontSize:14,color:"#009688"},"& :last-child":{margin:"14px 0",color:"#4A4A4A"}},description:{padding:"10px 20px 28px 30px","& > *":{color:"rgba(0, 0, 0, 0.45)",fontSize:12}}}),k=function(){var e=w(),t=Object(a.useContext)(i.a).account;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(r.a,{className:e.imageContainer,children:Object(v.jsx)("img",{src:t.imageUrl,alt:"displaypicture",className:e.profilePicture})}),Object(v.jsxs)(r.a,{className:e.nameContainer,children:[Object(v.jsx)(m.a,{children:"Your Name"}),Object(v.jsx)(m.a,{children:t.name})]}),Object(v.jsx)(r.a,{className:e.description,children:Object(v.jsx)(m.a,{children:"This is not your username or pin. This name will be visible to your WhatsApp contacts"})}),Object(v.jsxs)(r.a,{className:e.nameContainer,children:[Object(v.jsx)(m.a,{children:"About"}),Object(v.jsx)(m.a,{children:"Be Yourself"})]})]})},y=Object(c.a)({header:{background:"#00bfa5",height:97,color:"#FFFFFF",display:"flex","& > *":{marginTop:"auto",padding:15,fontWeight:600}},component:{background:"#ededed",height:"85%"}}),N=function(e){var t=e.open,n=e.setOpen,a=e.profile,c=y();return Object(v.jsxs)(f.a,{open:t,onClose:function(){n(!1)},children:[Object(v.jsxs)(r.a,{className:c.header,children:[Object(v.jsx)(O.a,{onClick:function(){return n(!1)}}),Object(v.jsx)(m.a,{children:"Profile"})]}),Object(v.jsx)(r.a,{className:c.component,children:a&&Object(v.jsx)(k,{})})]})},C=Object(c.a)({menuItem:{fontSize:14,padding:"15px 60px 5px 24px",color:"#4A4A4A"},logout:{border:"none!important",boxShadow:"none!important","& > *":{padding:"0px!important"}}}),I=function(){var e=C(),t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),s=Object(p.a)(o,2),u=s[0],l=s[1],j=Object(a.useContext)(i.a),f=j.setAccount,m=j.setShowloginButton,O=j.showlogoutButton,w=j.setShowlogoutButton,k=Object(a.useContext)(d.a).setPerson,y=function(){r(null)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g.a,{onClick:function(e){r(e.currentTarget)}}),Object(v.jsxs)(b.a,{anchorEl:c,keepMounted:!0,open:c,onClose:y,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(v.jsx)(h.a,{className:e.menuItem,onClick:function(){y(),l(!0)},children:"Profile"}),Object(v.jsx)(h.a,{className:e.menuItem,onClick:function(){y()},children:O?Object(v.jsx)(x.GoogleLogout,{clientId:"538880638100-vt7ogumu555ipciltgl18f38frl0bafd.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),w(!1),m(!0),f(""),k({})},className:e.logout}):null})]}),Object(v.jsx)(N,{open:u,setOpen:l,profile:!0})]})},F=Object(c.a)({header:{height:35,background:"#ededed",display:"flex",padding:"10px 16px",alignItems:"center"},chatIcons:{marginLeft:"auto","& > *":{marginLeft:2,padding:8,color:"#919191"},"& :first-child":{fontSize:22,marginRight:8,marginTop:3}},avatar:{height:37,width:37,borderRadius:"50%"}}),S=function(){var e=F(),t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],o=n[1],s=Object(a.useContext)(i.a).account;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(r.a,{className:e.header,children:[Object(v.jsx)("img",{src:s.imageUrl,className:e.avatar,onClick:function(){o(!0)}}),Object(v.jsxs)(r.a,{className:e.chatIcons,children:[Object(v.jsx)(j.a,{}),Object(v.jsx)(I,{})]})]}),Object(v.jsx)(N,{open:c,setOpen:o,profile:!0})]})},P=n(180),A=n(168),T=Object(c.a)((function(e){return{component:{background:"#F6F6F6",height:43,display:"flex",alignItems:"center",transition:"box-shadow .18s ease-out,background-color .25s ease-out"},search:{position:"relative",borderRadius:18,backgroundColor:"#FFFFFF",margin:"0 13px",width:"100%"},searchIcon:{color:"#919191",padding:e.spacing(0,2),height:"100%",position:"absolute",display:"flex",alignItems:"center"},inputRoot:{width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:65,fontSize:14,height:15,width:"100%"}}})),L=function(e){var t=e.setText,n=T();return Object(v.jsx)(r.a,{className:n.component,children:Object(v.jsxs)(r.a,{className:n.search,children:[Object(v.jsx)(r.a,{className:n.searchIcon,children:Object(v.jsx)(A.a,{fontSize:"small"})}),Object(v.jsx)(P.a,{placeholder:"Search or start new chat",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return t(e.target.value)}})]})})},z=n(95),E=n(96),R=n.n(E),W=n(169),B=n(126),U=n.n(B),M="https://lovnish-whatsapp-clonee.herokuapp.com/",H=function(){var e=Object(z.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.post("".concat(M,"/add"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while calling addUser API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(z.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("".concat(M,"/users"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while calling getUsers API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(z.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.post("".concat(M,"/conversation/add"),t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error while calling setConversation API ",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(z.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.post("".concat(M,"/conversation/get"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while calling getConversation API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(z.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("".concat(M,"/message/get/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while calling getMessages API ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(z.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.post("".concat(M,"/message/add"),t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Error while calling newConversations API ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),V=Object(c.a)({component:{height:40,display:"flex",padding:"13px 0",cursor:"pointer"},displayPicture:{width:50,height:50,objectFit:"cover",borderRadius:"50%",padding:"0 14px"},container:{display:"flex"},timestamp:{fontSize:12,marginLeft:"auto",color:"#00000099",marginRight:20},text:{display:"block",color:"rgba(0, 0, 0, 0.6)",fontSize:14}}),J=function(e){var t=e.user,n=V(),c=t.imageUrl,o=Object(a.useContext)(d.a).setPerson,s=Object(a.useContext)(i.a),u=s.account,l=(s.socket,s.newMessageFlag),j=Object(a.useState)({}),g=Object(p.a)(j,2),b=g[0],h=g[1];Object(a.useEffect)((function(){var e=function(){var e=Object(z.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y({sender:u.googleId,receiver:t.googleId});case 2:n=e.sent,h({text:n.message,timestamp:n.updatedAt});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]);var x=function(){var e=Object(z.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(t),e.next=3,_({senderId:u.googleId,receiverId:t.googleId});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){return e<10?"0"+e:e};return Object(v.jsxs)(r.a,{className:n.component,onClick:function(){return x()},children:[Object(v.jsx)(r.a,{children:Object(v.jsx)("img",{src:c,alt:"display picture",className:n.displayPicture})}),Object(v.jsxs)(r.a,{style:{width:"100%"},children:[Object(v.jsxs)(r.a,{className:n.container,children:[Object(v.jsx)(m.a,{children:t.name}),b.text&&Object(v.jsxs)(m.a,{className:n.timestamp,children:[f(new Date(b.timestamp).getHours()),":",f(new Date(b.timestamp).getMinutes())]})]}),Object(v.jsx)(r.a,{children:Object(v.jsx)(m.a,{className:n.text,children:b.text})})]})]})},K=Object(c.a)({component:{overflow:"overlay",height:"81vh"},divider:{margin:"0 0 0 67px",backgroundColor:"#F2F2F2"}}),Q=function(e){var t=e.text,n=K(),c=Object(a.useState)([]),o=Object(p.a)(c,2),s=o[0],u=o[1],l=Object(a.useContext)(i.a),d=l.account,j=l.socket,g=l.setActiveUsers;return Object(a.useEffect)((function(){var e=function(){var e=Object(z.a)(R.a.mark((function e(){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:n=e.sent,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),u(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(a.useEffect)((function(){j.current.emit("addUser",d.googleId),j.current.on("getUsers",(function(e){g(e)}))}),[d]),Object(v.jsx)(r.a,{className:n.component,children:s&&s.map((function(e,t){return e.googleId!==d.googleId&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(J,{user:e}),s.length!==t+1&&Object(v.jsx)(W.a,{className:n.divider})]})}))})},X=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(v.jsx)(r.a,{children:Object(v.jsxs)(r.a,{children:[Object(v.jsx)(S,{}),Object(v.jsx)(L,{setText:c}),Object(v.jsx)(Q,{text:n})]})})},Z=Object(c.a)({header:{height:35,background:"#ededed",display:"flex",padding:"10px 16px",alignItems:"center"},displayPicture:{width:37,height:37,objectFit:"cover",borderRadius:"50%",padding:"0 2px"},name:{marginLeft:10},rightContainer:{marginLeft:"auto","& > *":{padding:8,fontSize:22,color:"#919191"}},status:{fontSize:12,color:"rgb(0, 0, 0, 0.6)",marginLeft:10}}),$=function(e){var t=e.person,n=Z(),c=t.imageUrl,o=Object(a.useContext)(i.a).activeUsers;return console.log(o),Object(v.jsxs)(r.a,{className:n.header,children:[Object(v.jsx)("img",{src:c,alt:"display picture",className:n.displayPicture}),Object(v.jsxs)(r.a,{children:[Object(v.jsx)(m.a,{className:n.name,children:t.name}),Object(v.jsx)(m.a,{className:n.status,children:null!==o&&void 0!==o&&o.find((function(e){return e.userId===t.googleId}))?"Online":"Offline"})]}),Object(v.jsxs)(r.a,{className:n.rightContainer,children:[Object(v.jsx)(A.a,{}),Object(v.jsx)(g.a,{})]})]})},ee=n(26),te=n(22),ne=Object(c.a)({wrapper:{background:"#FFFFFF",padding:5,maxWidth:"60%",width:"fit-content",display:"flex",borderRadius:10,wordBreak:"break-word"},own:{background:"#dcf8c6",padding:5,maxWidth:"60%",width:"fit-content",marginLeft:"auto",display:"flex",borderRadius:10,wordBreak:"break-word"},text:{fontSize:14,padding:"0 25px 0 5px"},time:Object(te.a)({fontSize:10,color:"#919191",marginTop:6,wordBreak:"keep-all"},"marginTop","auto")}),ae=function(e){var t=e.message,n=ne(),c=Object(a.useContext)(i.a).account,o=function(e){return e<10?"0"+e:e};return Object(v.jsxs)(r.a,{className:c.googleId===t.sender?n.own:n.wrapper,children:[Object(v.jsx)(m.a,{className:n.text,children:t.text}),Object(v.jsxs)(m.a,{className:n.time,children:[o(new Date(t.createdAt).getHours()),":",o(new Date(t.createdAt).getMinutes())]})]})},ce=n(170),re=n(171),oe=n(172),se=Object(c.a)((function(e){return{footer:{height:"55px",background:"#ededed",width:"100%",bottom:0,display:"flex",alignItems:"center",padding:"0 15px","&  >*":{margin:5,color:"#919191"}},search:{borderRadius:18,backgroundColor:"#FFFFFF",width:"calc(94% - 100px)"},inputRoot:{width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:25,fontSize:14,height:20,width:"100%"},clipIcon:{transform:"rotate(40deg)"}}})),ie=function(e){var t=e.sendText,n=e.value,a=e.setValue,c=se();return Object(v.jsxs)(r.a,{className:c.footer,children:[Object(v.jsx)(ce.a,{}),Object(v.jsx)(re.a,{className:c.clipIcon}),Object(v.jsx)(r.a,{className:c.search,children:Object(v.jsx)(P.a,{placeholder:"Type a message",classes:{root:c.inputRoot,input:c.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return t(e)},value:n})}),Object(v.jsx)(oe.a,{})]})},ue=Object(c.a)({wrapper:{backgroundImage:"url(".concat("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png",")"),backgroundSize:"50%"},footer:{height:"55px",background:"#ededed",width:"100%"},component:{height:"79vh",overflowY:"scroll"},container:{padding:"1px 80px"}}),le=function(e){var t,n=e.person,c=e.conversation,o=ue(),s=Object(a.useState)([]),u=Object(p.a)(s,2),l=u[0],d=u[1],j=Object(a.useState)(null),g=Object(p.a)(j,2),b=g[0],h=g[1],x=Object(a.useState)(),f=Object(p.a)(x,2),m=f[0],O=f[1],w=Object(a.useRef)(),k=Object(a.useContext)(i.a),y=k.account,N=k.socket,C=k.newMessageFlag,I=k.setNewMessageFlag;Object(a.useEffect)((function(){N.current.on("getMessage",(function(e){h({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(z.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(c._id);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[null===c||void 0===c?void 0:c._id,n._id,C]),Object(a.useEffect)((function(){var e;null===(e=w.current)||void 0===e||e.scrollIntoView({transition:"smooth"})}),[l]),Object(a.useEffect)((function(){var e;b&&(null===c||void 0===c||null===(e=c.members)||void 0===e?void 0:e.includes(b.sender))&&d((function(e){return[].concat(Object(ee.a)(e),[b])}))}),[b,c]);var F=null===c||void 0===c||null===(t=c.members)||void 0===t?void 0:t.find((function(e){return e!==y.googleId})),S=function(){var e=Object(z.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.keyCode||t.which,m){e.next=3;break}return e.abrupt("return");case 3:if(13!==n){e.next=10;break}return a={sender:y.googleId,conversationId:c._id,text:m},N.current.emit("sendMessage",{senderId:y.googleId,receiverId:F,text:m}),e.next=8,G(a);case 8:O(""),I((function(e){return!e}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(r.a,{className:o.wrapper,children:[Object(v.jsx)(r.a,{className:o.component,children:l&&l.map((function(e){return Object(v.jsx)(r.a,{className:o.container,ref:w,children:Object(v.jsx)(ae,{message:e})})}))}),Object(v.jsx)(ie,{sendText:S,value:m,setValue:O})]})},de=function(){var e=Object(a.useContext)(d.a),t=e.person,n=(e.setPerson,Object(a.useContext)(i.a).account),c=Object(a.useState)({}),o=Object(p.a)(c,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(z.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y({sender:n.googleId,receiver:t.googleId});case 2:a=e.sent,u(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.googleId]),Object(v.jsxs)(r.a,{style:{height:"75%"},children:[Object(v.jsx)($,{person:t}),Object(v.jsx)(le,{person:t,conversation:s})]})},pe=Object(c.a)((function(e){return{component:{background:"#f8f9fa",padding:"50px 0",textAlign:"center",height:"100%"},container:Object(te.a)({padding:"0 200px"},e.breakpoints.down("sm"),{padding:-0}),image:{width:320},title:{fontSize:36,fontWeight:300,color:"#525252",marginTop:25},subTitle:{marginTop:10,fontSize:14,color:"rgba(0, 0, 0, 0.45)"},divider:{margin:"30px 0"}}})),je=function(){var e=pe();return Object(v.jsx)(r.a,{className:e.component,children:Object(v.jsxs)(r.a,{className:e.container,children:[Object(v.jsx)("img",{src:"https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg",alt:"dp",className:e.image}),Object(v.jsx)(m.a,{className:e.title,children:"Keep your phone connected"}),Object(v.jsx)(m.a,{className:e.subTitle,children:"Whatsapp connects you to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi."}),Object(v.jsx)(W.a,{className:e.divider})]})})},ge=Object(c.a)({component:{display:"flex"},leftComponent:{minWidth:380},rightComponent:{width:"70%",minWidth:300,height:"100%",borderLeft:"1px solid rgba(0, 0, 0, 0.14)"}}),be=Object(l.a)({dialogPaper:{height:"95%",width:"91%",maxWidth:"100%",maxHeight:"100%",borderRadius:0,boxShadow:"none",overflow:"hidden"}})((function(e){var t=e.classes,n=ge(),c=Object(a.useContext)(d.a).person;return Object(v.jsx)(u.a,{open:!0,classes:{paper:t.dialogPaper},BackdropProps:{style:{backgroundColor:"unset"}},children:Object(v.jsxs)(r.a,{className:n.component,children:[Object(v.jsx)(r.a,{className:n.leftComponent,children:Object(v.jsx)(X,{})}),Object(v.jsx)(r.a,{className:n.rightComponent,children:Object.keys(c).length?Object(v.jsx)(de,{}):Object(v.jsx)(je,{})})]})})})),he=n(165),xe=n(178),fe=Object(c.a)({component:{display:"flex"},dialog:{padding:"56px 0 56px 56px"},qr:{margin:"50px 0 0 50px",height:264,width:264},title:{fontSize:26,marginBottom:25,color:"#525252",fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",fontWeight:300},list:{"&  > *":{padding:0,marginTop:15,fontSize:18,lineHeight:"28px",color:"#4a4a4a"}}}),me=Object(l.a)({dialogPaper:{marginTop:"12%",height:"95%",width:"60%",maxWidth:"100%",maxHeight:"100%",borderRadius:0,boxShadow:"none",overflow:"hidden"}})((function(e){var t=e.classes,n=fe(),c="538880638100-vt7ogumu555ipciltgl18f38frl0bafd.apps.googleusercontent.com",o=Object(a.useState)(!1),s=Object(p.a)(o,2),l=(s[0],s[1]),d=Object(a.useContext)(i.a),j=(d.account,d.setAccount),g=d.showloginButton,b=d.setShowloginButton,h=d.showlogoutButton,f=d.setShowlogoutButton,O=function(){var e=Object(z.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Login Success:",t.profileObj),j(t.profileObj),b(!1),f(!0),e.next=6,H(t.profileObj);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l(!0)}),[]);return Object(v.jsx)(u.a,{onClose:function(){l(!1)},open:!0,classes:{paper:t.dialogPaper},BackdropProps:{style:{backgroundColor:"unset"}},children:Object(v.jsxs)(r.a,{className:n.component,children:[Object(v.jsxs)(r.a,{className:n.dialog,children:[Object(v.jsx)(m.a,{className:n.title,children:"To use WhatsApp on your computer:"}),Object(v.jsxs)(he.a,{className:n.list,children:[Object(v.jsx)(xe.a,{children:"1. Open WhatsApp on your phone"}),Object(v.jsx)(xe.a,{children:"2. Tap Menu Settings and select WhatsApp Web"}),Object(v.jsx)(xe.a,{children:"3. Point your phone to this screen to capture the code"})]})]}),Object(v.jsxs)(r.a,{style:{position:"relative"},children:[Object(v.jsx)("img",{src:"https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg",alt:"QR",className:n.qr}),Object(v.jsxs)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translateX(0%) translateY(-25%)"},children:[g?Object(v.jsx)(x.GoogleLogin,{clientId:c,buttonText:"",onSuccess:O,onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",isSignedIn:!0}):null,h?Object(v.jsx)(x.GoogleLogout,{clientId:c,buttonText:"",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),b(!0),f(!1)}}):null]})]})]})})})),Oe=Object(c.a)({component:{height:"100vh",background:"#DCDCDC"},header:{background:"#128C7E",height:115,boxShadow:"none"},loginHeader:{background:"#00bfa5",height:200,boxShadow:"none"}});t.default=function(){var e=Oe(),t=Object(a.useContext)(i.a).account;return Object(v.jsxs)(r.a,{className:e.component,children:[Object(v.jsx)(o.a,{className:t?e.header:e.loginHeader,children:Object(v.jsx)(s.a,{})}),t?Object(v.jsx)(be,{}):Object(v.jsx)(me,{})]})}}}]);
//# sourceMappingURL=4.aeae7871.chunk.js.map