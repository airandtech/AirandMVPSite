var inputs = document.getElementsByClassName('query');

function initAutocomplete() {

    var options = {
        componentRestrictions: { 'country': ['NG'] },
        fields: ['name', 'geometry']
    };

    var autocompletes = [];

    for (var i = 0; i < inputs.length; i++) {
        var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
        autocomplete.inputId = inputs[i].id;
        autocomplete.addListener('place_changed', onPlaceChanged);
        autocompletes.push(autocomplete);
    }

}

let pickupCoordinates;

function onPlaceChanged() {

    var place = this.getPlace();

    //Get address coordinates 
    pickupCoordinates = place.geometry.location;
    // alert(pickupCoordinates);


    if (!place.geometry) {
        //User did not select a prediction; reset the input field
        document.getElementById('autocomplete').placeholder = 'Address';
    } else {
        //Display details about the valid place
        document.getElementById('details').innerHTML = place.name;
    }

}