$( document ).ready(function() {
  $(".nav-item").click(function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    switch ($(this).attr("id")) {
      case "htmlLink":
        $("#htmlArea").toggle();
        break;
      case "cssLink":
        $("#cssArea").toggle();
        break;
      case "jsLink":
        $("#jsArea").toggle();
        break;
      case "outputLink":
        $("#outputArea").toggle();
        break;
      default:

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

  $("#jsArea").on("change keyup paste", function() {
    var bodyHtml = $("#outputArea").contents().find("body").html();
    $("#outputArea").contents().find("body").html(bodyHtml + "<script type='text/javascript'>" + $(this).val() + "</script>");
  });

});
