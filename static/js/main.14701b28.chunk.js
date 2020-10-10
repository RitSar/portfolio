(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{19:function(e,a,t){},39:function(e,a,t){e.exports=t(56)},44:function(e,a,t){},45:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),s=t(18),i=(t(44),["btn--primary","btn--outline","btn--test"]),o=["btn--medium","btn--large"],m=function(e){var a=e.children,t=e.type,n=e.buttonStyle,l=e.buttonSize,c=e.link,s=i.includes(n)?n:i[0],m=o.includes(l)?l:o[0];return r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(m),type:t},a))},u=t(10);t(45);var d=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),i=Object(s.a)(c,2),o=i[0],d=i[1],h=function(){return l(!1)},p=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(u.b,{to:"/",className:"navbar-logo",onClick:h},"Rittik_Sarkar"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return l(!t)}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/",className:"nav-links",onClick:h},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/about",className:"nav-links",onClick:h},"About me")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{to:"/contact",className:"nav-links",onClick:h},"Contact me")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing",className:"nav-links-mobile",target:"_blank",rel:"noopener noreferrer",onClick:h},"R\xe9sum\xe9"))),o&&r.a.createElement(m,{buttonStyle:"btn--outline",link:"https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"},"R\xe9sum\xe9"))))},h=(t(19),t(51),t(77)),p=t(86),b=t(81),E=t(85),g=t(83),f=t(82),v=t(79),y=t(84),k=t(34),N=t(80),w=Object(h.a)({root:{maxWidth:320}}),S=Object(k.a)({palette:{type:"dark",primary:{main:"#818181"},background:{paper:"#242424"}},typography:{fontFamily:["Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans"].join(",")}});function j(e){var a,t,n=w();return a="none"===e.web?null:r.a.createElement(v.a,{size:"small",color:"primary"},r.a.createElement("a",{href:e.web,target:"_blank",rel:"noopener noreferrer"},"Go to website")),t="none"===e.github?null:r.a.createElement(v.a,{size:"small",color:"primary"},r.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"View code")),r.a.createElement("div",{className:"cardBox"},r.a.createElement(N.a,{theme:S},r.a.createElement(p.a,{className:n.root},r.a.createElement(b.a,null,r.a.createElement(f.a,{component:"img",alt:"Project",height:"170",image:e.src,title:"Project image"}),r.a.createElement(g.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h6",component:"h3"},e.title),r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},e.text))),r.a.createElement(E.a,null,a,t))))}var C=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"These are some of my projects"),r.a.createElement("div",{className:"cards__container"},r.a.createElement(j,{src:"images/check-list.jpg",title:"Checklist *",text:"A to-do list application with a database on Mongo DB Atlas based on AWS cloud. Basic CRUD operations are used to interact with the database with the help of mongoose and is accessed through EJS view engine and body-parser. Lodash modular utlities are used for casing URLs and custom SVGs are used for icons.",web:"https://ritsar-checklist.herokuapp.com/",github:"https://github.com/RitSar/Check-list"}),r.a.createElement(j,{src:"images/covid-letter.jpg",title:"The Covid Letter",text:"A web app displaying statistical data of Covid-19 with the help of express as backend. Data is fetched from rapidAPI and John Hopkins University APIs, served using body-parser and graphs are plotted using chart-js. It has a newsletter function built with Mailchimp API and is also my first backend project.",web:"https://limitless-woodland-73918.herokuapp.com/",github:"https://github.com/RitSar/The-Covid-Letter"}),r.a.createElement(j,{src:"images/secrets.jpg",title:"Secrets",web:"https://secrets-express.glitch.me/",github:"https://github.com/RitSar/secrets-express",text:"Secrets is a web application focused on user authentication where users can anonymously post a secret. Passwords were stored after AES-256-CBC encryption, later upgaraded to multiple rounds of salting and hashing. OAuth through Google and Facebook are other methods of registration and sessions are stored in cookies."}),r.a.createElement(j,{src:"images/daily-journal-blog.jpg",title:"Daily Journal Blog *",web:"https://daily-journal.glitch.me/",github:"https://github.com/RitSar/blog-mongo",text:"A blog application based on express and mongoDB, composed posts are published to home page after being saved on the cloud database."}),r.a.createElement(j,{src:"images/portfolio.jpg",title:"This portfolio",web:"none",github:"code",text:"My portfolio is a front-end project developed with react and hosted on github pages. The contact form is connected via webhooks and messages are stored in a spreadsheet."}),r.a.createElement(j,{src:"images/keeper.jpg",title:"Keeper *",web:"https://ritsar-keeper.netlify.app/",github:"https://github.com/RitSar/Keeper",text:"Keeper is an attempt at a Google Keep clone made with react and jsx. This is a demo version without a database and authentication system."}),r.a.createElement(j,{src:"images/NFK.jpg",title:"Need for Kart",web:"https://connect.unity.com/mg/karting/nfk-the-rainbow-man",github:"none",text:"NFK is a Unity3d WebGL game I made in a Unity game jam. It is a kart racing game with checkpoint and lap race modes and is made with free assests."}),r.a.createElement(j,{src:"images/rest.png",title:"ritsar-api",web:"none",github:"https://github.com/RitSar/REST_API",text:"This is a RESTful API which supports get, post, put, patch and delete requests, through which a user can access, modify, publish or delete one or multiple articles."})),r.a.createElement("p",{className:"marg"},"* these projects are a demo version without user authentication for easier view access"))};t(52);var I=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("div",{className:"hero-text"},r.a.createElement("h1",null,"Hey there."),r.a.createElement("h2",null,"I'm Rittik Sarkar"),r.a.createElement("p",null,"I am a MERN stack developer with rich experience in web development (with occasional designing), currently an undergraduate working as a freelance web developer. I believe in minimalistic designs and efficient code and try my best to follow these practices."),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",link:"/contact"},"Contact me"),r.a.createElement(m,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",link:"https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"},"Grab a copy of my r\xe9sum\xe9"))))};t(53),t(54);var x=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"item"},r.a.createElement("p",null,e.name)))};function O(){return r.a.createElement("div",{className:"skillWrapper"},r.a.createElement("div",{className:"skillContainer"},r.a.createElement("h1",null,"My suitcase of skills contains"),r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,"Web Development")),r.a.createElement("div",{className:"skillItems"},r.a.createElement(x,{name:"React"}),r.a.createElement(x,{name:"Express"}),r.a.createElement(x,{name:"Mongo DB"}),r.a.createElement(x,{name:"Node JS"}),r.a.createElement(x,{name:"EJS"}),r.a.createElement(x,{name:"Bootstrap"}),r.a.createElement(x,{name:"Chart JS"}),r.a.createElement(x,{name:"REST API"}),r.a.createElement(x,{name:"Javasript"}),r.a.createElement(x,{name:"JQuery"}),r.a.createElement(x,{name:"Sass"}),r.a.createElement(x,{name:"Django"}),r.a.createElement(x,{name:"Babel"}),r.a.createElement(x,{name:"Webkit"}),r.a.createElement(x,{name:"OAuth"}),r.a.createElement(x,{name:"Material-UI"}),r.a.createElement(x,{name:"Web Authentication and Security"})),r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,"General Programming")),r.a.createElement("div",{className:"skillItems"},r.a.createElement(x,{name:"C"}),r.a.createElement(x,{name:"C++"}),r.a.createElement(x,{name:"OpenCV"}),r.a.createElement(x,{name:"OpenGL"}),r.a.createElement(x,{name:"Data Structures"}),r.a.createElement(x,{name:"Algorithms"}),r.a.createElement(x,{name:"C#"})),r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,"Other Tools and Frameworks")),r.a.createElement("div",{className:"skillItems"},r.a.createElement(x,{name:"Blender"}),r.a.createElement(x,{name:"Unity 3D"}),r.a.createElement(x,{name:"GIMP"}),r.a.createElement(x,{name:"Inkscape"}),r.a.createElement(x,{name:"Git/Github"}),r.a.createElement(x,{name:"Bash"}),r.a.createElement(x,{name:"Adobe XD"}),r.a.createElement(x,{name:"Adobe Photoshop"}))))}t(55);var A=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),o=i[0],d=i[1];return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"Contact Me"),r.a.createElement("p",{className:"footer-subscription-text"},"Simply leave a message here;"),r.a.createElement("div",{className:"input-areas"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://hooks.zapier.com/hooks/catch/8682847/ogivnfu/",{method:"POST",body:JSON.stringify({email:t,message:o})}).then((function(){return alert("Thank you, your message has been saved successfully.")})).catch((function(){return alert("There was an error, please try again")}))}},r.a.createElement("label",{htmlFor:"email"},r.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement("label",{htmlFor:"message"},r.a.createElement("textarea",{className:"footer-input message",rows:"2",name:"message",type:"text",placeholder:"Your message",value:o,onChange:function(e){return d(e.target.value)}}),r.a.createElement(m,{buttonStyle:"btn--outline",className:"sendButton",type:"submit"},r.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"}),"Send"))))),r.a.createElement("p",{className:"footer-subscription-text"},"or, let's connect through:"),r.a.createElement("section",{className:"social-media"},r.a.createElement("div",{className:"social-media-wrap"},r.a.createElement("div",{className:"social-icons"},r.a.createElement(u.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement(u.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement(u.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},r.a.createElement("i",{className:"fab fa-youtube"})),r.a.createElement(u.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement(u.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},r.a.createElement("i",{className:"fab fa-linkedin"}))))),r.a.createElement("small",null,"Made by Rittik Sarkar with React"))};var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement("div",{className:"bodyContainer"},r.a.createElement(C,null),r.a.createElement(O,null),r.a.createElement(A,null)))},M=t(5);function R(){return r.a.createElement("div",{className:"contactPage"},r.a.createElement(A,null))}function T(){return r.a.createElement("div",{className:"aboutPage"},r.a.createElement("div",{className:"hero-container"},r.a.createElement("div",{className:"hero-text"},r.a.createElement("h1",null,"Hello again!"),r.a.createElement("h2",null,"I am Rittik Sarkar"),r.a.createElement("p",null,"As mentioned before I am a MERN stack developer, and I enjoy designing and developing web applications. I am a third year student of IIIT Agartala and technical secretatary to EBSB club of the institute. I like spending my free time watching movies, documentaries, playing and developing video-games and solving brainstorming puzzles. I have been an ACM member since 2019 and follow their technology articles regularly to keep myself updated."),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",link:"/contact"},"Contact me"),r.a.createElement(m,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",link:"https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"},"Grab a copy of my resume")))),r.a.createElement(A,null))}var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(d,null),r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/",exact:!0,component:G}),r.a.createElement(M.a,{path:"/about",component:T}),r.a.createElement(M.a,{path:"/contact",component:R}))))};c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.14701b28.chunk.js.map