var imageIndex = 1;
var dateFinish = new Date("Nov 18, 2017 18:00:00")
var intervalTime = setInterval(convertDate, 1000);
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

//Funcion que segun el id y el titulo hara un zoom a la imagen. Pondrá un texto y una opacidad
function zoomAdventure(indexImage, titleAdventure) {
  var element = document.getElementById("imageAdventure"+indexImage);
  var elementTitle = document.getElementById("textImageAventure"+indexImage);
  element.style.transform  = "scale(1.1,1.1)";
  element.style.opacity = "0.5";
  elementTitle.innerHTML = titleAdventure;
  elementTitle.style.visibility = "visible";
}

//Funcion para quitarle el zoom, el texto y la opacidad a la imagen
function zoomOutAdventure(indexImage) {
  var element = document.getElementById("imageAdventure"+indexImage);
  var elementTitle = document.getElementById("textImageAventure"+indexImage);
  element.style.transform  = "none";
  element.style.transform  = "none";
  element.style.opacity = "1";
  elementTitle.style.visibility = "hidden";
}

function convertDate() {
  var textTimer = document.getElementById('textTimer');

  //Cogemos el momento actual
  var now =  new Date().getTime();

  //Calculamos el tiempo entre las dos fechas
  var timeBetween = dateFinish - now;

  //Si la diferencia es menor que 0 ya habra pasado la fecha
  if (timeBetween < 0) {
      textTimer.innerHTML = "TIENDA YA DISPONIBLE";
      clearInterval(x);
    } else {
      //Calculamos dias,horas,minutos y segundos
      var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);
      textTimer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
}
