
//Funciones dentro de single -------------------------------------------------

var slideIndex = 1;

function lanzadera(){
  //muestra();
  showDivs(slideIndex);
  plusDivs(1);
}

function plusDivs(n) {
  /* sumamos o restamos 1 al valor ya definido */
  showDivs(slideIndex += n);
  showDivs(slideIndex);
}

function showDivs(n) {
  /* recogemos el contenedor de imagenes */
  var x = document.getElementsByClassName("mySlides");
  /* si n es mayor que el nª de imagenes, se inicializa a 1 */
  if (n > x.length) {slideIndex = 1}
  /* si n es menor que 1, añadimos la última posición */
  if (n < 1) {slideIndex = x.length}
  /* Recorre todas la imagenes y las oculta */
  for (var i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


function vSocial() {
  /* Definimos el contenedor en la variable social */
  var social = document.getElementById('socialButtons');
  /* Si el contenedor de social no esta visible, lo hacemos
     visible y viceversa */
  if   (social.style.display == "none")
       {social.style.display = "block"; }
  else {social.style.display = "none"; }
}


// Paso de parametros shop a single -----------------------------------------

function obtener(opcion){
  /* recogemos el paso de parámetro en localStorage */
  localStorage.valor = opcion;
  /* redireccionamos */
  location='single.html';
}

function muestra(){

  var opcion
  opcion = localStorage.valor;

  /* objeto JSON */
  var advent = '{"sports":[' +
  '{"id":"1","name":"Escalada","precio":"33€","descripcion":"El esfuerzo y las ganas te llevarán a lo más alto","url":"1"},' +
  '{"id":"2","name":"MTB","precio":"36€","descripcion":"Todo lo que sube, tiene que bajar","url":"1"},' +
  '{"id":"3","name":"Airsoft","precio":"45€","descripcion":"Vive experiencias que nunca olvidarás","url":"1"},' +

  '{"id":"4","name":"Rafting","precio":"49,99€","descripcion":"No existen los atajos para los lugares que valen la pena","url":"1"},' +
  '{"id":"5","name":"Buceo","precio":"52€","descripcion":"Atraviesa la superficie y descubre un nuevo mundo","url":"1"},' +
  '{"id":"6","name":"Kayak","precio":"42€","descripcion":"A veces no se tiene el viento a favor, pero hay que seguir remando","url":"1"},' +

  '{"id":"7","name":"Puenting","precio":"44€","descripcion":"Vence tus miedos","url":"1"},' +
  '{"id":"8","name":"Raúl","precio":"75,95€","descripcion":"Sentirse libre aunque solo sea por un momento","url":"1"}]}';

  /* declaramos el objeto JSON */
  obj = JSON.parse(advent);

  /* recorremos el objeto JSON */
  for(var i in obj.sports) {
    if (obj.sports[i].id==opcion) {
      document.getElementById("descr").innerHTML = obj.sports[i].descripcion;
      document.getElementById("precio").innerHTML = obj.sports[i].precio;
    }
  }

}

/*function myOverFunction() {
  var a = document.getElementById("cont");
  a.style.width="100%";
  a.style.zIndex = "2000";
}*/
