$( document ).ready(function() {
  $(".nav-item").click(function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  var oldHtml = "";
  $("#htmlArea").on("change keyup paste", function() {
    var newHtml = $(this).val();
    if(oldHtml == newHtml) {
      return;
    }
    oldHtml = newHtml;
    $("#outputArea").contents().find("body").html(newHtml);
  });

  $("#cssArea").on("change keyup paste", function() {

    $("#outputArea").contents().find("head").html("<style>" + $(this).val() + "</style>");
  });

});
