let data;
async function init(){
  
  //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000"
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.complaint_type}</h3>
                 <p>${complaint.borough}</p>
                 <p>${complaint.incident_zip}</p>
                 <p>${complaint.descriptor}</p>
            </div>`;
  }
  output.innerHTML = build;

}

