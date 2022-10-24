
// [START maps_layer_kml]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:  42.509, lng: -71.543 }
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "http://drive.google.com/uc?id=1fUTjKFWu1eLpdao2kXo7dc9NwdDP2HSg#t=" + new Date().getTime(),
    map: map,
  });
  const ctaLayer1 = new google.maps.KmlLayer({
    url: "http://drive.google.com/uc?id=15MGMLN9e5SwEtP8XLXFG-Sz41pd8bimZ#t=" + new Date().getTime(),
    map: map,
  });
}
// [END maps_layer_kml]