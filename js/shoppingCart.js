
function addShoppingCart() {
  var select = document.getElementById("selectQuantity");
  var selectQuantity = select.options[select.selectedIndex].value;
  var productName = document.getElementById("titulo").textContent;
  var priceProduct = document.getElementById("precio").textContent;
  var imgProduct = document.getElementById("img1").src;
  //Creamos el objeto que se añadira al carrito. Contiene dentro una funcion que para añadirlo al localStorage
  var objectCart = {
    name: productName,
    quantity: selectQuantity,
    price: priceProduct,
    image: imgProduct,
    saveObject: function () {
      var shoppingCart = new Array();
        // Parse the serialized data back into an aray of objects
        shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if(shoppingCart == null){
          shoppingCart = new Array();
        }
        // Añadimos el nuevo objeto al carrito
        shoppingCart.push(this);
        // Añadimos el carrito al localStorage con el nuevo producto
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
  };

  objectCart.saveObject();
}

//Funcion que creara los objetos del carrito
function showShoppingCart() {
  var cart = JSON.parse(localStorage.getItem('shoppingCart'));
  for (let i = 0; i < cart.length; i++) {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "ul"+i);
    ul.className = "sub-icon1 list";
    let divClear = document.createElement("div");
    divClear.className = "clear";
    ul.appendChild(divClear);

    let liImg = document.createElement("li");
    liImg.className = "list_img";
    let img = document.createElement("img");
    img.style.height = '100px';
    img.style.width = '100px';
    img.src = cart[i].image;
    liImg.appendChild(img);
    ul.appendChild(liImg);

    let liDesc = document.createElement("li");
    liDesc.className = "list_desc";
    let h4 = document.createElement("h4");
    h4.innerHTML = cart[i].name;
    liDesc.appendChild(h4);
    let span = document.createElement("span");
    span.className = "actual";
    span.innerHTML = cart[i].quantity + " x " + cart[i].price;
    liDesc.appendChild(span);
    ul.appendChild(liDesc);

    let liButtons = document.createElement("li");
    let divButtons = document.createElement("div");
    divButtons.className = "product_control_buttons";
    let imgRemove = document.createElement("img");
    imgRemove.style.height = '30px';
    imgRemove.style.width = '30px';
    imgRemove.src = "images/close_edit.png";

    divButtons.appendChild(imgRemove);
    liButtons.appendChild(divButtons);
    ul.appendChild(liButtons);

    let divClear2 = document.createElement("div");
    divClear2.className = "clear";
    ul.appendChild(divClear2);

    let containerCheckout = document.getElementById("containerCheckout");
    containerCheckout.appendChild(ul);
    imgRemove.onclick = function() {
      removeProduct(i);
    };
    }
}

//Funcion que eliminara un producto del localStorage y de la pantalla
function removeProduct(indexProduct) {
    var cart = JSON.parse(localStorage.getItem('shoppingCart'));
    cart.splice(indexProduct,1);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    var ulRemove = document.getElementById("ul"+indexProduct);
    var parent = document.getElementById("containerCheckout");
    parent.removeChild(ulRemove);
}
