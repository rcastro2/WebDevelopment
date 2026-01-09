function add(){
  //add() is the event handler for the onclick event on the button
  let n1 = document.getElementById("number1");
  let n2 = document.getElementById("number2");
  let output = document.getElementById("output");

  let result = parseFloat(n1.value) + parseFloat(n2.value);

  output.innerHTML = result;
} 
