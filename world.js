window.onload = function (){
    // create a list of countries I have visited
    var visitedCountries = ["Mexico", "United States", "Canada", "Kenya", "Tanzania", "Croatia", 
                                "Greece", "Malaysia", "Japan", "Costa Rica", "Puerto Rico"]
    colorMap(visitedCountries, "slateblue")

    //list of my top 5 countries I want to visit next
    var futureTravel = ["Ireland", "Brazil", "South Africa", "Dominican Republic", "South Korea"]
    colorMap(futureTravel, "coral")
    
}

function colorMap(places, color) {
    var c = document.getElementById("worldMap").contentDocument;
    // iterate throughlist, filling
    //some countries have multiple elements, such as JP below. Need to solve that.
    var countries = []
    places.forEach(place => countries.push(c.getElementsByClassName(place)));

    console.log(countries)
    for (let i = 0; i < countries.length; i++){
        // need seocond loop because some countries have multiple parts
        for (country of countries[i]) { 
            ///console.log(country)
            country.setAttribute("style", "fill: " + color + ";"); 
        }
    }
}
