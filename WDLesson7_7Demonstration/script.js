
window.onload = function(){  
  //Sample content
  let hulk = ` <div class="container center">
                    <div class="card">
                        <p> Following his accidental exposure to gamma rays while saving the life of Rick Jones during the detonation of an experimental bomb, Banner is physically transformed into the Hulk when subjected to emotional stress, at or against his will. This transformation often leads to destructive rampages and to conflicts that complicate Banner's civilian life.</p>
                    </div>
                    <div class="card">
                        <img src='images/hulk.png'>
                    </div>
                  </div>`
  let avengers = ["images/antman.png","images/black_widow.png","images/blackpanther.jpg","images/captain_america.png","images/drstrange.jpg"];
  let avengers2 = ["images/hulk.png","images/ironman.png","images/scarlet_witch.png","images/thor.png","images/wasp.png"];
  
  //Discussion 1: Create a simple modal window with just text
  createModal("Click Me","Hi","modal1_output");


  //Discussion 2: Create a modal modal window using the image of the hulk and the content created for the hulk
  createModal("<img src='images/hulk.png'>",hulk,"modal2_output");

  //Discussion 3: Create a gallery using the images in the avengers array. Later add the autoplay feature.
  createGallery(avengers,"gallery1_output");
  createGallery(avengers2,"gallery2_output");
  
  
  //Discussion 4: Create a simple flip card using just text
  createFlipCard("Click Me","Hi","flipcard_output");


  //Discussion 5: Create a flipcard using the image of the hulk and the content created for the hulk
  createFlipCard("<img src='images/hulk.png'>",hulk,"flipcard_output");

  /*

  //Discussion 6: Create a simple collapsible section using just text
  collapsible = new Collapsible("Click Me","Hi");
  collapsible.render("collapsible_output")

  //Discussion 7: Create a collapsible section using the text "Hulk" and the hulk content
  collapsible = new Collapsible("Hulk",hulk);
  collapsible.render("collapsible_output")
  */
}
