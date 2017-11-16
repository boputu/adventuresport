

//Funcion que se ejecuta al cargar el proyecto y le da estilo a ciertos elementos
function primeraFuncion() {

  var elementoScene = document.getElementById("profesor1");
  elementoScene.style.width="200px"; 
  elementoScene.style.margin="14px";
  elementoScene.style.perspective= "1000px";
  elementoScene.style.transform= "translateZ(-200px)";
  elementoScene.style.transition=" transform 350ms";
   var elementoScene1 = document.getElementById("profesor2");
  elementoScene1.style.width="200px"; 
  elementoScene1.style.margin="14px";
  elementoScene1.style.perspective= "1000px";
  elementoScene1.style.transform= "translateZ(-200px)";
  elementoScene1.style.transition=" transform 350ms";
   var elementoScene2 = document.getElementById("profesor3");
  elementoScene2.style.width="200px"; 
  elementoScene2.style.margin="14px";
  elementoScene2.style.perspective= "1000px";
  elementoScene2.style.transform= "translateZ(-200px)";
  elementoScene2.style.transition=" transform 350ms";
   var elementoScene3 = document.getElementById("profesor4");
  elementoScene3.style.width="200px"; 
  elementoScene3.style.margin="14px";
  elementoScene3.style.perspective= "1000px";
  elementoScene3.style.transform= "translateZ(-200px)";
  elementoScene3.style.transition=" transform 350ms";
   var elementoScene4 = document.getElementById("profesor5");
  elementoScene4.style.width="200px"; 
  elementoScene4.style.margin="14px";
  elementoScene4.style.perspective= "1000px";
  elementoScene4.style.transform= "translateZ(-200px)";
  elementoScene4.style.transition=" transform 350ms";
    

  var elementoPoster = document.getElementById("poster");
  elementoPoster.style.width="200px";
  elementoPoster.style.height="270px";
  elementoPoster.style.backgroundSize= "cover";

  var elementoPoster1 = document.getElementById("poster1");
  elementoPoster1.style.width="200px";
  elementoPoster1.style.height="270px";
  elementoPoster1.style.backgroundSize= "cover";

  var elementoPoster2 = document.getElementById("poster2");
  elementoPoster2.style.width="200px";
  elementoPoster2.style.height="270px";
  elementoPoster2.style.backgroundSize= "cover";

  var elementoPoster3 = document.getElementById("poster3");
  elementoPoster3.style.width="200px";
  elementoPoster3.style.height="270px";
  elementoPoster3.style.backgroundSize= "cover";

  var elementoPoster4 = document.getElementById("poster4");
  elementoPoster4.style.width="200px";
  elementoPoster4.style.height="270px";
  elementoPoster4.style.backgroundSize= "cover";
}



function ponerRaton() {

  var element = document.getElementById("profesor1");
  element.style.transform="rotateY(-78deg)";
  element.style.transformStyle= "preserve-3d";
  element.style.width="200px";
  element.style.height="270px";
  element.style.transition=" transform 350ms";

  var element1 = document.getElementById("profesor2");
  element1.style.transform="rotateY(-78deg)";
  element1.style.transformStyle= "preserve-3d";
  element1.style.width="200px";
  element1.style.height="270px";
  element1.style.transition=" transform 350ms";

  var element2 = document.getElementById("profesor3");
  element2.style.transform="rotateY(-78deg)";
  element2.style.transformStyle= "preserve-3d";
  element2.style.width="200px";
  element2.style.height="270px";
  element2.style.transition=" transform 350ms";

  var element3 = document.getElementById("profesor4");
  element3.style.transform="rotateY(-78deg)";
  element3.style.transformStyle= "preserve-3d";
  element3.style.width="200px";
  element3.style.height="270px";
  element3.style.transition=" transform 350ms";

  var element4 = document.getElementById("profesor5");
  element4.style.transform="rotateY(-78deg)";
  element4.style.transformStyle= "preserve-3d";
  element4.style.width="200px";
  element4.style.height="270px";
  element4.style.transition=" transform 350ms";

}

//Funcion para quitarle el zoom, el texto y la opacidad a la imagen
function quitarRaton() {

  var element = document.getElementById("profesor1");
  element.style.transform="rotateY(0deg)";
  element.style.width="200px";
  element.style.height="270px";

  var element1 = document.getElementById("profesor2");
  element1.style.transform="rotateY(0deg)";
  element1.style.width="200px";
  element1.style.height="270px";

 var element2 = document.getElementById("profesor3");
  element2.style.transform="rotateY(0deg)";
  element2.style.width="200px";
  element2.style.height="270px";

  var element3 = document.getElementById("profesor4");
  element3.style.transform="rotateY(0deg)";
  element3.style.width="200px";
  element3.style.height="270px";

  var element4 = document.getElementById("profesor5");
  element4.style.transform="rotateY(0deg)";
  element4.style.width="200px";
  element4.style.height="270px";
 
 
}