import{N as i,A as n,a as s,S as p}from"./swiper-bundle.min-802c5991.js";import{b as r,g as l}from"./helpers-0bb72b7a.js";function y(e){const o=r(e),a=l(e),t=u(o,a);return()=>t.destroy()}function u(e,o){const{options:a}=o,t={modules:[i,n,s],a11y:a.a11y,slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:e.next,prevEl:e.prev},breakpoints:{640:{slidesPerView:2,spaceBetween:40}}};return a.autoplay&&a.autoplaySpeed&&(t.autoplay={delay:a.autoplaySpeed}),new p(e.slider,t)}export{y as default};
