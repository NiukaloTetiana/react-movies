"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{1123:function(n,e,t){t.d(e,{a:function(){return c},Z:function(){return u}});var r,a=t(4137),i=t(168),o=t(7924).ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.backgNav})),s=t(184),c=function(){return(0,s.jsx)(o,{children:(0,s.jsx)(a.Z1,{visible:!0,height:"100",width:"100",color:"#ffc700",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""})})},u=c},115:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return O},default:function(){return L}});var r,a,i,o,s,c,u,f,p,h=t(9439),l=t(2791),d=t(7689),x=t(168),m=t(1087),g=t(7924),v=g.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n  margin-left: 5px;\n"]))),w=g.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  gap: 12px;\n  margin: 12px 0;\n"]))),Z=g.ZP.div(i||(i=(0,x.Z)(["\n  margin-left: 10px;\n"]))),b=(0,g.ZP)(m.OL)(o||(o=(0,x.Z)(["\n  display: flex;\n  align-items: flex-end;\n  margin: 10px 0;\n\n  font-size: 20px;\n  font-weight: 700;\n  color: ",";\n  text-shadow: ",";\n  transition: ",",\n    ",";\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.text}),(function(n){return n.theme.transition.trnz}),(function(n){return n.theme.transition.delay}),(function(n){return n.theme.colors.accent})),j=g.ZP.img(s||(s=(0,x.Z)(["\n  max-width: 250px;\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(4)})),y=g.ZP.h2(c||(c=(0,x.Z)(["\n  font-size: 30px;\n  color: ",";\n  text-shadow: ",";\n  margin-bottom: 15px;\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.shadows.text})),k=g.ZP.h3(u||(u=(0,x.Z)(["\n  font-size: 20px;\n  text-shadow: ",";\n  margin-bottom: 8px;\n"])),(function(n){return n.theme.shadows.text})),P=g.ZP.p(f||(f=(0,x.Z)(["\n  font-size: 16px;\n  max-width: 700px;\n\n  text-shadow: ",";\n  margin-bottom: 12px;\n"])),(function(n){return n.theme.shadows.text})),S=g.ZP.ul(p||(p=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n  font-size: 16px;\n  text-shadow: ",";\n"])),(function(n){return n.theme.shadows.text})),_=t(6987),U=t(1123),z=t(617),R=t(2094),C=t(184),O=function(){var n,e=(0,d.UO)().movieId,t=(0,l.useState)(""),r=(0,h.Z)(t,2),a=r[0],i=r[1],o=(0,d.TH)(),s=(0,l.useState)(!1),c=(0,h.Z)(s,2),u=c[0],f=c[1],p=(0,l.useRef)((null===(n=o.state)||void 0===n?void 0:n.from)||"/movies");if((0,l.useEffect)((function(){f(!0),(0,z.TP)(e).then(i).catch((function(n){return R.Am.error("Oops...Something went wrong: ".concat(n))})).finally((function(){return f(!1)}))}),[e]),a)return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(b,{to:p.current,children:[(0,C.jsx)(_.fcR,{}),"Go back."]}),u&&(0,C.jsx)(U.Z,{}),(0,C.jsxs)(w,{children:[(0,C.jsx)(j,{src:a.poster_path?"https://image.tmdb.org/t/p/w500/".concat(a.poster_path):"https://img.freepik.com/premium-photo/the-premiere-of-a-horror-movie-in-the-cinema-a-young-woman-watches-a-movie-in-fear-vertical-photo-one-person-in-the-cinema_307890-7327.jpg?w=360",width:250,alt:"poster"}),(0,C.jsxs)(Z,{children:[(0,C.jsx)(y,{children:a.title}),(0,C.jsxs)(k,{children:["Rating: ",Math.round(a.vote_average)]}),(0,C.jsx)(k,{children:"Overview"}),(0,C.jsx)(P,{children:a.overview}),(0,C.jsx)(k,{children:"Genres"}),(0,C.jsx)(S,{children:a.genres.map((function(n){return(0,C.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,C.jsxs)(v,{children:[(0,C.jsx)(b,{to:"cast",children:"Cast."}),(0,C.jsx)(b,{to:"reviews",children:"Reviews."})]}),(0,C.jsx)(d.j3,{})]})},L=O},617:function(n,e,t){t.d(e,{Df:function(){return s},Eb:function(){return f},Hu:function(){return p},Ph:function(){return c},TP:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),o=t(5294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"8aba4e3419a44727b7eb66f35fce4fa2",language:"en-US"}}),s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("trending/movie/day?language=en-US");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(e,"?language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(e,"/credits?language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("movie/".concat(e,"/reviews?language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=115.23a4ea7a.chunk.js.map