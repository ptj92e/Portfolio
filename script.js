$(document).ready(function () {
   let welcomeDiv = $("#welcome");
   let bioDiv = $(".bioDiv");
   let portfolioDiv = $(".portfolioDiv");
   let contactDiv = $(".contactDiv");
   
   let controller = new ScrollMagic.Controller();

   let bioFade = new ScrollMagic.Scene({
      triggerElement: ".bioDiv"
   })
   .setClassToggle(".bioDiv", "fade-in")
   .addTo(controller);

   let portfolioFade = new ScrollMagic.Scene({
      triggerElement: ".portfolioDiv"
   })
   .setClassToggle(".portfolioDiv", "fade-in")
   .addTo(controller);

   let contactFade = new ScrollMagic.Scene({
      triggerElement: ".contactDiv"
   })
   .setClassToggle(".contactDiv", "fade-in")
   .addTo(controller);
});
