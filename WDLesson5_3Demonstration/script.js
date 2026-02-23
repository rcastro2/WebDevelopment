function generate(){
  let output = document.getElementById("output");
  let startX = document.getElementById("startX").value;
  let endX = document.getElementById("endX").value;

  let build = `<table border="1">`

  build += `<tr class="headings"><th>X</th><th>Y</th></tr>`
  for(let x = startX; x <= endX; x++){
    let y = x ** 2;
    build += `<tr class="data"><td>${x}</td><td>${y}</td></tr>`
  }
  build += `</table>`

  output.innerHTML = build;
}
