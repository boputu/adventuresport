function zoomCard(indexCard) {
  var card = document.getElementById('product'+indexCard);
  card.style.transform = "scale(1.2,1.2)";
}

function zoomOutCard(indexCard) {
  var card = document.getElementById('product'+indexCard);
  card.style.transform = "none";
}
