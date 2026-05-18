let $ = (selector) => document.querySelector(selector);

//Concept Source - https://www.w3schools.com/howto/howto_css_modals.asp
function createModal( text,content, container ){
    this.button = document.createElement("div");
    this.button.innerHTML = text;
    this.button.addEventListener("click",()=>{
      this.modal.style.display = "block";
    })

    this.modal = document.createElement("div");
    this.modal.setAttribute("class","modal");

    this.modal_content = document.createElement("div");
    this.modal_content.setAttribute("class","modal-content");

    this.modal_header = document.createElement("div");
    this.modal_header.setAttribute("class","modal-header");

    this.modal_body = document.createElement("div");
    this.modal_body.setAttribute("class","modal-body");
    console.log(typeof(this.content) == "object")
    if(typeof(this.content) == "object"){
      this.modal_body.append(content);
    }else{
      this.modal_body.innerHTML = content;
    }
    
    this.closeButton = document.createElement("span");
    this.closeButton.setAttribute("class","close");
    this.closeButton.innerHTML = "&times";
    this.closeButton.addEventListener("click",()=>{
      this.modal.style.display = "none";
    })

    this.modal_header.append(this.closeButton);
    this.modal_content.append(this.modal_header);
    this.modal_content.append(this.modal_body);
    this.modal.append(this.modal_content);
    console.log(this.modal)


    $(`#${container}`).append(this.button)
    $(`#${container}`).append(this.modal)
}


//Gallery
//Concept Source - Custom made
function createGallery(images, container, speed = 1000) {
  let index = 0;
  let timer = null;

  const obj = document.createElement("img");

  obj.src = images[0];

  function next() {
    index++;
    obj.src = images[index % images.length];
  }

  function play() {
    next();
    timer = setTimeout(play, speed);
  }

  function stop() {
    clearTimeout(timer);
  }

  obj.addEventListener("click", next);

 
  $(`#${container}`).append(obj);

  // autoplay automatically
  play();

  return {
    next,
    play,
    stop
  };
}

function createFlipCard(front, back, container) {
  const obj = document.createElement("div");

  obj.setAttribute("class", "flip-card");

  obj.innerHTML = `
    <div class="flip-front">${front}</div>
    <div class="flip-back">${back}</div>
  `;

  function flip() {
    obj.classList.toggle("flip");
  }

  obj.addEventListener("click", flip);

  $(`#${container}`).append(obj);

  return {
    element: obj,
    flip
  };
}