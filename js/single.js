
// Funciones dentro de single.html ---------------------------------------------

var sIndex = 1;

function lanzadera(){

  mostrarDivs(sIndex);
  siguiente(sIndex);
  muestra();
  vSocial();

}

function siguiente(n) {

  // sumamos o restamos 1 al valor ya definido
  mostrarDivs(sIndex += n);
  mostrarDivs(sIndex);

}

function mostrarDivs(n) {

  // recogemos el contenedor de imagenes
  var x = document.getElementsByClassName("mySlides");
  // si n es mayor que el nª de imagenes, se inicializa a 1
  if (n > x.length) {sIndex = 1}
  // si n es menor que 1, añadimos la última posición
  if (n < 1) {sIndex = x.length}
  // recorre todas la imagenes y las oculta
  for (var i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[sIndex-1].style.display = "block";

}

function vSocial(){

  //CustomEvent
  var btnSocial = document.getElementById('btnSocial');
  btnSocial.addEventListener("click", function(){

    // definimos el contenedor en la variable 'social'
    var social = document.getElementById('socialButtons');
    /* si el contenedor de social no esta visible, lo hacemos
       visible y viceversa */
    if   (social.style.display == "none")
         {social.style.display = "block";}
    else {social.style.display = "none"; }

  }, false);

}


// Paso de parametros shop a single --------------------------------------------

// objeto JSON
var advent = '{"sports":[' +
'{"id":"1","nom":"Escalada","precio":"33€","descripcion":"El esfuerzo y las ganas te llevarán a lo más alto","url1":"images/escalada1.jpg","url2":"images/escalada2.jpg"},' +
'{"id":"2","nom":"MTB","precio":"36€","descripcion":"Todo lo que sube, tiene que bajar","url1":"images/mtb1.jpg","url2":"images/mtb2.jpg"},' +
'{"id":"3","nom":"Airsoft","precio":"45€","descripcion":"Vive experiencias que nunca olvidarás","url1":"images/airsoft.jpg","url2":"images/airsoft.jpg"},' +

'{"id":"4","nom":"Rafting","precio":"49,99€","descripcion":"No existen los atajos para los lugares que valen la pena","url1":"images/rafting1.jpg","url2":"images/rafting2.jpg"},' +
'{"id":"5","nom":"Buceo","precio":"52€","descripcion":"Atraviesa la superficie y descubre un nuevo mundo","url1":"images/buceo1.jpg","url2":"images/buceo2.jpg"},' +
'{"id":"6","nom":"Kayak","precio":"42€","descripcion":"A veces no se tiene el viento a favor, pero hay que seguir remando","url1":"images/kayak1.jpg","url2":"images/kayak2.jpg"},' +

'{"id":"7","nom":"Puenting","precio":"44€","descripcion":"Vence tus miedos","url1":"images/puenting1.jpg","url2":"images/puenting2.jpg"},' +
'{"id":"8","nom":"Paracaidismo","precio":"75,95€","descripcion":"Sentirse libre aunque solo sea por un momento","url1":"images/paracaidismo1.jpg","url2":"images/paracaidismo2.jpg"}]}';

function obtener(opcion){

  // recogemos el paso de parámetro en localStorage
  localStorage.valor = opcion;
  location='single.html';

}

function muestra(){

  // recogemos el valor de localSorage en la variable opcion
  var opcion = localStorage.valor;
  // declaramos el objeto JSON
  var obj = JSON.parse(advent);

  // recorremos el objeto JSON
  for(var i in obj.sports) {

    /* recorremos el objeto JSON, buscando la id del objeto JSON que coincide con
       la id obtenida del localSorage.valor, recogiendo los campos a visualizar */
    if (obj.sports[i].id==opcion) {

      // título
      document.getElementById("titulo").innerHTML = obj.sports[i].nom;
      // imágenes del silder
      document.getElementById("img1").src = obj.sports[i].url1;
      document.getElementById("img2").src = obj.sports[i].url2;
      // descripción
      document.getElementById("descr").innerHTML = obj.sports[i].descripcion;
      //precio
      document.getElementById("precio").innerHTML = obj.sports[i].precio;

    }
  }

}
