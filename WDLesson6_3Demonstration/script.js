let teachers = [{ "name":"Benn", "course":"Programming Technologies", "image":"programmingtech.jpg"},
                { "name":"Joseph", "course":"Web Development", "image":"webdev.png" },
                { "name":"Porchetta", "course":"Intro to Computer Science", "image":"introcs.jpg" },
                { "name":"Castro", "course":"CS Career Development", "image":"cscareerdev.jpg" }];


function example1(){
  console.log(teachers[0]);
  console.log(teachers[1].course);
  console.log(teachers[2].name);
  console.log(teachers[3].image);
}

function example2(){
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < teachers.length; i++){
    let teacher = teachers[i]
    build += `<div class="card">`;
    build += `     <h3>${teachers[i].course}</h3>`;
    build += `     <img src="${teachers[i].image}">`;
    build += `     <h3>${teachers[i].name}</h3>`;
    build += `</div>`;
  }
  output.innerHTML = build;

}

