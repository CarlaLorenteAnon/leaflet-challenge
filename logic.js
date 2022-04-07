// Store our API endpoint as queryUrl.
//var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&endtime=2021-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
  //console.log(data);
  console.log(data.features);
  // Using the features array sent back in the API data, create a GeoJSON layer, and add it to the map.
  let earthquakeData = data.features;
  // 1.
  // Pass the features to a createFeatures() function:
  createFeatures(earthquakeData);
});
// 2.
function createFeatures(earthquakeData) {
  // make a function that binds the popups
  function onEachFeature(feature, layer)
  {
    layer.bindPopup(`<h2>${feature.properties.place}</h2>
                    <hr>
                    <p>${new Date(feature.properties.time)}</p>
                    <hr>
                    <b>Magnitude: </b> ${feature.properties.mag}`);
  }
  // this function picks colors for the circle data points
  function getColor(depth)
  {
      if (depth > 90)
        return "#FC0505"
      else if(depth > 80)
        return "#FC7905"
      else if(depth > 70)
        return "#FCC705"
      else if(depth > 50)
        return "#9EFC05"
      else
        return "#FCFC05"
  }
  // this function uses the magnitude to calculate the radius
  function getRadius(magnitude)
  {
      if (magnitude === 0)
        return 1;
      else
        return magnitude * 5;
  }
  // this function returns the style data based on the depth of the the earthquake
  function styleInfo(feature)
  {
      return {
        opacity: 1,
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: getColor(feature.geometry.coordinates[2]),
        radius: getRadius(feature.properties.mag),
        stroke: true
      };
  }
  // Save the earthquake data in a variable.
  // creates a GeoJSON layer that contains the features array
  var earthquakes = L.geoJSON(earthquakeData,
    {
        // turn each marker into a circle
        pointToLayer: function(feature, latlng){
            return L.circleMarker(latlng);
        },
        // to adjust the style for each circle marker, do the following:
        style: styleInfo,
        onEachFeature: onEachFeature
    });
  // Pass the earthquake data to a createMap() function.
  createMap(earthquakes);
}
// 3.
// createMap() takes the earthquake data and incorporates it into the visualization:
function createMap(earthquakes) {
  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };
  // Creat an overlays object.
  var overlays = {
    "Earthquakes": earthquakes
  }
  // Create a new map.
  // Edit the code to add the earthquake data to the layers.
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [street, earthquakes]
  });
  // Create a layer control that contains our baseMaps.
  // Be sure to add an overlay Layer that contains the earthquake GeoJSON.
  L.control.layers(baseMaps, overlays, {
    collapsed: false
  }).addTo(myMap);
}









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