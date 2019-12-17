$(document).ready(function () {
   let controller = new ScrollMagic.Controller();

   let welcomeFade = ScrollMagic.Scene({
      triggerElement: ".welcomeDiv"
   })
      .setClassToggle(".welcomeDiv", "fade-out")
      .addTo(controller);

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

   function offsetAnchor() {
      if (location.hash.length !== 0) {
         window.scrollTo(window.scrollX, window.scrollY - 1000);
      };
   };

   $("#bioLink").click(offsetAnchor());

});
