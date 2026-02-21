function example1(){
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < 100; i+=1){
    build += "I will not use AI!"
  }
  output.innerHTML = build;

}

function example2(){
  let output = document.getElementById("output");
  let build = "";

  for(let x = 1; x <= 10; x+=1){
    let y = x ** 2;
    build += `(${x} , ${y})<br>`
  }
  output.innerHTML = build;
}

function example3(){
  let output = document.getElementById("output");
  let start = parseInt(document.getElementById("start").value);
  let end = parseInt(document.getElementById("end").value);
  let increment = parseInt(document.getElementById("increment").value);
  let build = "";

  for(let i = start; i < end; i += increment){
    build += `${i}<br>`;
  }
  output.innerHTML = build;
}