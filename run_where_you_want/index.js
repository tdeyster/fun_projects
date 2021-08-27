// [START maps_layer_kml]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 41.876, lng: -87.624 },
  });
  const ctaLayer = new google.maps.KmlLayer({
    //url: "https://raw.githubusercontent.com/tdeyster/fun_projects/gh-pages/run_where_you_want/running.kml",
    url: "https://drive.google.com/file/d/15QhrUe99R1gwgBW-t6a81lBS2qk-p9VA/view?usp=sharing",
    map: map,
  });
}
// [END maps_layer_kml]
