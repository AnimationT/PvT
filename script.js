var pewdNumVal = 65767834;
var tSerNumVal = 60074196;

setTimeout(function(){
    $("#pewdNumb").text(pewdNumVal);
    $("#tSeriesNumb").text(tSerNumVal);
}, 500);



function choosePewd(){
  window.location = "/pewdiepie.html";
}

function chooseTSer(){
    window.location = "/t-series.html";
}
