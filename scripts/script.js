var gridSize = 16
var cubeSize = 468/(gridSize);
var black = true;
$(document).ready(function(){
  for(var x = 0; x <= gridSize-1; x++) {
    for(var i = 0; i <= gridSize-1; i++) {
      $(".container").append("<div class='sketch'></div>");
    //  $(".container").css("grid-template-columns","(" + gridSize + "," +
      //  cubeSize + "px");
      //$(".container").css("grid-template-rows" , "(" + gridSize + "," +
        //cubeSize + "px");

      $(".sketch").css("height",cubeSize);
      $(".sketch").css("width",cubeSize);


    };
  };
  $(".sketch").hover(function(){
    if (black) {
        $(this).css("background-color","black");
    } else {
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        $(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")")
    };
  });
  $("#color").click(function(){
    if(black){black = false;} else {black = true;}});
  $("#reset").click(function(){
    $(".sketch").css("background-color","white");
  });
});
