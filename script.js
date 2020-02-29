$(document).ready(function () {
   let controller = new ScrollMagic.Controller();

   let welcomeFade = ScrollMagic.Scene({
      triggerElement: ".welcomeDiv"
   })
      .setClassToggle(".welcomeDiv", "fade-out")
      .addTo(controller);

   let bioFade = new ScrollMagic.Scene({
      triggerElement: ".summaryDiv"
   })
      .setClassToggle(".summaryDiv", "fade-in")
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
