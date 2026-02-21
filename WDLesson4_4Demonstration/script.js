function roll1(){
  let output = document.getElementById("output1");

  let n = Math.random();
  output.innerHTML = `Math.random() produced ${n}`;
}

function roll2(){
  let output = document.getElementById("output2");

  let n = Math.floor(Math.random()*10+1);
  output.innerHTML = `Random integer produced was ${n}`;
}

function roll3(){
  let output = document.getElementById("output3");

  let n = Math.floor(Math.random()*6+1);
  output.innerHTML = `<img class="die" src="die${n}.png">`;
}


