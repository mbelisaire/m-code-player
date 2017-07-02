$( document ).ready(function() {

  $(".nav-item").click(function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });



});
