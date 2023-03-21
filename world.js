window.onload = function (){
    // nothing currently... 
}

function visitedCountries() {
    var visitedCountries = {"Mexico":"Visited Multiple times! have been to Tijuana, Guadalajara, Baja California, and the Yucatan.", 
    "United States":"Live Here! Been to Oregon, Washington, Califonria, Nevada, Colorado, Arizona, Montana, Florida, New York, and Massachussets", 
    "Canada":"Visited Summer ! Got to stay in Calgary and backpack through the beautiful nature.", 
    "Kenya":"Visited Summer! Stayed in Nairobi for a while and got to go on a safari.", 
    "Tanzania":"Visited Summe ! Stayed in Zanzibar, spent lots of time at the amazing clear beaches.", 
    "Croatia":"Visited Summer 2021! Got to see Dubrovnik, Hvar, and Korčula.",   
    "Greece":"Visited Summer 2021! Explored Athens and Delphi.", 
    "Malaysia":"Visited Summer ! Stayed in Kuala Lumpur and then travelled through the eastern part of the country.", 
    "Japan":"Visited briefly Summer! Spent a day in Kyoto. Need to go back!", 
    "Costa Rica":"Visited Summer ! Stayed in San Jose and traveled throughout the west coast.", 
    "Puerto Rico":"Visited Winter 2019! Saw most of the island, spent most time in Old San Juan."}
    colorMap(Object.keys(visitedCountries), "slateblue");
    addCountryDesc(visitedCountries);
    if (!document.getElementById("hovertip")) { //so a new tip is not created if tip is already showing
        var tip = document.createElement("div");
        tip.innerHTML = "(Hover over visited countries for brief descriptions!)";
        tip.setAttribute("style","text-align: center; padding-bottom: 15px; text-size: smaller;")
        tip.setAttribute("id", "hovertip")
        document.getElementById("travellog").appendChild(tip);
    }
}

function futureTravel() {
    var futureTravel = ["Ireland", "Brazil", "South Africa", "Dominican Republic", "South Korea"];
    colorMap(futureTravel, "firebrick");
}

function colorMap(places, color) {
    var c = document.getElementById("worldMap").contentDocument;
    // iterate throughlist, filling each element
    var countries = []
    places.forEach(place => countries.push(c.getElementsByClassName(place)));
    for (let i = 0; i < countries.length; i++){
        // need seocond loop because some countries have multiple parts
        for (country of countries[i]) { 
            ///console.log(country)
            country.setAttribute("style", "fill: " + color + ";"); 
        }
    }
}

function addCountryDesc(visitedCountries) {
    var c = document.getElementById("worldMap").contentDocument;
    for (var countryName in visitedCountries) {
        var countryInfo = visitedCountries[countryName];
        var countries = c.querySelectorAll("." + countryName);
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            country.setAttribute("title", countryInfo)
            //console.log(country)
        }
    }
}

// function addCountryEventListeners(visitedCountries) {
//     var c = document.getElementById("worldMap").contentDocument;
//     for (var countryName in visitedCountries) {
//         var countryInfo = visitedCountries[countryName];
//         var countries = c.querySelectorAll("." + countryName);
//         for (var i = 0; i < countries.length; i++) {
//             var country = countries[i];
//             console.log(country)
//             country.addEventListener("mouseover", function(event) {
//                 console.log("mouseover event triggered for " + countryName);
//                 var tooltip = document.createElement("div");
//                 tooltip.setAttribute("class", "tooltip");
//                 tooltip.innerHTML = countryInfo;
//                 tooltip.style.left = (event.clientX) + "px";
//                 tooltip.style.top = (event.clientY) + "px";
//                 console.log("tooltip created:", tooltip);
//                 country.parentNode.appendChild(tooltip);
//             });
//             country.addEventListener("mouseout", function() {
//                 var tooltip = document.getElementById("tooltip");
//                 if (tooltip) {
//                     tooltip.parentNode.removeChild(tooltip);
//                 }
//             });
//         }
//     }
//   }