// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// showMap() displays the the location at [lat, lon] in the container with id "map"
function showMap(lat,lon){
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  // places marker on map
  let marker = L.marker(location).addTo(map);
  // builds HTML to display on the marker
  let build = `<div>
                  <h2>Title</h2>
                  <img src="sample.webp" style="width:100%">
                  <hr>
                  <a href="https://leafletjs.com/examples/quick-start/" target="_blank">
                      Leaflet
                  </a>
              </div>`
  // Displays the HTML in build when the user clicks on the marker
  marker.bindPopup(build).openPopup();
 
}

