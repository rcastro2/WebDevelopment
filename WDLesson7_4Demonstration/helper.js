// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lat, lon){
  //alert(location);
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

  let marker = L.marker(location).addTo(map);// places marker on map
}

// card() accepts JSON of one complaint and returns a card for the complaint
function card( complaint ){ 

  let location = [complaint.latitude, complaint.longitude];
  let build = `<div class="card fitted">
              <h3>${complaint.complaint_type}</h3>
              <h5>${complaint.borough}</h5>
              <p>${complaint.incident_zip}</p>
              <p>${complaint.descriptor}</p><hr>
              <p>${complaint.agency_name}<br>(${complaint.status})</p>
              <input type="button" onclick="showMap( ${location} )" value="Map">
        </div>`;
  return build;
}




