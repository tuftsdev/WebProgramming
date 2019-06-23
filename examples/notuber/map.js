var myLat = 42.352271;
var myLng = -71.05524200000001;
var me = new google.maps.LatLng(myLat, myLng);
var meMarker = {};
var myOptions = {
	zoom: 13,
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();

function initMap() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
}

function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			me = new google.maps.LatLng(myLat, myLng);
			meMarker = new google.maps.Marker({
				position: me,
				title: "Here I Am",
				icon: "me.png",
				map: map
			});
			map.panTo(me);
			var request = new XMLHttpRequest();
			request.open("POST", "https://hans-moleman.herokuapp.com/rides");
			request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			request.onreadystatechange = function() {
				if (request.status == 200 && request.readyState == 4) {
					closestDistance = 9999999;
					closestVehicle = {};
					vehicles = JSON.parse(request.responseText);
					for (count = 0; count < vehicles.length; count++) {
						vehicleLatLng = new google.maps.LatLng(vehicles[count].lat, vehicles[count].lng);
						distance = google.maps.geometry.spherical.computeDistanceBetween(me, vehicleLatLng);
						if (closestDistance > distance) {
							closestDistance = distance;
							closestVehicle = vehicleLatLng;
						}
						marker = new google.maps.Marker({
							position: vehicleLatLng,
							title: "Vehicle " + vehicles[count].username + " is " + distance * 0.000621371 + " mi away from you",
							icon: "car.png",
							map: map
						});
						google.maps.event.addListener(marker, "click", function() {
							infowindow.setContent(this.title);
							infowindow.open(map, this);
						});
					}
					google.maps.event.addListener(meMarker, "click", function() {
						infowindow.setContent("Closest vehicle is " + closestDistance * 0.000621371 + " mi away!");
						infowindow.open(map, meMarker);
					});
					closestLine = new google.maps.Polyline({
						path: [me, closestVehicle],
						geodesic: true,
						strokeColor: '#1D8ECE',
						strokeOpacity: 0.75,
						strokeWeight: 10
					});
					closestLine.setMap(map);
				}
			}
			request.send("username=weinermobile&lat=" + myLat + "&lng=" + myLng);
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}