
// // Store our API endpoint as queryUrl.
// //var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&endtime=2021-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// var boundariesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";
// // Perform a GET request to the query URL.
// d3.json(queryUrl).then(function (data) {
//   // Using the features array sent back in the API data, create a GeoJSON layer, and add it to the map.
//   let earthquakeData = data.features;
//   // 1.
//   // Pass the features to a createFeatures() function:
//   createFeatures(earthquakeData);
// });
// // 2.
// function createFeatures(earthquakeData) {
//   // make a function that binds the popups
//   function onEachFeature(feature, layer)
//   {
//     layer.bindPopup(`<h2>${feature.properties.place}</h2>
//                     <hr>
//                     <p>${new Date(feature.properties.time)}</p>
//                     <hr>
//                     <b>Magnitude: </b> ${feature.properties.mag}`);
//   }
//   // this function picks colors for the circle data points
//   function getColor(depth)
//   {
//       if (depth > 90)
//         return "#FC0505"
//       else if(depth > 80)
//         return "#FC7905"
//       else if(depth > 70)
//         return "#FCC705"
//       else if(depth > 50)
//         return "#9EFC05"
//       else
//         return "#FCFC05"
//   }
//   // this function uses the magnitude to calculate the radius
//   function getRadius(magnitude)
//   {
//       if (magnitude === 0)
//         return 1;
//       else
//         return magnitude * 5;
//   }
//   // this function returns the style data based on the depth of the the earthquake
//   function styleInfo(feature)
//   {
//       return {
//         opacity: 1,
//         fillColor: getColor(feature.geometry.coordinates[2]),
//         color: getColor(feature.geometry.coordinates[2]),
//         radius: getRadius(feature.properties.mag),
//         stroke: true
//       };
//   }
//   // Save the earthquake data in a variable.
//   // creates a GeoJSON layer that contains the features array
//   var earthquakes = L.geoJSON(earthquakeData,
//     {
//         // turn each marker into a circle
//         pointToLayer: function(feature, latlng){
//             return L.circleMarker(latlng);
//         },
//         // to adjust the style for each circle marker, do the following:
//         style: styleInfo,
//         onEachFeature: onEachFeature
//     });
//   // Pass the earthquake data to a createMap() function.
//   createMap(earthquakes);
// }
// // 3.
// // createMap() takes the earthquake data and incorporates it into the visualization:
// function createMap(earthquakes) {
//   // Create the base layers.
//   var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
//   var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
//   url2 = "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey="
//   var outdoors = L.tileLayer(url2 + API_KEY) // USE API KEY HERE!!!
//     // Create a baseMaps object.
//     var baseMaps = {
//         Street: street,
//         Topo: topo,
//         Outdoors: outdoors
//     };
//   // Creat an overlays object.
//   var overlays = {
//     "Earthquakes": earthquakes
//   }
//   // Create a new map.
//   // Edit the code to add the earthquake data to the layers.
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [street, earthquakes]
//   });

//     //    // Set up the legend
//     //    var legend = L.control({ position: "bottomright" });
//     //    legend.onAdd = function() {
//     //        var div = L.DomUtil.create("div", "info legend");
//     //        var magnitudes = [0, 1, 2, 3, 4, 5];
//     //        var labels = [];
//     //        var legendInfo = "<h5>Magnitude</h5>";
   
//     //        div.innerHTML = legendInfo;
   
//     //        // go through each magnitude item to label and color the legend
//     //        // push to labels array as list item
//     //        for (var i = 0; i < magnitudes.length; i++) {
//     //            labels.push('<li style="background-color:' + magColor(magnitudes[i] + 1) + '"> <span>' + magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '' : '+') + '</span></li>');
//     //        }
   
//     //        // add each label list item to the div under the <ul> tag
//     //        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
   
//     //        return div;
//     //    };
  
      
//   // Create a layer control that contains our baseMaps.
//   // Be sure to add an overlay Layer that contains the earthquake GeoJSON.
//   L.control.layers(baseMaps, overlays, {
//     collapsed: false
//   }).addTo(myMap);

//     // this function picks colors for the circle data points
//     function getColor2(depth)
//     {
//         if (depth > 90)
//           return "#FC0505"
//         else if(depth > 80)
//           return "#FC7905"
//         else if(depth > 70)
//           return "#FCC705"
//         else if(depth > 50)
//           return "#9EFC05"
//         else
//           return "#FCFC05"
//     }

//     // //Set Up Legend
//     // var legend = L.control({ position: "bottomright" });
//     // legend.onAdd = function() {
//     //     var div = L.DomUtil.create("div", "info legend"), 
//     //     depthLevels = [-10, 10, 30, 50, 70, 90];

//     //     div.innerHTML += "<h3>Depth</h3>"

//     //     for (var i = 0; i < depthLevels.length; i++) {
//     //         div.innerHTML +=
//     //             '<i style="background: ' + getColor2(depthLevels[i] + 1) + '"></i> ' +
//     //             depthLevels[i] + (depthLevels[i + 1] ? '&ndash;' + depthLevels[i + 1] + '<br>' : '+');
//     //     }
//     //     return div;
//     // };

//     // // Adding the legend to the map
//     // legend.addTo(myMap);

//     // add the Layer control

//     // add the legend to the map
//     let legend = L.control({
//     position: "bottomright"
//     });
//     // add the properties for the legend
//     legend.onAdd = function() {
//     // div for the legend to appear in the page
//     let div = L.DomUtil.create("div", "info legend");
//     console.log(div);
//     // set up the intervals
//     let intervals = [-10, 10, 30, 50, 70, 90];
//     // set the colors for the intervals
//     let colors = [
//         "green",
//         "#CAFC03",
//         "#FCAD03",
//         "#FC8403",
//         "#FC4903",
//         "red"
//     ];
//     // loop through the intervals and the colors and generate a label
//     // with a colored square for each interval
//     for(var i = 0; i < intervals.length; i++)
//     {
//         // inner html that sets the square for each interval and label
//         div.innerHTML += "<i style='background: "
//             + colors[i]
//             + "'></i>"
//             + intervals[i]
//             + (intervals[i + 1] ? "km &ndash;" + intervals[i + 1] + "km<br>" : "+");
//     }
//     return div;
//     };
//     // add the legend to the map
//     legend.addTo(myMap);

// }

// create the tile layers for the backgrounds of the map
var defaultMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
// grayscale layer
var grayscale = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});
// water color layer
var waterColor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});
// topography
let topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
// make a basemaps object
let basemaps = {
    GrayScale: grayscale,
    "Water Color": waterColor,
    "Topography": topoMap,
    Default: defaultMap
};
// make a map object
var myMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 5,
    layers: [grayscale, waterColor, topoMap, defaultMap]
});
// add the default map to the map
defaultMap.addTo(myMap);
// get the data for the tectonic plates and draw on the map
// variable to hold the tectonic plates layer
let tectonicplates = new L.layerGroup();
// call the api to get the info for the tectonic plates
d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json")
.then(function(plateData){
    // console log to make sure the data loaded
    // console.log(plateData);
    // load data using geoJson and add to the tectonic plates layer group
    L.geoJson(plateData,{
        // add styling to make the lines visible
        color: "yellow",
        weight: 1
    }).addTo(tectonicplates);
});
// add the tectonic plates to the map
tectonicplates.addTo(myMap);
// variable to hold the earthquake data layer
let earthquakes = new L.layerGroup();
// get the data for the earthquakes and populate the layergroup
// call the USGS GeoJson API
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson")
.then(
    function(earthquakeData){
        // console log to make sure the data loaded
        console.log(earthquakeData);
        // plot circles, where the radius is dependent on the magnitude
        // and the color is dependent on the depth
        // make a function that chooses the color of the data point
        function dataColor(depth){
            if (depth > 90)
                return "red";
            else if(depth > 70)
                return "#FC4903";
            else if(depth > 50)
                return "#FC8403";
            else if(depth > 30)
                return "#FCAD03";
            else if (depth > 10)
                return "#CAFC03";
            else
                return "green";
        }
        // make a function that determines the size of the radius
        function radiusSize(mag){
            if (mag == 0)
                return 1; // makes sure that a 0 mag earthquake shows up
            else
                return mag * 5; // makes sure that the circle is pronounced in the map
        }
        // add on to the style for each data point
        function dataStyle(feature)
        {
            return {
                opacity: 0.5,
                fillOpacity: 0.5,
                fillColor: dataColor(feature.geometry.coordinates[2]), // use index 2 for the depth
                color: "000000", // black outline
                radius: radiusSize(feature.properties.mag), // grabs the magnitude
                weight: 0.5,
                stroke: true
            }
        }
        // add the GeoJson Data to the earthquake layer group
        L.geoJson(earthquakeData, {
            // make each feature a marker that is on the map, each marker is a circle
            pointToLayer: function(feature, latLng) {
                return L.circleMarker(latLng);
            },
            // set the style for each marker
            style: dataStyle, // calls the data style function and passes in the earthquake data
            // add popups
            onEachFeature: function(feature, layer){
                layer.bindPopup(`Magnitude: <b>${feature.properties.mag}</b><br>
                                Depth: <b>${feature.geometry.coordinates[2]}</b><br>
                                Location: <b>${feature.properties.place}</b>`);
            }
        }).addTo(earthquakes);
        earthquakes.addTo(myMap);
    }
);
// add the earthquake layer to the map
// add the overlay for the tectonic plates and for the earthquakes
let overlays = {
    "Tectonic Plates": tectonicplates,
    "Earthquake Data": earthquakes
};
// add the Layer control
L.control
    .layers(basemaps, overlays)
    .addTo(myMap);
// add the legend to the map
let legend = L.control({
    position: "bottomright"
});
// add the properties for the legend
legend.onAdd = function() {
    // div for the legend to appear in the page
    let div = L.DomUtil.create("div", "info legend");
    console.log(div);
    // set up the intervals
    let intervals = [-10, 10, 30, 50, 70, 90];
    // set the colors for the intervals
    let colors = [
        "green",
        "#CAFC03",
        "#FCAD03",
        "#FC8403",
        "#FC4903",
        "red"
    ];
    // loop through the intervals and the colors and generate a label
    // with a colored square for each interval
    for(var i = 0; i < intervals.length; i++)
    {
        // inner html that sets the square for each interval and label
        div.innerHTML += `<i style="background: ${colors[i]}"></i>${intervals[i]}${(intervals[i+1] ? "km &ndash;" + intervals[i+1] + "km<br>" : "km+")}`
            // + colors[i]
            // + "'></i>"
            // + intervals[i]
            // + (intervals[i + 1] ? "km &ndash;" + intervals[i + 1] + "km<br>" : "+");
    }
    return div;
};
// add the legend to the map
legend.addTo(myMap);









// // Store our API endpoint as queryUrl.
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// var boundariesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// // Perform a GET request to the query URL/
// d3.json(queryUrl).then(function (data) {
//     // Once we get a response, send the data.features object to the createFeatures function.
//     let earthquakeData = data.features;
//     // Pass the features to a createFeatures() function:
//     createFeatures(earthquakeData);
// });

// function createFeatures(earthquakeData) {

//     // Define a function that we want to run once for each feature in the features array.
//     // Give each feature a popup that describes the place and time of the earthquake.
//     function onEachFeature(feature, layer)
//     {
//       layer.bindPopup(`<h2>${feature.properties.place}</h2>
//                       <hr>
//                       <p>${new Date(feature.properties.time)}</p>
//                       <hr>
//                       <b>Magnitude: </b> ${feature.properties.mag}`);
//     }

//     // this function picks colors for the circle data points
//     function getColor(depth)
//     {
//         if (depth > 90)
//             return "#FC0505"
//         else if(depth > 80)
//             return "#FC7905"
//         else if(depth > 70)
//             return "#FCC705"
//         else if(depth > 50)
//             return "#9EFC05"
//         else
//             return "#FCFC05"
//     }

//     // this function uses the magnitude to calculate the radius
//     function getRadius(magnitude)
//     {
//         if (magnitude === 0)
//             return 1;
//         else
//             return magnitude * 5;
//     }
//     // this function returns the style data based on the depth of the the earthquake
//     function styleInfo(feature)
//     {
//         return {
//             opacity: 1,
//             fillColor: getColor(feature.geometry.coordinates[2]),
//             color: getColor(feature.geometry.coordinates[2]),
//             radius: getRadius(feature.properties.mag),
//             stroke: true
//         };
//     }
//      // Save the earthquake data in a variable.
//     // creates a GeoJSON layer that contains the features array
//     var earthquakes = L.geoJSON(earthquakeData,
//     {
//         // turn each marker into a circle
//         pointToLayer: function(feature, latlng){
//             return L.circleMarker(latlng);
//         },
//         // to adjust the style for each circle marker, do the following:
//         style: styleInfo,
//         onEachFeature: onEachFeature
//     });
//     // Pass the earthquake data to a createMap() function.
//     createMap(earthquakes);
// }

// function createMap(earthquakes) {

//     var satellite = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     })
//     var grayscale = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     });
//     var outdoors = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     });

//     // var satellite = L.tileLayer("https://tiles.wmflabs.org/bw-mapnik/${z}/${x}/${y}.png", {
//     //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     // })
//     // var grayscale = L.tileLayer("https://tiles.wmflabs.org/bw-mapnik/${z}/${x}/${y}.png", {
//     //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     // })
//     // var outdoors = L.tileLayer("https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png", {
//     //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     // })

//     var baseMaps = {
//         Satellite: satellite,
//         Grayscale: grayscale,
//         Outdoors: outdoors
//     };

//     var overlayMaps = {
//         TectonicPlates: tectonic,
//         Earthquakes: earthquakes 
//     };

//     var myMap = L.map("map", {
//         center: [46.2276, 2.2137],
//         zoom: 6,
//         layers: [satellite, tectonic,earthquakes]
//     });

//     L.control.layers(baseMaps, overlayMaps, {
//         collapsed: false
//     }).addTo(myMap);

//     // Set Up Legend
//     var legend = L.control({ position: "bottomright" });
//     legend.onAdd = function() {
//         var div = L.DomUtil.create("div", "info legend"), 
//         depthLevels = [-10, 10, 30, 50, 70, 90];

//         div.innerHTML += "<h3>Depth</h3>"

//         for (var i = 0; i < depthLevels.length; i++) {
//             div.innerHTML +=
//                 '<i style="background: ' + chooseColor(depthLevels[i] + 1) + '"></i> ' +
//                 depthLevels[i] + (depthLevels[i + 1] ? '&ndash;' + depthLevels[i + 1] + '<br>' : '+');
//         }
//         return div;
//     };

//     // Adding the legend to the map
//     legend.addTo(myMap);
// }