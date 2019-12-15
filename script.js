
var i = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > i){
       // downscroll code
       i -= 1;
       console.log(i)
   } else {
      // upscroll code
      i += 1;
      console.log(i)
   }
   i = st;
});