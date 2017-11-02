var imageIndex = 1;
showDivs(imageIndex);

function nextDiv(index) {
  showDivs(imageIndex += index);
}

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
