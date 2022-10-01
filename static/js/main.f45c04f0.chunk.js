(this["webpackJsonptrip-chasers-react"]=this["webpackJsonptrip-chasers-react"]||[]).push([[0],{119:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(30),c=s.n(r),i=(s(88),s(38)),o=s(11),l=s(10),d=s(15),u=s(14),h=s(16),j=s(142),m=s(2),p=s(4),b=s(1),O=["user","component","render"],g=function(e){var t=e.user,s=e.component,n=e.render,a=Object(p.a)(e,O);return t&&n?Object(b.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:n})):Object(b.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return t?Object(b.jsx)(s,Object(m.a)({},e)):Object(b.jsx)(h.a,{to:"/"})}}))},f=s(66),x=(s(97),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,s=e.heading,n=e.message,a=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){a(r)}),300),Object(b.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f.a.Heading,{children:s}),Object(b.jsx)("p",{className:"alert-body",children:n})]})})}}]),s}(a.a.Component)),v=s(80),w=s(51),y=s(12),C=Object(b.jsxs)(n.Fragment,{className:"right-nav-bar",children:[Object(b.jsx)(y.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(b.jsx)(y.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(b.jsx)(y.c,{to:"/myposts",className:"nav-link",children:"My Feed"})]}),N=Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(y.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(b.jsx)(y.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),S=Object(b.jsx)(n.Fragment,{children:Object(b.jsx)(y.c,{exact:!0,to:"/home",className:"nav-link",children:"Home"})}),P=function(e){var t=e.user;return Object(b.jsxs)(w.a,{className:"nav-bar",style:{backgroundColor:"#ba6b6c"},variant:"dark",expand:"md",sticky:"top",children:[Object(b.jsx)(w.a.Brand,{children:Object(b.jsx)(y.b,{to:"/home",className:"nav-title",children:"Trip Chasers"})}),Object(b.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(b.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),S,t?C:N]})})]})},k=s(8),A="https://intense-headland-42096.herokuapp.com/",I="http://localhost:4741",U="localhost"===window.location.hostname?I:A,L=s(27),E=s.n(L),F=function(e){return E()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},T=s(9),D=s(20),B=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onSignUp=function(e){e.preventDefault();var t,s=n.props,a=s.msgAlert,r=s.history,c=s.setUser;(t=n.state,E()({method:"POST",url:U+"/sign-up/",data:{credentials:{email:t.email,username:t.username,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return F(n.state)})).then((function(e){return c(e.data.user)})).then((function(){return a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){n.setState({email:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},n.state={email:"",username:"",password:"",passwordConfirmation:""},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.email,s=e.password,n=e.passwordConfirmation,a=e.username;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Sign Up"}),Object(b.jsxs)(T.a,{onSubmit:this.onSignUp,children:[Object(b.jsxs)(T.a.Group,{controlId:"email",children:[Object(b.jsx)(T.a.Label,{children:"Email address"}),Object(b.jsx)(T.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(b.jsxs)(T.a.Group,{controlId:"username",children:[Object(b.jsx)(T.a.Label,{children:"Username"}),Object(b.jsx)(T.a.Control,{required:!0,type:"text",name:"username",value:a,placeholder:"Enter username",onChange:this.handleChange})]}),Object(b.jsxs)(T.a.Group,{controlId:"password",children:[Object(b.jsx)(T.a.Label,{children:"Password"}),Object(b.jsx)(T.a.Control,{required:!0,name:"password",value:s,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsxs)(T.a.Group,{controlId:"passwordConfirmation",children:[Object(b.jsx)(T.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(T.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(b.jsx)(D.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),s}(n.Component),R=Object(h.f)(B),G=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onSignIn=function(e){e.preventDefault();var t=n.props,s=t.msgAlert,a=t.history,r=t.setUser;F(n.state).then((function(e){return r(e.data.user)})).then((function(){return s({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){n.setState({email:"",password:""}),s({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},n.state={email:"",password:""},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.email,s=e.password;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Sign In"}),Object(b.jsxs)(T.a,{onSubmit:this.onSignIn,children:[Object(b.jsxs)(T.a.Group,{controlId:"email",children:[Object(b.jsx)(T.a.Label,{children:"Email address"}),Object(b.jsx)(T.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(b.jsxs)(T.a.Group,{controlId:"password",children:[Object(b.jsx)(T.a.Label,{children:"Password"}),Object(b.jsx)(T.a.Control,{required:!0,name:"password",value:s,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(b.jsx)(D.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),s}(n.Component),_=Object(h.f)(G),q=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,s=e.history,n=e.clearUser;(function(e){return E()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return s.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),s}(n.Component),z=Object(h.f)(q),M=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,s=t.msgAlert,a=t.history,r=t.user;(function(e,t){return E()({url:U+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,r).then((function(){return s({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),s({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,s=e.newPassword;return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(b.jsx)("h3",{children:"Change Password"}),Object(b.jsxs)(T.a,{onSubmit:this.onChangePassword,children:[Object(b.jsxs)(T.a.Group,{controlId:"oldPassword",children:[Object(b.jsx)(T.a.Label,{children:"Old password"}),Object(b.jsx)(T.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(b.jsxs)(T.a.Group,{controlId:"newPassword",children:[Object(b.jsx)(T.a.Label,{children:"New Password"}),Object(b.jsx)(T.a.Control,{required:!0,name:"newPassword",value:s,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(b.jsx)(D.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),s}(n.Component),W=Object(h.f)(M),H=s(67),J=s.n(H),V=s(78),Y=function(){var e=Object(V.a)(J.a.mark((function e(t,s){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(U+"/posts/",t,{headers:{Authorization:"Bearer ".concat(s.token),"Content-type":"multipart/form-data"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),K=function(e,t){return E()({method:"GET",url:U+"/posts/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})},Q=s(133),X=s(134),Z=s(135),$=s(13),ee=s(81),te={display:"block",marginTop:16},se={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:"3rem",padding:4,boxSizing:"border-box"},ne={display:"flex",minWidth:0,overflow:"hidden"},ae={display:"block",width:"auto",height:"100%"},re=function(e){var t=Object(n.useState)([]),s=Object($.a)(t,2),a=s[0],r=s[1],c=Object(ee.a)({accept:"image/*",onDrop:function(t){r(t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),e.onChange(t)}}),i=c.getRootProps,o=c.getInputProps,l=a.map((function(e){return Object(b.jsx)("div",{style:se,children:Object(b.jsx)("div",{style:ne,children:Object(b.jsx)("img",{src:e.preview,style:ae,onLoad:function(){URL.revokeObjectURL(e.preview)}})})},e.name)}));return Object(n.useEffect)((function(){return function(){a.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[a]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",Object(m.a)(Object(m.a)({},i({className:"dropzone"})),{},{className:"bg-gappson",children:[Object(b.jsx)("input",Object(m.a)({name:"photo"},o())),Object(b.jsx)("h6",{className:"text-center align-center",children:Object(b.jsx)("p",{className:"text-small",children:"Upload Image(s)"})})]})),Object(b.jsx)("div",{style:te,children:l})]})},ce=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.handleUpload=function(e){var t=[];e.map((function(e){return t.push(e)})),t.length>0?n.setState({img:t}):n.setState({img:[]})},n.handleSubmit=function(e){e.preventDefault();var t=n.props,s=t.user,a=t.msgAlert,r=t.history,c=t.newAddPost,i=new FormData;if(n.state.img.map((function(e){return i.append("photo",e)})),i.append("description",n.state.description),i.append("likes",n.state.likes),console.log({formData:i}),Y(i,s).then((function(e){console.log(e),c({_id:e.data.post._id,description:e.data.post.description,img:e.data.post.img})})).then((function(){n.setState({description:"",img:[]})})).then((function(){return r.push("/home")})).then((function(){a({heading:"New Post created",message:"Created successfully!",variant:"success"})})).catch((function(e){a({heading:"Failed to create new post",message:"Post error: "+e.message,variant:"danger"})})),n.state.description)return Object(b.jsx)(h.a,{to:"/posts"})},n.state={description:"",img:[],likes:0},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)(T.a,{onSubmit:this.handleSubmit,className:"form",method:"POST",children:[Object(b.jsx)(T.a.Group,{controlId:"description",children:Object(b.jsxs)("div",{className:"shareInput",children:[Object(b.jsx)("img",{src:"/Trip-Chasers-React/images/blank-profile-picture",className:"shareProfileImg",alt:"profile-pic"}),Object(b.jsx)(T.a.Control,{required:!0,name:"description",value:this.state.description,placeholder:"What's on your mind today?",onChange:this.handleChange})]})}),Object(b.jsx)("hr",{className:"shareHr"}),Object(b.jsxs)("div",{className:"shareBottom",children:[Object(b.jsxs)("label",{htmlFor:"file",className:"shareOptions",children:[Object(b.jsx)(Q.a,{className:"shareIcon"}),Object(b.jsx)(re,{name:"file",multiple:!0,onChange:this.handleUpload}),Object(b.jsx)(X.a,{className:"shareIcon"}),Object(b.jsx)("span",{children:"Tag Location"}),Object(b.jsx)(Z.a,{className:"shareIcon"}),Object(b.jsx)("span",{children:"Feelings"})]}),Object(b.jsx)("div",{children:Object(b.jsx)(D.a,{style:{backgroundColor:"#ba6b6c",border:"none"},type:"submit",className:"shareButton",children:"Share"})})]})]})}}]),s}(n.Component),ie=Object(h.f)(ce);var oe=function(e){var t=U,s=e.user,a=e.msgAlert,r=e.posts,c=e.setPosts,i=Object(n.useRef)(!1);Object(n.useEffect)((function(){!1===i.current&&function(e){return E()({method:"GET",url:U+"/posts/",headers:{Authorization:"Bearer ".concat(e.token),"Content-Type":"multipart/form-data"}})}(s).then((function(e){return c(e.data.posts)})).then((function(){a({heading:"Index Posts success",message:"Posts successfully shown!",variant:"success"})})).then((function(){i.current=!0})).catch((function(e){a({heading:"Indexing Posts failed",message:"Index error: "+e.message,variant:"danger"})}))}),[]);var o,l=Object(n.useState)({}),d=Object($.a)(l,2),u=d[0],h=d[1],j=function(e){return function(){h((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(k.a)({},e,!t[e]))}))}};return o=r?r.map((function(e,s){var n;return Object(b.jsxs)("div",{className:"posts",children:[Object(b.jsxs)("div",{className:"postWrapper",children:[Object(b.jsxs)("div",{className:"postTop",children:[Object(b.jsx)("img",{src:"/Trip-Chasers-React/images/blank-profile-picture",className:"postProfileImg",alt:""}),Object(b.jsx)("span",{className:"postUsername",children:null===(n=e.owner)||void 0===n?void 0:n.username})]}),Object(b.jsxs)("div",{className:"postCenter",children:[Object(b.jsx)("p",{children:e.description}),Object(b.jsx)("div",{className:"justify-contents-center align-items-center mt-5  ",children:e.img.map((function(s){return Object(b.jsx)("img",{crossOrigin:"true",src:t+"/uploads/"+s,className:"postImg",alt:""},e._id)}))})]})]}),Object(b.jsxs)("div",{className:"postBottom",children:[Object(b.jsxs)("div",{className:"postBottomLeft",children:[Object(b.jsx)("img",{className:"likeIcon",src:"images/like.png",alt:"",onClick:j(s)}),Object(b.jsxs)("span",{className:"likes",children:[u[s]?"1":"0"," likes"]})]}),Object(b.jsx)("div",{className:"postBottomRight",children:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y.b,{to:"/posts/".concat(e._id),children:Object(b.jsx)(D.a,{className:"postButton",style:{backgroundColor:"#ba6b6c",border:"none"},children:"View post"})})})})]})]},e._id)})):"No posts, create some",Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"all-posts",children:Object(b.jsx)("ul",{style:{display:"flex",flexDirection:"column-reverse"},children:o})})})},le=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,s=t.user,a=t.msgAlert,r=t.history,c=t.match;(function(e,t,s){return E()({url:U+"/posts/"+t,method:"patch",data:{post:e},headers:{Authorization:"Bearer ".concat(s.token)}})})(n.state,c.params.id,s).then((function(){return r.push("/posts/"+c.params.id)})).then((function(){a({heading:"Updated Post",message:"woot updated",variant:"success"})})).catch((function(e){a({heading:"Update failed",message:"Update error: "+e.message,variant:"danger"})}))},n.state={description:"",img:"",likes:0},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props,s=t.match,n=t.user,a=t.msgAlert;K(s.params.id,n).then((function(t){return e.setState({description:t.data.post.description,img:t.data.post.img})})).then((function(){a({heading:"Show post success",message:"Woot success",variant:"success"})})).catch((function(e){a({heading:"Show failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){return Object(b.jsxs)(T.a,{onSubmit:this.handleSubmit,children:[Object(b.jsxs)(T.a.Group,{controlId:"description",children:[Object(b.jsx)(T.a.Label,{children:"What's on your mind today?"}),Object(b.jsx)(T.a.Control,{required:!0,name:"description",value:this.state.description,placeholder:"Share your thoughts",onChange:this.handleChange})]}),Object(b.jsx)(D.a,{type:"submit",children:"Submit"})]})}}]),s}(n.Component),de=Object(h.f)(le),ue=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleDelete=function(){var e=n.props,t=e.match,s=e.user,a=e.msgAlert,r=e.history;(function(e,t){return E()({method:"DELETE",url:U+"/posts/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})})(t.params.id,s).then((function(){return r.push("/home")})).then((function(){a({heading:"Deleted post successfully",message:"Post deleted",variant:"success"})})).catch((function(e){a({heading:"Failed to delete post!",message:"Delete error: "+e.message,variant:"danger"})}))},n.state={post:null},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props,s=t.match,n=t.user,a=t.msgAlert;K(s.params.id,n).then((function(t){return e.setState({post:t.data.post})})).then((function(){a({heading:"Show post is success!",message:"Showing post successfully",variant:"success"})})).catch((function(e){a({heading:"Failure to show post!",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.post)return"Loading...";var e=U,t=this.state.post,s=t.description,n=t.img,a=t.owner,r=this.props,c=r.user,i=r.history,o=r.match;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h4",{children:["Check out this post by ",a.username]}),Object(b.jsx)("p",{children:s}),n.map((function(t){return Object(b.jsx)("img",{crossOrigin:"true",src:e+"/uploads/"+t,className:"postImg",alt:""},n._id)})),c._id===a._id&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D.a,{onClick:this.handleDelete,style:{backgroundColor:"#ba6b6c",border:"none"},children:"Delete Post"}),Object(b.jsx)(D.a,{onClick:function(){return i.push("/posts/".concat(o.params.id,"/edit"))},style:{backgroundColor:"#ba6b6c",border:"none"},children:"Update Post"})]})]})}}]),s}(n.Component),he=Object(h.f)(ue),je=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={posts:null},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props,s=t.user,n=t.msgAlert;(function(e){return E()({method:"GET",url:U+"/posts/",headers:{Authorization:"Bearer ".concat(e.token)}})})(s).then((function(e){return e.data.posts.filter((function(e){return e.owner._id===s._id}))})).then((function(t){return e.setState({posts:t})})).then((function(){n({heading:"Showing all your posts!",message:"Success!",variant:"success"})})).catch((function(e){n({heading:"Failure showing your posts",message:"Index error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this.state.posts;return null===t?"Loading...":(e=0===t.length?"No posts, create some":t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(y.b,{to:"/posts/".concat(e._id),children:e.description})},e._id)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"My Posts:"}),Object(b.jsx)("ul",{children:e})]}))}}]),s}(n.Component),me=s(136),pe=s(137),be=s(138),Oe=s(139),ge=s(140),fe=s(141),xe=function(){return Object(b.jsx)("div",{className:"profileSide",children:Object(b.jsx)("div",{className:"profileWrapper",children:Object(b.jsxs)("ul",{className:"profileList",children:[Object(b.jsxs)("li",{className:"profileListItem",children:[Object(b.jsx)(me.a,{className:"profileIcon"}),Object(b.jsx)("span",{children:"My Account"})]}),Object(b.jsxs)("li",{className:"profileListItem",children:[Object(b.jsx)(pe.a,{className:"profileIcon"}),Object(b.jsx)("span",{children:"Friends"})]}),Object(b.jsxs)("li",{className:"profileListItem",children:[Object(b.jsx)(be.a,{className:"profileIcon"}),Object(b.jsx)("span",{children:"Chat"})]}),Object(b.jsxs)("li",{className:"profileListItem",children:[Object(b.jsx)(Oe.a,{className:"profileIcon"}),Object(b.jsx)("span",{children:"Saved Events"})]}),Object(b.jsxs)("li",{className:"profileListItem",children:[Object(b.jsx)(ge.a,{className:"profileIcon"}),Object(b.jsx)("span",{children:"Bookmark"})]}),Object(b.jsxs)("li",{className:"profileListItem",children:[Object(b.jsx)(fe.a,{className:"profileIcon"}),Object(b.jsx)("span",{children:"Help"})]})]})})})},ve=function(){return Object(b.jsxs)("div",{className:"rightSide",children:[Object(b.jsxs)("div",{className:"right-title",children:[Object(b.jsx)("h4",{children:"Events"}),Object(b.jsx)("a",{href:"#",children:"See All"})]}),Object(b.jsxs)("div",{className:"event",children:[Object(b.jsxs)("div",{className:"left-event",children:[Object(b.jsx)("h3",{children:"20"}),Object(b.jsx)("span",{children:"February"})]}),Object(b.jsxs)("div",{className:"right-event",children:[Object(b.jsx)("h4",{children:"Trinidad Carnival"}),Object(b.jsx)("p",{children:"The Greatest Show on Earth"}),Object(b.jsx)("a",{href:"#",children:" More Info"})]})]})]})},we=function(e){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{className:"shareBox",children:Object(b.jsx)(ie,Object(m.a)({},e))}),Object(b.jsx)(oe,Object(m.a)({},e))]})},ye=function(e){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(xe,{}),Object(b.jsx)(we,Object(m.a)({},e)),Object(b.jsx)(ve,{})]})},Ce=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,s=e.message,a=e.variant,r=Object(j.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:s,variant:a,id:r}])}}))},n.newAddPost=function(e,t){var s=n.state.posts;return s.push(e),n.setState({posts:s})},n.setPosts=function(e,t){return n.setState({posts:e})},n.clearPosts=function(){return n.setState({posts:[]})},n.state={user:null,msgAlerts:[],posts:[]},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.msgAlerts,a=t.user,r=t.posts;return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(P,{user:a}),s.map((function(t){return Object(b.jsx)(x,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(b.jsxs)("main",{className:"container",children:[Object(b.jsx)(h.b,{path:"/sign-up",render:function(){return Object(b.jsx)(R,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(b.jsx)(h.b,{path:"/sign-in",render:function(){return Object(b.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(b.jsx)(g,{user:a,path:"/home",render:function(){return Object(b.jsx)(ye,{newAddPost:e.newAddPost,posts:r,setPosts:e.setPosts,clearPosts:e.clearPosts,msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(g,{user:a,path:"/sign-out",render:function(){return Object(b.jsx)(z,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(b.jsx)(g,{user:a,path:"/change-password",render:function(){return Object(b.jsx)(W,{msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(g,{user:a,path:"/create-post",render:function(){return Object(b.jsx)(ie,{newAddPost:e.newAddPost,posts:r,setPosts:e.setPosts,clearPosts:e.clearPosts,msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(g,{user:a,exact:!0,path:"/posts",render:function(){return Object(b.jsx)(oe,{posts:r,setPosts:e.setPosts,clearPosts:e.clearPosts,msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(g,{user:a,path:"/posts/:id/edit",render:function(){return Object(b.jsx)(de,{msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(g,{user:a,exact:!0,path:"/posts/:id",render:function(){return Object(b.jsx)(he,{posts:r,msgAlert:e.msgAlert,user:a})}}),Object(b.jsx)(g,{user:a,exact:!0,path:"/myposts",render:function(){return Object(b.jsx)(je,{msgAlert:e.msgAlert,user:a})}})]})]})}}]),s}(n.Component),Ne=Object(b.jsx)(y.a,{basename:"/Trip-Chasers-React",children:Object(b.jsx)(Ce,{})});c.a.render(Ne,document.getElementById("root"))},88:function(e,t,s){},97:function(e,t,s){}},[[119,1,2]]]);
//# sourceMappingURL=main.f45c04f0.chunk.js.map