function letterGrade(){
  let grade = parseFloat(document.getElementById("grade").value);
  let output = document.getElementById("output");
  let letter = "";

  if(grade >= 90 && grade <=100){
    letter = "E";
  }else if(75 <= grade && grade <= 89){
    letter = "S";
  }else if(65 <= grade && grade <= 74){
    letter = "N";
  }else if(grade < 65){
    letter = "U";
  }
  
  output.innerHTML = `${grade} is a ${letter}.`;
}


