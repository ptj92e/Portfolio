let welcome = $("#welcome");
let bioDiv = $(".bioDiv");
let portfolioDiv = $(".portfolioDiv");
let contactDiv = $(".contactDiv");

var i = 100;
$(window).scroll(function (event) {
   var st = $(this).scrollTop();
   console.log(st);
   if (st < i) {
      // downscroll code
      console.log("down")
      welcome.removeAttr("hidden", "true");
      welcome.attr("class", "container pl-0 pr-0 img-container animated fadeInUp");
   } else if (st > i) {
      // upscroll code
      console.log("up");
      welcome.attr("class", "container pl-0 pr-0 img-container animated fadeOutUp");
      //welcome.attr("hidden", "true");
   };
});