window.onload = function (){
    // create a list of countries I have visited
    //visitedCountries()

    //list of my top 5 countries I want to visit next
    //futureTravel()
    
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
    colorMap(Object.keys(visitedCountries), "slateblue")
    addCountryEventListeners(visitedCountries);
}

function futureTravel() {
    var futureTravel = ["Ireland", "Brazil", "South Africa", "Dominican Republic", "South Korea"]
    colorMap(futureTravel, "coral")
}

function colorMap(places, color) {
    var c = document.getElementById("worldMap").contentDocument;
    // iterate throughlist, filling
    //some countries have multiple elements, such as JP below. Need to solve that.
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

 
function addCountryEventListeners(visitedCountries) {
    var c = document.getElementById("worldMap").contentDocument;
    for (var countryName in visitedCountries) {
        var countryInfo = visitedCountries[countryName];
        var countries = c.querySelectorAll("." + countryName);
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            addEventListener(country, countryInfo);
        }
    }

    function addEventListener(country, countryInfo) {
        country.addEventListener("mouseover", function(event) {
            console.log("mouseover event triggered for " + countryInfo);
            var tooltip = document.createElement("div");
            tooltip.setAttribute("class", "visitdesc");
            tooltip.innerHTML = countryInfo;
            visitdesc.style.position = "absolute"
            visitdesc.style.left = (event.clientX + 10) + "px";
            visitdesc.style.top = (event.clientY + 10) + "px";
            console.log(document.getElementById("map-container"))
            console.log(tooltip)
            document.getElementById("map-container").appendChild(tooltip);
            console.log(document.getElementById("map-container"))
        });
        country.addEventListener("mousemove", function(event) {
            var tooltip = document.getElementsByClassName("visitdescr")[0];
            visitdesc.style.left = (event.clientX + 10) + "px";
            visitdesc.style.top = (event.clientY + 10) + "px";
        });
        country.addEventListener("mouseout", function() {
            var tooltip = document.querySelector(".tooltip");
            if (tooltip) {
                tooltip.parentNode.removeChild(tooltip);
            }
        });
    }
}