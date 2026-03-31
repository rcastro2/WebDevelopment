function init(){
  let output = document.getElementById("output");
  let names = ["Captain America","Colossus","Gambit","Hulk","Phoenix","Psylocke","Rogue","Spiderman","Storm","Thor","Venom","Wolverine"];
  let heroes = ["captainamerica.gif","colossus.gif","gambit.gif","hulk.gif","phoenix.gif","psylocke.gif","rogue.gif","spiderman.gif","storm.gif","thor.gif","venom.gif","wolverine.gif"];
  let build = "";

  for(let i = 0; i < heroes.length; i++){
    build += `<div class="card">
                 <h3>${names[i]}</h3>
                 <img src="heroes/${heroes[i]}">
              </div>`;
  }
 
  output.innerHTML = build;
}
