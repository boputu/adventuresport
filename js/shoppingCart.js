
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
  for (var i = 0; i < cart.length; i++) {

    var ul = document.createElement("ul");
    ul.className = "sub-icon1 list";
    var divClear = document.createElement("div");
    divClear.className = "clear";
    ul.appendChild(divClear);

    var liImg = document.createElement("li");
    liImg.className = "list_img";
    var img = document.createElement("img");
    img.style.height = '100px';
    img.style.width = '100px';
    img.src = cart[i].image;
    liImg.appendChild(img);
    ul.appendChild(liImg);

    var liDesc = document.createElement("li");
    liDesc.className = "list_desc";
    var h4 = document.createElement("h4");
    h4.innerHTML = cart[i].name;
    liDesc.appendChild(h4);
    var span = document.createElement("span");
    span.className = "actual";
    span.innerHTML = cart[i].quantity + " x " + cart[i].price;
    liDesc.appendChild(span);
    ul.appendChild(liDesc);

    var divClear2 = document.createElement("div");
    divClear2.className = "clear";
    ul.appendChild(divClear2);

    document.getElementById("containerCheckout").appendChild(ul);
    }
}
