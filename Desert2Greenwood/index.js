var Googlemap;
var runner=null;
// Initialize google account
    function makeApiCall() {
      var params = {
        // The spreadsheet to request.
        spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder value.

        // The ranges to retrieve from the spreadsheet.
        ranges: [],  // TODO: Update placeholder value.

        // True if grid data should be returned.
        // This parameter is ignored if a field mask was set in the request.
        includeGridData: false,  // TODO: Update placeholder value.
      };

      var request = gapi.client.sheets.spreadsheets.get(params);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

    function initClient() {
      var API_KEY = 'AIzaSyAeXPkIz1JIdgPkA7VtHCj7V1-wfYNK69Q';  // TODO: Update placeholder with desired API key.
      var CLIENT_ID = '170863147700-87ntidpbq1qc35eq7l1mp3m5nkro5fln.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.
      var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';
      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
	 getLonLat(); //put runner on map
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }
    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }
    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        makeApiCall();
      }
    }
    function handleSignInClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }
    function handleSignOutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }
////////////////////////////////////////////////////////////
// get lonlat
	async function getLonLat(){
		console.log("getting lonlat");
		let response;
		try {
		// Fetch lat lon cells
		response = await gapi.client.sheets.spreadsheets.values.get({
			spreadsheetId: '1uQfnFoeMdOFjT8k7WqEgEpQCuYv_Lc4KvyVZ9UDPW74',
			range: 'K2:L2',
		});
		} catch (err) {
			console.log(err.message);
			return;
		}
		const range = response.result;
		if (!range || !range.values || range.values.length == 0) {
		console.log('No values found.');
		return;
		}
		// display
		try{
			var lonlat = [Number(range.values[0][0]),Number(range.values[0][1])];
	  	}catch{
	    		console.log("Using Defaut")
	    		var lonlat = [-71.5429,42.50918];
		}
		console.log(lonlat);
		if (runner==null){
			runner = new google.maps.Marker({
				position: { lat: lonlat[1], lng: lonlat[0]},
				map: Googlemap,
				title: "Nice Job!",
				icon: "https://tdeyster.github.io/fun_projects/Desert2Greenwood/runner.png",//"https://icons.iconarchive.com/icons/icons8/windows-8/48/Sports-Running-Man-icon.png",
			});
		}else{
			runner.setPosition( new google.maps.LatLng(lonlat[1],lonlat[0]) );
    			Googlemap.panTo( new google.maps.LatLng(lonlat[1],lonlat[0]) );
		}
	 
	};
//////////////////////////////////////////////////////////////////////////////////////
// [START maps_layer_kml]
function initMap() {
  Googlemap = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:  42.509, lng: -71.543 }
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "http://drive.google.com/uc?id=1fUTjKFWu1eLpdao2kXo7dc9NwdDP2HSg#t=" + new Date().getTime(),
    map: Googlemap,
  });
  //const ctaLayer1 = new google.maps.KmlLayer({
  //  url: "http://drive.google.com/uc?id=15MGMLN9e5SwEtP8XLXFG-Sz41pd8bimZ#t=" + new Date().getTime(),
  //  map: map,
  //});
  getLonLat();
}
// [END maps_layer_kml]
