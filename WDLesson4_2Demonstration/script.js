function login(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pwd").value;
  let output = document.getElementById("example1");
  let message = "";

  if(u == "admin" && pwd == "1234"){
    message = "Access Granted";
  }else{
    message = "Access Denied";
  }
  
  output.innerHTML = message;
}

function eligible(){
  let level = document.getElementById("level").value;
  let gpa = document.getElementById("gpa").value;
  let output = document.getElementById("example2");
  let status = "";

  if(level >= 11 && gpa > 90){
    message = "Eligible";
  }else{
    message = "Not Eligible";
  }

  output.innerHTML = status;
}

