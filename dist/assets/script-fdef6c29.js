import{b as s}from"./helpers-0bb72b7a.js";function r(t){const e=s(t,!1,{iframe:"iframe"});e.playButton.addEventListener("click",a,{once:!0});function a(){e.iframe.addEventListener("load",i,{once:!0}),e.iframe.setAttribute("src",e.iframe.getAttribute("src")),e.videoPlayer.dataset.state="isLoading"}function i(){e.videoPlayer.dataset.state="isLoaded",e.posterImage.dataset.state="isHidden"}}export{r as default};
