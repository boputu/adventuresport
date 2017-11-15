
    function valida_envia(){
   	//valido el nombre
   	if (document.fvalida.nombre.value.length==0){
      	document.fvalida.nombre.placeholder = "Tiene que escribir su nombre";
        document.fvalida.nombre.className += " formInvalid";
      	document.fvalida.nombre.style.border = "solid 1px red";
      	return 0;
   	}

    if (document.fvalida.email.value.length==0){
      document.fvalida.email.placeholder = "Tiene que escribir un email valido";
      document.fvalida.email.className += " formInvalid";
      document.fvalida.email.style.border = "solid 1px red";
        return 0;
    }


    if (document.fvalida.asunto.value.length==0){
      document.fvalida.asunto.placeholder = "Tiene que escribir un asunto";
      document.fvalida.asunto.className += " formInvalid";
      document.fvalida.asunto.style.border = "solid 1px red";
      	return 0;
   	}

    if (document.fvalida.mensaje.value.length==0){
      document.fvalida.mensaje.placeholder = "Tiene que escribir un mensaje valido";
      document.fvalida.mensaje.className += " change";
      document.fvalida.mensaje.style.border = "solid 1px red";
        return 0;
    }

   	//el formulario se envia
   	alert("Muchas gracias por enviar el formulario");
    document.getElementById("miForm").reset();
}


function normal(){
  var elemento = document.getElementById("normalito");
  elemento.style.border = "1px solid #DFE0E2";
}
