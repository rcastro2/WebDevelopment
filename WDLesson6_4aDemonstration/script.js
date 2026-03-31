let data;
async function init(){
  
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/countries.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "Data Retrieved.  Use console to explore the information contain in data.";


  output.innerHTML = build;

}

