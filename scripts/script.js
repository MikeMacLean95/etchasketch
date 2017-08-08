var gridSize = 16
var cubeSize = 500/(gridSize);
var black = true;
$(document).ready(function(){

  // for loop to generate grid of cubes
  for(var x = 0; x <= gridSize-1; x++) {
    for(var i = 0; i <= gridSize-1; i++) {
      $(".container").append("<div class='sketch'></div>");
      $(".sketch").css("height",cubeSize);
      $(".sketch").css("width",cubeSize);
    };
  };

  //adds color to hover the else is the random color generator
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

  //buttons
  $("#color").click(function(){
    if(black){black = false;} else {black = true;}});
  $("#reset").click(function(){
    $(".sketch").css("background-color","white");
  });
});
