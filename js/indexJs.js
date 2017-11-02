var imageIndex = 1;
showDivs(imageIndex);

//Funcion que pasar un index a showDivs
function nextDiv(index) {
  showDivs(imageIndex += index);
}

//Funcion que mostrar la imagen segun el indice que se le pase
function showDivs(index) {
  var element = document.getElementsByClassName("imageSlide");
  if(index > element.length){
    imageIndex = 1;
  }
  if(index < 1){
    imageIndex = element.length;
  }
  for (var i = 0; i < element.length; i++) {
    element[i].style.display = "none";
}
  element[imageIndex - 1].style.display = "block";
}

//Funciones que le daran opacidad a las flechas
function setOpacityLeft() {
  var arrowLeft = document.getElementById("arrowLeft");
  arrowLeft.style.opacity = "0.5";
}

function removeOpacityLeft() {
  var arrowLeft = document.getElementById("arrowLeft");
  arrowLeft.style.opacity = "1";
}

function setOpacityRight() {
  var arrowRight = document.getElementById("arrowRight");
  arrowRight.style.opacity = "0.5";
}

function removeOpacityRight() {
  var arrowRight = document.getElementById("arrowRight");
  arrowRight.style.opacity = "1";
}
