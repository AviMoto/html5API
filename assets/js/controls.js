function checkGeoLocation() {
	try {
		if (navigator.geolocation) {
			return navigator.geolocation;
		} else {
			return null;
		}
	} catch (e) {
		return null;
	}
}
window.onload = function() {
	if(checkGeoLocation()){
		getLocation();
	} else {
		console.log("Missing support for geolocation");
	}
	
	function getLocation(){
		navigator.geolocation.getCurrentPosition(function(position){
			var myLatitude = position.coords.latitude;
			var myLongitude = position.coords.longitude;
			var mapOptions = {
					center: new google.maps.LatLng(myLatitude, myLongitude),
					zoom: 16,
					mapTypeId: google.maps.MapTypeId.SATELLITE
			};
			var map = new google.maps.Map(document.getElementById("myMap"),mapOptions);
			var marker = new google.maps.Marker({
			       position: new google.maps.LatLng(myLatitude, myLongitude),
			       map: map,
			       title:"this is my location"
			   });
		});
	}
};
