var gridSize = 16
var cubeSize = 500/(gridSize);
var colorTile = 3;


function gridGen(gridSize) {
  cubeSize = 500/gridSize;
  for(var x = 0; x <= gridSize-1; x++) {
    for(var i = 0; i <= gridSize-1; i++) {
      $(".container").append("<div class='sketch' data-count='0'></div>");
      $(".sketch").css("height",cubeSize);
      $(".sketch").css("width",cubeSize);
    };
  };
};

function incrementalDark(clAss, alpha) {


  $(clAss).css("background-color", "rgba(0,0,0," + alpha/10 + ")");
  console.log(alpha);

};


function hoverChange() {
  $(".sketch").mouseenter(function(){

    console.log(count);
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

          incrementalDark(this, count);

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



$(document).ready(function(){

  // for loop to generate grid of cubes
  gridGen(gridSize);

  //adds color to hover colorTIle 1 is standard black
  hoverChange();
  //buttons
  $("#color").click(function(){
    if(colorTile === 1){
      colorTile = 2;
    } else if (colorTile === 2){
      colorTile = 1;
    } else if (colorTile === 3){
      colorTile = 1;
    }});
  $("#reset").click(function(){
    clear();
  });
});
