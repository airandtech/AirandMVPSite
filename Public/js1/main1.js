// Pickup details visibility toggle
$(".pickup-details").slideUp();
$(".pickup-button").on("click", function () {
    $(".pickup-details").slideToggle();
});

// First Delivery details visibility toggle
$(".delivery-details").slideUp();
$(".delivery-button").on("click", function () {
    $(".delivery-details").slideToggle();
});

//Price Estimate
var pickupEstimate = $('.estimate-pickup-area').val;
var deliveryEstimate = $('.estimate-delivery-area').val;

$('.estimate-button').on("click", function () {
    alert(pickupEstimate);
    alert(deliveryEstimate);
    console.log(pickupEstimate);
});

//Initialise counter to zero
var iCnt = 0;

let divTrigger = [];

//Add another delivery
$(".add-another-delivery").on("click", function () {

    if (iCnt <= 9) {
        iCnt = iCnt + 1;
        //Create new delivery button
        var idNumber = "deliveryButton" + iCnt;
        var idRemoveNumber = "remove" + iCnt;
        var deliveryButton = $("<button  type = \"button\" class = \"delivery-button\" id = '" + idNumber + "' ><i class=\"icon1 fas fa-truck\"></i> Delivery details <a class=\"remove\" id =  '" + idRemoveNumber + "'> <f class=\"red\">Remove</f> </a> </button>");
        $(".delivery-tab").append(deliveryButton);

        //Create new delivery div
        var idDivNumber = "deliveryDiv" + iCnt;
        var deliveryDiv = $("<div class = \"col-sm-12 form-group\" id = '" + idDivNumber + "' ></div>");

        //Append new div to delivery tab
        $(".delivery-tab").append(deliveryDiv);
        var deliveryDiv4Jquery = "#" + idDivNumber;

        divTrigger.push(deliveryDiv);


        //Append Select to div
        var deliveryID = "delivery-area" + iCnt;
        var itemSize = "itemSize" + iCnt;

        //Create new inputs name
        var addressInputName = "dAddress" + iCnt;
        var dynamicId = 'query-' + (iCnt + 1);
        var receiverName = "rName" + iCnt;
        var receiverPhoneNumber = "rPhoneNumber" + iCnt;
        var itemDescriptionName = "iDescription" + iCnt;

        //Append inputs to div
        $(deliveryDiv4Jquery).append($("<input name= '" + addressInputName + "'  id= '" + dynamicId + "' class = \"col-sm-12 form-group query\" type= \"text\" placeholder= \"Delivery address\" required />"));
        $(deliveryDiv4Jquery).append($("<input name= '" + receiverName + "' class = \"col-sm-12 form-group\" type= \"text\" placeholder= \"Receiver name\" required />"));
        $(deliveryDiv4Jquery).append($("<input name= '" + receiverPhoneNumber + "' class = \"col-sm-12 form-group\" type= \"tel\" placeholder= \"Receiver phone number\" required />"));
        $(deliveryDiv4Jquery).append($("<input name= '" + itemDescriptionName + "' class = \"col-sm-12 form-group\" type= \"text\" placeholder= \"Item description\" required />"));

        //Declaration of select options
        var itemSizeID = "#itemSize" + iCnt;
        $(deliveryDiv4Jquery).append($("<select name = '" + itemSize + "' class = '" + itemSize + "' id= '" + itemSize + "' required />"));

        $(itemSizeID).append(('<option value = "" >Select item size category (Approx.)*</option>'));
        $(itemSizeID).append(('<option value = "750" >Less than a shoe box (10cm x 10cm x 10cm) - N750</option>'));
        $(itemSizeID).append(('<option value = "1000" >Just like a shoe box (20cm x 10cm x 10cm) - N1000</option>'));
        $(itemSizeID).append(('<option value = "1500" >Bigger than a shoe box (30cm x 10cm x 10cm) -N1500</option>'));

        // Load Google Maps Script dynamically on add delivery click
        var google_maps_script = document.createElement('script');
        google_maps_script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAgR7PScd7Y6QOKvWw5eq4lYVHi4eLK3xY&libraries=places&callback=initAutocomplete');
        document.head.appendChild(google_maps_script);

    }
    else {
        alert("You can only make a maximum of 10 deliveries at a time.");
    }

    //Remove delivery
    $(".remove").on("click", function (id) {
        deleter(this.id);
    });

    //Toggle delivery
    $(".delivery-button").on("click", function (id) {
        toggler(this.id);
        toggler.end();
    });

});



function deleter(id) {

    switch (id) {

        case "remove1":
            $("#deliveryButton1").remove();
            $("#deliveryDiv1").remove();
            break;

        case "remove2":
            $("#deliveryButton2").remove();
            $("#deliveryDiv2").remove();
            break;

        case "remove3":
            $("#deliveryButton3").remove();
            $("#deliveryDiv3").remove();
            break;

        case "remove4":
            $("#deliveryButton4").remove();
            $("#deliveryDiv4").remove();
            break;

        case "remove5":
            $("#deliveryButton5").remove();
            $("#deliveryDiv5").remove();
            break;

        case "remove6":
            $("#deliveryButton6").remove();
            $("#deliveryDiv6").remove();
            break;

        case "remove7":
            $("#deliveryButton7").remove();
            $("#deliveryDiv7").remove();
            break;

        case "remove8":
            $("#deliveryButton8").remove();
            $("#deliveryDiv8").remove();
            break;

        case "remove9":
            $("#deliveryButton9").remove();
            $("#deliveryDiv9").remove();
            break;

        case "remove10":
            $("#deliveryButton10").remove();
            $("#deliveryDiv10").remove();
            break;
        default:
            console.log(innerHTML);
    }
}


function toggler(id) {

    switch (id) {

        case "deliveryButton1":
            $("#deliveryDiv1").slideToggle();
            break;

        case "deliveryButton2":
            $("#deliveryDiv2").slideToggle();
            break;

        case "deliveryButton3":
            $("#deliveryDiv3").slideToggle();
            break;

        case "deliveryButton4":
            $("#deliveryDiv4").slideToggle();
            break;

        case "deliveryButton5":
            $("#deliveryDiv5").slideToggle();
            break;

        case "deliveryButton6":
            $("#deliveryDiv6").slideToggle();
            break;

        case "deliveryButton7":
            $("#deliveryDiv7").slideToggle();
            break;

        case "deliveryButton8":
            $("#deliveryDiv8").slideToggle();
            break;

        case "deliveryButton9":
            $("#deliveryDiv9").slideToggle();
            break;

        case "deliveryButton10":
            $("#deliveryDiv10").slideToggle();
            break;
        default:
            console.log(id);
    }
}

//Check all required fields before Running Animation
document.getElementById("track").onclick = function () {

    let allAreFilled = true;
    document.getElementById("trackForm").querySelectorAll("[required]").forEach(function (i) {

        if (!allAreFilled) return;
        if (!i.value) allAreFilled = false;
        if (i.type === "radio") {
            let radioValueCheck = false;
            document.getElementById("trackForm").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {

                if (r.checked) radioValueCheck = true;
            })
            allAreFilled = radioValueCheck;
        }
    })
    if (allAreFilled) {
        buttonAnimation();
    }
    // if (!allAreFilled) {
    //   alert('Sorry, you have to fill all the required fields!');
    // }
};

//Button Animation function
function buttonAnimation() {

    var twoToneButton = document.querySelector('.twoToneButton');

    // twoToneButton.addEventListener("click", function() {
    twoToneButton.innerHTML = "Processing...";
    twoToneButton.classList.add('spinning');

    setTimeout(
        function () {
            twoToneButton.classList.remove('spinning');
            twoToneButton.innerHTML = "Tracking order...";
            twoToneButton.classList.add('spinning');

        }, 1500);
    // }, false);

}

// // When the user clicks on div, open the popup
// function popup() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");

//     //Proceed to flutterwave after popup
//     if (popup.classList.contains('show') === false) {
//         implement();
//     }
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var cont = document.getElementsByClassName("continue");

// When the user clicks the button, open the modal 
function modalShot() {

    //Check all required fields before Running Animation
    let allAreFilled = true;
    document.getElementById("orderForm").querySelectorAll("[required]").forEach(function (i) {

        if (!allAreFilled) return;
        if (!i.value) allAreFilled = false;
        if (i.type === "radio") {
            let radioValueCheck = false;
            document.getElementById("orderForm").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {

                if (r.checked) radioValueCheck = true;
            })
            allAreFilled = radioValueCheck;
        }
    })
    if (allAreFilled) {
        modal.style.display = "block";
    }
    if (!allAreFilled) {
        alert('Sorry, you have to fill all the required fields!');
    }

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    implement();
}

// When the user clicks on comtinue, close the modal and head to flutterwave modal
cont.onclick = function () {
    modal.style.display = "none";
    implement();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        implement();
    }
}

function ecommerceTCs() {
    modal.style.display = "block";
}