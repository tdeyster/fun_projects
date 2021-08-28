// [START maps_layer_kml]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:  42.311, lng: -83.979 },
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "http://drive.google.com/uc?id=1Hl2H4QyOzANoBwHkiS9DKvgWu8sHVPDe#t=" + new Date().getTime(),
    map: map,
  });
}
// [END maps_layer_kml]
