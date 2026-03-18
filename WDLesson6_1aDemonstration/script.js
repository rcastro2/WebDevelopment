let grades = [65.56,79.76,11.84,59.08,71.23,86.51,43.21,24.89,66.48,83.52,61.96,70.18,91.87,75,88.77];

function example1(){
  let output = document.getElementById("output");

  output.innerHTML = `Grade at index 1 is ${grades[1]}`;
}

function example2(){
  let output = document.getElementById("output");
  let i = parseInt(document.getElementById("index").value);

  output.innerHTML = `Grade at index ${i} is ${grades[i]}`;
}

function example3(){
  let output = document.getElementById("output");

  let build = `<table border="1">`

  build += `<tr class="headings"><th>Exam</th><th>Grade</th></tr>`
  for(let i = 0; i < grades.length; i+=1){
    build += `<tr><td>${i+1}</td><td>${grades[i]}</td></tr>`
  }
  build += `</table>`

  output.innerHTML = build;
}
