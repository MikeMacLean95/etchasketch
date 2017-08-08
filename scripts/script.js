var gridSize = 16
var cubeSize = 468/(gridSize);

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
    $(this).css("background-color","black");
  });
  $("button").click(function(){
    $(".sketch").css("background-color","white");
  });
});
