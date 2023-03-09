window.onload = function (){
    // create a list of country id's I have visited
    var visitedCountries = ["JP"]
    var c = document.getElementById("worldMap").contentDocument;
    var ids = c.querySelectorAll('[id]');
    console.log(ids)
    // iterate throughlist, filling
    //some countries have multiple elements, such as JP below. Need to solve that.
    var cntry = c.getElementById(visitedCountries);
    cntry.setAttribute("style", "fill: green;");
}
