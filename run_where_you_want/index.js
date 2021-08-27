// [START maps_layer_kml]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 41.876, lng: -87.624 },
  });
  const ctaLayer = new google.maps.KmlLayer({
    //url: "https://raw.githubusercontent.com/tdeyster/fun_projects/gh-pages/run_where_you_want/running.kml",
    //url: "https://drive.google.com/file/d/15QhrUe99R1gwgBW-t6a81lBS2qk-p9VA/view?usp=sharing",
    //url: "https://raw.githubusercontent.com/tdeyster/fun_projects/gh-pages/run_where_you_want/point2gdrive.kml",
    //url: "https://docs.google.com/uc?authuser=0&id=15QhrUe99R1gwgBW-t6a81lBS2qk-p9VA",
    url: "http://drive.google.com/uc?id=15QhrUe99R1gwgBW-t6a81lBS2qk-p9VA",
    //url: "https://drive.google.com/drive/u/0/folders/1MQzJtjWMugCYzCB1vUD5_uuVpE1CTAxY",
    //url: "https://drive.google.com/drive/folders/1MQzJtjWMugCYzCB1vUD5_uuVpE1CTAxY?/run_where_you_want.kml",
    map: map,
  });
}
// [END maps_layer_kml]
