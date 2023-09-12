(function ($) {
  "use strict";
  
  /* Hide Loading Overlay */
  setTimeout(() => {
    const hideTime = 500;
    $(".loading-overlay").animate({
      "opacity":0
    }, hideTime);
    setTimeout(() => {
      $(".loading-overlay").css({
        "display": "none",
        "pointer-events": "none"
      });
      
      /* AOS */
      AOS.init({
        once: true
      });
    }, hideTime);
  }, 1500);
  
  
  /* Navbar Fixed Top */
  $(window).bind("scroll", function(){
    var wys = $(window).scrollTop();
    if(wys > 300){
      $("nav.navbar").addClass("fixed-top fade-in");
      $("nav.navbar").removeClass("position-absolute top-0");
    } else {
      $("nav.navbar").removeClass("fixed-top fade-in");
      $("nav.navbar").addClass("position-absolute top-0");
    }
  });
  
  
  /* Filter room reset */
  $(window).bind("DOMContentLoaded", function(){
    filterRoom(0);
    filterService(0);
  });

  filterRoom(0);
  filterService(0);

  /* Filter Room Function */
  $("#filterRoom-all").bind("click", function(){
    filterRoom(0);
  });
  $("#filterRoom-popular").bind("click", function(){
    filterRoom("#popular");
  });
  $("#filterRoom-new").bind("click", function(){
    filterRoom("#new");
  });
  
  function filterRoom(selector){
    switch(selector){
      case 0:
        $(".room .thumbnail-box").removeClass("d-none");
        
        $("#filterRoom-all").addClass("active");
        $("#filterRoom-new").removeClass("active");
        $("#filterRoom-popular").removeClass("active");
        break;
      case "#popular":
        $(".room .thumbnail-box").addClass("d-none");
        $(".room .thumbnail-box#popular").removeClass("d-none");
        
        $("#filterRoom-all").removeClass("active");
        $("#filterRoom-new").removeClass("active");
        $("#filterRoom-popular").addClass("active");
        break;
      case "#new":
        $(".room .thumbnail-box").addClass("d-none");
        $(".room .thumbnail-box#new").removeClass("d-none");
        
        $("#filterRoom-all").removeClass("active");
        $("#filterRoom-new").addClass("active");
        $("#filterRoom-popular").removeClass("active");
        break;
    }
  }
  
  
  /* Filter Service Function */
  $("#filterService-all").bind("click", function(){
    filterService(0);
  });
  $("#filterService-food").bind("click", function(){
    filterService("#makanan");
  });
  $("#filterService-privatePlace").bind("click", function(){
    filterService("#santai");
  });
  
  function filterService(selector){
    switch(selector){
      case 0:
        $(".service .thumbnail-box").removeClass("d-none");
        
        $("#filterService-all").addClass("active");
        $("#filterService-food").removeClass("active");
        $("#filterService-privatePlace").removeClass("active");
        break;
      case "#santai":
        $(".service .thumbnail-box").addClass("d-none");
        $(".service .thumbnail-box#santai").removeClass("d-none");
        
        $("#filterService-all").removeClass("active");
        $("#filterService-food").removeClass("active");
        $("#filterService-privatePlace").addClass("active");
        break;
      case "#makanan":
        $(".service .thumbnail-box").addClass("d-none");
        $(".service .thumbnail-box#makanan").removeClass("d-none");
        
        $("#filterService-all").removeClass("active");
        $("#filterService-food").addClass("active");
        $("#filterService-privatePlace").removeClass("active");
        break;
    }
  }
  
  const lazyObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-lazy-src");
      }
    });
  });
  
  const imgElement = document.querySelectorAll("img");
  imgElement.forEach((el) => {
    const dataSrc = el.getAttribute("src");
    $(el).attr("data-lazy-src", dataSrc);
    $(el).attr("src","images/ajax-loader.gif");
    lazyObs.observe(el);
  });
  

  
})(window.jQuery);