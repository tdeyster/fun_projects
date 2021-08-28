// [START maps_layer_kml]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:  42.311, lng: -83.979 },
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "http://drive.google.com/uc?id=15QhrUe99R1gwgBW-t6a81lBS2qk-p9VA#t=" + new Date().getTime(),
    map: map,
  });
}
// [END maps_layer_kml]
