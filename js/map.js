function initMap() {
  var mapita = {lat: 39.3935163, lng: -0.4115861};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: mapita
  });
  var marker = new google.maps.Marker({
    position: mapita,
    map: map
  });
}
