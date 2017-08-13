var gridSize = 16
var cubeSize = 500/(gridSize);
var colorTile = 1;


function gridGen(gridSize) {
  $(".grid").remove();
  $(".info").prepend("<p class=grid>" + gridSize + " by " + gridSize + "</p>");
  cubeSize = 500/gridSize;
  for(var x = 0; x <= gridSize-1; x++) {
    for(var i = 0; i <= gridSize-1; i++) {
      $(".container").append("<div class='sketch' data-count='0'></div>");
      $(".sketch").css("height",cubeSize);
      $(".sketch").css("width",cubeSize);
    };
  };
};

function incrementalDark(clAss) {
  var alpha =  ($(clAss).data("count"));
  alpha += 0.1;
  ($(clAss).data("count",alpha));
  $(clAss).css("background-color", "rgba(0,0,0," + alpha + ")");
};


function hoverChange() {
  $(".sketch").mouseenter(function(){



    if (colorTile === 1) {
        $(this).css("background-color","black");

    } else if (colorTile === 2) {
  // This is the random color generator


        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        $(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")")
    } else {
  //This increases darkness of black by 10%


        incrementalDark(this);
    };
  });

}

function clear () {
  $(".sketch").css("background-color","white");
};

function gridPrompt(){
  gridSize = prompt("Enter Number of Cubes in a Row:");
  clear();
  $(".sketch").remove();
  gridGen(gridSize);
  hoverChange();
};

function colorCheck() {
  if (colorTile === 1) {
    $(".c").remove();
    $(".info").append("<p class=c> Color: Black </p>");
  } else if (colorTile === 2) {
    $(".c").remove();
    $(".info").append("<p class=c> Color: Random Color </p>");
  } else {
    $(".c").remove();
    $(".info").append("<p class=c> Color: Incremental Black </p>");
  };
};

$(document).ready(function(){

  // for loop to generate grid of cubes
  gridGen(gridSize);
  //adds color to hover colorTIle 1 is standard black
  hoverChange();
  //buttons
  colorCheck();
  $("#color").click(function(){
    if(colorTile === 1){
      colorTile = 2;
      colorCheck();
    } else if (colorTile === 2){
      colorTile = 3;
      colorCheck();
    } else if (colorTile === 3){
      colorTile = 1;
      colorCheck();
    }});
  $("#reset").click(function(){
    clear();
  });
});
