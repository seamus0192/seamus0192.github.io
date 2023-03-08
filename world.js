window.onload = function (){
    var visitedCountries = ["Greece"]
    var c = document.getElementById("worldMap").contentDocument;
    var ids = c.querySelectorAll('[id]');
    console.log(ids)
    var cntry = c.getElementById("JP");
    cntry.setAttribute("style", "fill: green;");
}
