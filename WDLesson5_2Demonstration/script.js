function example1(){
  let output = document.getElementById("output");
  
  let build = "";
  for(let i = 0; i < 10; i++){
    build += `<div class="card flash">`
    build += `  <h3> Title </h3>`
    build += `  <img src = "smile.png">`
    build += `  <p> ~~~~~~~~<br>~~~~~~~~<br>~~~~~~~~<br>~~~~~~~~</p>`
    build += `</div>`
  }
  output.innerHTML = build;
}
function example2(){
  let output = document.getElementById("output");
  let build = "";
  for(let i = 1; i <=8 ; i++){
    //HTML Building
    build += `<div class="card flash">`
    build += `  <img src="chunli/intro0${i}.gif">`
    build += `</div>`
  }
  output.innerHTML = build;
}
function example3(){
  let output = document.getElementById("output");
  let amount = parseInt(document.getElementById("amount").value);

  let build = "";
  for(let i = 0; i < amount; i++){
    let num1 = Math.floor(Math.random()*10 + 1);
    let num2 = Math.floor(Math.random()*10 + 1);

    build += `<div class="card flash">`
    build += `  <h3>&nbsp; ${num1}</h3>`
    build += `  <h3>+ ${num2}</h3>`
    build += `  <hr>`
    build += `  <br><br>`
    build += `</div>`
  }
  output.innerHTML = build;
}



