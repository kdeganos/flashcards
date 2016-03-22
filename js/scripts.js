$(function(){
  $(".term").click(function() {
    $("#javaScript p").toggle("definition");
    $("#javaScript h3").toggle("disappear");
  });

  $(".definition").click(function() {
    $("#javaScript h3").toggle("disappear");
    $("#javaScript p").toggle("definition");
  });

  $(".term").click(function() {
    $("#operators p").toggle("definition");
    $("#operators h3").toggle("disappear");
  });

  $(".definition").click(function() {
    $("#operators h3").toggle("disappear");
    $("#operators p").toggle("definition");
  });

});
