
function addShoppingCart() {
  //Creamos el objeto que se añadira al carrito. Contiene dentro una funcion que para añadirlo al localStorage
  var objectCart = {
    name: "PEPE",
    quantity: 2,
    price: 12.00,
    image: "",
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
}

function showShoppingCart() {
  for (var i = 0; i < 3; i++) {

    var ul = document.createElement("ul");
    ul.className = "sub-icon1 list";
    var divClear = document.createElement("div");
    divClear.className = "clear";
    ul.appendChild(divClear);

    var liImg = document.createElement("li");
    liImg.className = "list_img";
    var img = document.createElement("img");
    img.src = "images/1.jpg";
    liImg.appendChild(img);
    ul.appendChild(liImg);

    var liDesc = document.createElement("li");
    liDesc.className = "list_desc";
    var h4 = document.createElement("h4");
    h4.innerHTML = "velit esse molestie";
    liDesc.appendChild(h4);
    var span = document.createElement("span");
    span.className = "actual";
    span.innerHTML = "1 x $12.00";
    liDesc.appendChild(span);
    ul.appendChild(liDesc);

    var divClear2 = document.createElement("div");
    divClear2.className = "clear";
    ul.appendChild(divClear2);

    document.getElementById("containerCheckout").appendChild(ul);
    }
}
