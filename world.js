window.onload = function (){
    var visitedCountries = ["Greece"]
    var c = document.getElementById("worldMap").contentDocument;
    console.log(c)
    var cntry = c.getElementById("Greece");
    cntry.setAttribute("style", "fill: green;");
}
