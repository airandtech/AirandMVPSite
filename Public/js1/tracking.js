//Extract rendered data from ejs
const dispatcherCoordinatesLat = Number(document.querySelector('#rider-coordinates-lat').innerHTML);
const dispatcherCoordinatesLng = Number(document.querySelector('#rider-coordinates-lng').innerHTML);
const destinationCoordinatesLat = Number(document.querySelector('#destination-coordinates-lat').innerHTML);
const destinationCoordinatesLng = Number(document.querySelector('#destination-coordinates-lng').innerHTML);

function initMap() {

    const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
    });
    const directionsService = new google.maps.DirectionsService();
    // animation: google.maps.Animation.DROP,
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,

    });

    // const scooter = new Image();   // Create new img element
    // img.src = __dirname + 'Public/images1/delivery-bike.png'; // Set source path

    const scooter = 
    "https://img.icons8.com/fluent/48/000000/delivery-scooter.png";

    const destination = "https://img.icons8.com/ios-filled/50/000000/marker.png";

    const dispatcherMarker = new google.maps.Marker({
        position: { lat: dispatcherCoordinatesLat, lng: dispatcherCoordinatesLng },
        map,
        icon: scooter,
    });
    const destinationMarker = new google.maps.Marker({
        position: { lat: destinationCoordinatesLat, lng: destinationCoordinatesLng },
        map,
        icon: destination,
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });

}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = "DRIVING"; //Set permanently to driving mode
    directionsService.route({
        origin: { lat: dispatcherCoordinatesLat, lng: dispatcherCoordinatesLng },
        destination: { lat: destinationCoordinatesLat, lng: destinationCoordinatesLng },
        travelMode: google.maps.TravelMode[selectedMode],
    },
        (response, status) => {
            if (status == "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Tracking request failed due to " + status);
            }
        }
    );
}