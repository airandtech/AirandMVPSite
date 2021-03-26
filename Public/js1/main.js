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
    var deliveryButton = $("<button  type = \"button\" class = \"delivery-button\" id = '" + idNumber + "' ><i class=\"icon1 fas fa-truck\"></i> Delivery details <a class=\"remove\" id =  '" + idRemoveNumber + "'> Remove </a> </button>");
    $(".delivery-tab").append(deliveryButton);

    //Create new delivery div
    var idDivNumber = "deliveryDiv" + iCnt;
    var deliveryDiv = $("<div class = \"new-delivery-details\" id = '" + idDivNumber + "' ></div>");

    //Append new div to delivery tab
    $(".delivery-tab").append(deliveryDiv);
    var deliveryDiv4Jquery = "#" + idDivNumber;

    divTrigger.push(deliveryDiv);


    //Append Select to div
    var deliveryID = "delivery-area" + iCnt;
    var selectName = "dArea" + iCnt;

    //Declaration of select options
    var deliveryArea = "#delivery-area" + iCnt;
    $(deliveryDiv4Jquery).append($("<select name = '" + selectName + "' id = '" + deliveryID + "' class = '" + selectName + "' required />"));

    $(deliveryArea).append(('<option value = "" > Select delivery area </option>'));
    $(deliveryArea).append(('<optgroup label = "Island 1" >'));
    $(deliveryArea).append(('<option value = "AC001" > Ikoyi </option>'));
    $(deliveryArea).append(('<option value = "AC002" > Lagos Island </option>'));
    $(deliveryArea).append(('<option value = "AC003" > CMS </option>'));
    $(deliveryArea).append(('<option value = "AC004" > Marina </option>'));
    $(deliveryArea).append(('<option value = "AC005" > Victoria Island </option>'));
    $(deliveryArea).append(('<option value = "AC006" > Oniru </option>'));
    $(deliveryArea).append(('<option value = "AC007" > Lekki Phase 1 </option>'));
    $(deliveryArea).append(('<option value = "AC008" > Ikate </option>'));
    $(deliveryArea).append(('<optgroup label = "Island 2" >'));
    $(deliveryArea).append(('<option value = "AC009" > Ajah </option>'));
    $(deliveryArea).append(('<option value = "AC010" > Thomas Estate </option>'));
    $(deliveryArea).append(('<option value = "AC011" > Badore </option>'));
    $(deliveryArea).append(('<option value = "AC012" > Langbasa </option>'));
    $(deliveryArea).append(('<option value = "AC013" > Addo road </option>'));
    $(deliveryArea).append(('<option value = "AC014" > Ikota </option>'));
    $(deliveryArea).append(('<option value = "AC015" > VGC </option>'));
    $(deliveryArea).append(('<option value = "AC016" > Agungi </option>'));
    $(deliveryArea).append(('<option value = "AC017" > Jakande </option>'));
    $(deliveryArea).append(('<option value = "AC018" > Osapa London </option>'));
    $(deliveryArea).append(('<option value = "AC019" > Igbo-Efon </option>'));
    $(deliveryArea).append(('<option value = "AC020" > Chevron </option>'));
    $(deliveryArea).append(('<optgroup label = "Island 3" >'));
    $(deliveryArea).append(('<option value = "AC021" > Abraham Adesanya </option>'));
    $(deliveryArea).append(('<option value = "AC022" > Lagos Business School </option>'));
    $(deliveryArea).append(('<option value = "AC023" > Ogombo </option>'));
    $(deliveryArea).append(('<optgroup label = "Island 4" >'));
    $(deliveryArea).append(('<option value = "AC024" > Abijo </option>'));
    $(deliveryArea).append(('<option value = "AC025" > Sangotedo </option>'));
    $(deliveryArea).append(('<option value = "AC026" > Crown Estate </option>'));
    $(deliveryArea).append(('<optgroup label = "Island 5" >'));
    $(deliveryArea).append(('<option value = "AC027" > Awoyaya </option>'));
    $(deliveryArea).append(('<option value = "AC028" > Ibeju-Lekki </option>'));
    $(deliveryArea).append(('<option value = "AC029" > Lakowe </option>'));
    $(deliveryArea).append(('<optgroup label = "Mainland 1" >'));
    $(deliveryArea).append(('<option value = "AC030" > Alagomeji </option>'));
    $(deliveryArea).append(('<option value = "AC031" > Sabo </option>'));
    $(deliveryArea).append(('<option value = "AC032" > Yaba </option>'));
    $(deliveryArea).append(('<option value = "AC033" > Shomolu </option>'));
    $(deliveryArea).append(('<option value = "AC034" > Anthony </option>'));
    $(deliveryArea).append(('<option value = "AC035" > Bariga </option>'));
    $(deliveryArea).append(('<option value = "AC036" > Costain </option>'));
    $(deliveryArea).append(('<option value = "AC037" > Ebutte Metta </option>'));
    $(deliveryArea).append(('<option value = "AC038" > Gbagada </option>'));
    $(deliveryArea).append(('<option value = "AC039" > Iganmu </option>'));
    $(deliveryArea).append(('<option value = "AC040" > Ilupeju </option>'));
    $(deliveryArea).append(('<option value = "AC041" > Iponri </option>'));
    $(deliveryArea).append(('<option value = "AC042" > Iwaya </option>'));
    $(deliveryArea).append(('<option value = "AC043" > Jibowu </option>'));
    $(deliveryArea).append(('<option value = "AC044" > Obanikoro </option>'));
    $(deliveryArea).append(('<option value = "AC045" > Onigbongbo </option>'));
    $(deliveryArea).append(('<option value = "AC127" > Onipanu </option>'));
    $(deliveryArea).append(('<option value = "AC046" > Oworonshoki </option>'));
    $(deliveryArea).append(('<option value = "AC047" > Surulere </option>'));
    $(deliveryArea).append(('<option value = "AC048" > Anthony Village </option>'));
    $(deliveryArea).append(('<option value = "AC049" > Idi Araba </option>'));
    $(deliveryArea).append(('<optgroup label = "Mainland 2" >'));
    $(deliveryArea).append(('<option value = "AC050" > Ijora </option>'));
    $(deliveryArea).append(('<option value = "AC051" > Ajao Estate </option>'));
    $(deliveryArea).append(('<option value = "AC052" > Mafoluku </option>'));
    $(deliveryArea).append(('<option value = "AC053" > Shangisha </option>'));
    $(deliveryArea).append(('<option value = "AC054" > Ogba </option>'));
    $(deliveryArea).append(('<option value = "AC055" > Egbeda </option>'));
    $(deliveryArea).append(('<option value = "AC056" > Oshodi </option>'));
    $(deliveryArea).append(('<option value = "AC057" > Dopemu </option>'));
    $(deliveryArea).append(('<option value = "AC058" > Oyingbo </option>'));
    $(deliveryArea).append(('<option value = "AC059" > Shogunle </option>'));
    $(deliveryArea).append(('<option value = "AC060" > Ikeja </option>'));
    $(deliveryArea).append(('<option value = "AC061" > Maryland </option>'));
    $(deliveryArea).append(('<option value = "AC062" > MMA (Local Airport) </option>'));
    $(deliveryArea).append(('<option value = "AC063" > MMA (International Airport) </option>'));
    $(deliveryArea).append(('<option value = "AC064" > Ogudu </option>'));
    $(deliveryArea).append(('<option value = "AC065" > Omole Phase 1 </option>'));
    $(deliveryArea).append(('<option value = "AC066" > Oregun </option>'));
    $(deliveryArea).append(('<option value = "AC067" > Orile </option>'));
    $(deliveryArea).append(('<option value = "AC068" > Mushin </option>'));
    $(deliveryArea).append(('<option value = "AC069" > Agidingbi </option>'));
    $(deliveryArea).append(('<option value = "AC070" > Alausa </option>'));
    $(deliveryArea).append(('<option value = "AC077" > Ketu </option>'));
    $(deliveryArea).append(('<optgroup label = "Mainland 3" >'));
    $(deliveryArea).append(('<option value = "AC071" > Ago Palace </option>'));
    $(deliveryArea).append(('<option value = "AC072" > Ajegunle </option>'));
    $(deliveryArea).append(('<option value = "AC073" > Navy Town </option>'));
    $(deliveryArea).append(('<option value = "AC074" > Mile 12 </option>'));
    $(deliveryArea).append(('<option value = "AC075" > Isheri </option>'));
    $(deliveryArea).append(('<option value = "AC076" > Kirikiri </option>'));
    $(deliveryArea).append(('<option value = "AC078" > Iyana Ipaja </option>'));
    $(deliveryArea).append(('<option value = "AC079" > Itire </option>'));
    $(deliveryArea).append(('<option value = "AC080" > Isolo </option>'));
    $(deliveryArea).append(('<option value = "AC081" > Idi Mangoro </option>'));
    $(deliveryArea).append(('<option value = "AC082" > Festac </option>'));
    $(deliveryArea).append(('<option value = "AC083" > Amuwo Odofin </option>'));
    $(deliveryArea).append(('<option value = "AC084" > Alapere </option>'));
    $(deliveryArea).append(('<option value = "AC085" > Agege </option>'));
    $(deliveryArea).append(('<option value = "AC086" > Magodo </option>'));
    $(deliveryArea).append(('<option value = "AC087" > Ifako Ijaye </option>'));
    $(deliveryArea).append(('<option value = "AC088" > Amukoko </option>'));
    $(deliveryArea).append(('<option value = "AC089" > Apapa </option>'));
    $(deliveryArea).append(('<option value = "AC090" > Ojodu </option>'));
    $(deliveryArea).append(('<option value = "AC091" > Orile Agege </option>'));
    $(deliveryArea).append(('<option value = "AC128" > Okota </option>'));
    $(deliveryArea).append(('<optgroup label = "Mainland 4" >'));
    $(deliveryArea).append(('<option value = "AC092" > Abule Egba </option>'));
    $(deliveryArea).append(('<option value = "AC093" > Abule Osun </option>'));
    $(deliveryArea).append(('<option value = "AC094" > Akowonjo </option>'));
    $(deliveryArea).append(('<option value = "AC095" > Alimosho </option>'));
    $(deliveryArea).append(('<option value = "AC096" > Ejigbo </option>'));
    $(deliveryArea).append(('<option value = "AC097" > Gowon Estate </option>'));
    $(deliveryArea).append(('<option value = "AC098" > Idinmu </option>'));
    $(deliveryArea).append(('<option value = "AC099" > Ikotun </option>'));
    $(deliveryArea).append(('<option value = "AC100" > Ipaja </option>'));
    $(deliveryArea).append(('<option value = "AC101" > Maza Maza </option>'));
    $(deliveryArea).append(('<option value = "AC102" > Mile 2 </option>'));
    $(deliveryArea).append(('<option value = "AC103" > Ojo </option>'));
    $(deliveryArea).append(('<option value = "AC104" > Satelite Town </option>'));
    $(deliveryArea).append(('<option value = "AC105" > Ayobo </option>'));
    $(deliveryArea).append(('<option value = "AC106" > New Oko Oba </option>'));
    $(deliveryArea).append(('<optgroup label = "Mainland 5" >'));
    $(deliveryArea).append(('<option value = "AC107" > Ajangbadi </option>'));
    $(deliveryArea).append(('<option value = "AC108" > Alaba International </option>'));
    $(deliveryArea).append(('<option value = "AC109" > Alaba Rago </option>'));
    $(deliveryArea).append(('<option value = "AC110" > Alagbado </option>'));
    $(deliveryArea).append(('<option value = "AC111" > Fagba </option>'));
    $(deliveryArea).append(('<option value = "AC112" > Igando </option>'));
    $(deliveryArea).append(('<option value = "AC113" > Ijaiye </option>'));
    $(deliveryArea).append(('<option value = "AC114" > Iju </option>'));
    $(deliveryArea).append(('<option value = "AC115" > Ikorodu </option>'));
    $(deliveryArea).append(('<option value = "AC116" > Ishaga </option>'));
    $(deliveryArea).append(('<option value = "AC117" > Iyana Iba </option>'));
    $(deliveryArea).append(('<option value = "AC118" > Meiran </option>'));
    $(deliveryArea).append(('<option value = "AC119" > Owode </option>'));
    $(deliveryArea).append(('<option value = "AC120" > Trade Fair </option>'));
    $(deliveryArea).append(('<option value = "AC121" > Ijegun </option>'));
    $(deliveryArea).append(('<option value = "AC122" > Isheri </option>'));
    $(deliveryArea).append(('<option value = "AC123" > Olofin </option>'));
    $(deliveryArea).append(('<option value = "AC124" > Ikorodu-Agric </option>'));
    $(deliveryArea).append(('<option value = "AC125" > Ikorodu-Laspotech </option>'));
    $(deliveryArea).append(('<option value = "AC126" > Ikorodu-Igbogbo </option>'));

    //Create new inputs name
    var addressInputName = "dAddress" + iCnt;
    var dynamicId = 'query-' + (iCnt + 1);
    var receiverName = "rName" + iCnt;
    var receiverPhoneNumber = "rPhoneNumber" + iCnt;
    var itemDescriptionName = "iDescription" + iCnt;

    //Append inputs to div
    $(deliveryDiv4Jquery).append('<label class="newinput" > Address </label>');
    $(deliveryDiv4Jquery).append($("<input name= '" + addressInputName + "'  id= '" + dynamicId + "' class = \"query\" type= \"text\" placeholder= \"Delivery address\" required />"));
    $(deliveryDiv4Jquery).append('<label class="newinput" > Name </label>');
    $(deliveryDiv4Jquery).append($("<input name= '" + receiverName + "' class = \"newinput\" type= \"text\" placeholder= \"Receiver name\" required />"));
    $(deliveryDiv4Jquery).append('<label class="newinput" > Phone number </label>');
    $(deliveryDiv4Jquery).append($("<input name= '" + receiverPhoneNumber + "' class = \"newinput\" type= \"tel\" placeholder= \"Receiver phone number\" required />"));
    $(deliveryDiv4Jquery).append('<label class="newinput" > Description </label>');
    $(deliveryDiv4Jquery).append($("<input name= '" + itemDescriptionName + "' class = \"newinput\" type= \"text\" placeholder= \"Item description\" />"));

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