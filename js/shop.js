//Titulo de la pagina
document.title = 'Actividades';
//funcion para cuando se pase el cursor que se haga grande
function zoomCard(indexCard) {
  var card = document.getElementById('product'+indexCard);
  card.style.transform = "scale(1.2,1.2)";
}

//cuando se quita el cursor se pone como estaba antes
function zoomOutCard(indexCard) {
  var card = document.getElementById('product'+indexCard);
  card.style.transform = "none";
}

//Contador de tiempo de las ofertas
var dateFinish = new Date("Nov 18, 2017 18:00:00")
var intervalTime = setInterval(convertDate, 1000);

function convertDate() {
  var textTimer = document.getElementsByClassName("textCount");

  //Cogemos el momento actual
  var now =  new Date().getTime();

  //Calculamos el tiempo entre las dos fechas
  var timeBetween = dateFinish - now;

  //Si la diferencia es menor que 0 ya habra pasado la fecha
  if (timeBetween < 0) {
      clearInterval(x);
      textTimer.innerHTML = "OFERTA NO DISPONIBLE";
    } else {
      //Calculamos dias,horas,minutos y segundos
      var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
      for (var i = 0; i < textTimer.length; i++) {
        textTimer[i].innerHTML = days + "d " + hours + "h " + minutes + "m ";

      }
    }
}
