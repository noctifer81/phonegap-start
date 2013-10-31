// JavaScript Document

navigator.geolocation.getCurrentPosition(onSuccess, onError);
// onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
		element.setAttribute('style', 'display:block;');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
    	inizialize (position.coords.latitude, position.coords.longitude);
	}

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
	
	function initialize( lat, long) {
	  var myLatlng = new google.maps.LatLng(lat,long);
	  var mapOptions = {
		zoom: 6,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: 'Hello World!'
	  });
	}

google.maps.event.addDomListener(window, 'load', initialize);