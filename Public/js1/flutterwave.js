
//Convert area to areaCode
function areaCoder(sectorMetro) {

    const island1 = ["AC001", "AC002", "AC003", "AC004", "AC005", "AC006", "AC007", "AC008"];
    const island2 = ["AC009", "AC010", "AC011", "AC012", "AC013", "AC014", "AC015", "AC016", "AC017", "AC018", "AC019", "AC020"];
    const island3 = ["AC021", "AC022", "AC023"];
    const island4 = ["AC024", "AC025", "AC026"];
    const island5 = ["AC027", "AC028", "AC029"];

    const mainland1 = ["AC030", "AC031", "AC032", "AC033", "AC034", "AC035", "AC036", "AC037", "AC038", "AC039", "AC040", "AC041", "AC042", "AC043", "AC044", "AC045", "AC046", "AC047", "AC048", "AC049", "AC050", "AC051", "AC127"];
    const mainland2 = ["AC052", "AC053", "AC054", "AC055", "AC056", "AC057", "AC058", "AC059", "AC060", "AC061", "AC062", "AC063", "AC064", "AC065", "AC066", "AC067", "AC068", "AC069", "AC070", "AC077"];
    const mainland3 = ["AC071", "AC072", "AC073", "AC074", "AC075", "AC076", "AC078", "AC079", "AC080", "AC081", "AC082", "AC083", "AC084", "AC085", "AC086", "AC087", "AC088", "AC089", "AC090", "AC091", "AC0128"];
    const mainland4 = ["AC092", "AC093", "AC094", "AC095", "AC096", "AC097", "AC098", "AC099", "AC100", "AC101", "AC102", "AC103", "AC104", "AC105", "AC106"];
    const mainland5 = ["AC107", "AC108", "AC109", "AC110", "AC111", "AC112", "AC113", "AC114", "AC115", "AC116", "AC117", "AC118", "AC119", "AC120", "AC121", "AC122", "AC123", "AC124", "AC125", "AC126"];

    if (island1.includes(sectorMetro) === true) {
        var areaCode = 5;
    }
    else if (island2.includes(sectorMetro) === true) {
        var areaCode = 4;
    }
    else if (island3.includes(sectorMetro) === true) {
        var areaCode = 3;
    }
    else if (island4.includes(sectorMetro) === true) {
        var areaCode = 2;
    }
    else if (island5.includes(sectorMetro) === true) {
        var areaCode = 1;
    }
    else if (mainland1.includes(sectorMetro) === true) {
        var areaCode = 6;
    }
    else if (mainland2.includes(sectorMetro) === true) {
        var areaCode = 7;
    }
    else if (mainland3.includes(sectorMetro) === true) {
        var areaCode = 8;
    }
    else if (mainland4.includes(sectorMetro) === true) {
        var areaCode = 9;
    }
    else if (mainland5.includes(sectorMetro) === true) {
        var areaCode = 10;
    }
    return (areaCode);

}

function youPay() {

    var pickupArea = $('.pArea').val();
    var deliveryArea0 = $('.dArea0').val();
    var deliveryArea1 = $('.dArea1').val();
    var deliveryArea2 = $('.dArea2').val();
    var deliveryArea3 = $('.dArea3').val();
    var deliveryArea4 = $('.dArea4').val();
    var deliveryArea5 = $('.dArea5').val();
    var deliveryArea6 = $('.dArea6').val();
    var deliveryArea7 = $('.dArea7').val();
    var deliveryArea8 = $('.dArea8').val();
    var deliveryArea9 = $('.dArea9').val();


    //pass area into area code function
    var pickupAreaCode = areaCoder(pickupArea);
    var deliveryAreaCode0 = areaCoder(deliveryArea0);
    if (deliveryArea1 != undefined) { var deliveryAreaCode1 = areaCoder(deliveryArea1); }
    if (deliveryArea2 != undefined) { var deliveryAreaCode2 = areaCoder(deliveryArea2); }
    if (deliveryArea3 != undefined) { var deliveryAreaCode3 = areaCoder(deliveryArea3); }
    if (deliveryArea4 != undefined) { var deliveryAreaCode4 = areaCoder(deliveryArea4); }
    if (deliveryArea5 != undefined) { var deliveryAreaCode5 = areaCoder(deliveryArea5); }
    if (deliveryArea6 != undefined) { var deliveryAreaCode6 = areaCoder(deliveryArea6); }
    if (deliveryArea7 != undefined) { var deliveryAreaCode7 = areaCoder(deliveryArea7); }
    if (deliveryArea8 != undefined) { var deliveryAreaCode8 = areaCoder(deliveryArea8); }
    if (deliveryArea9 != undefined) { var deliveryAreaCode9 = areaCoder(deliveryArea9); }

    //Distance Calculation
    if (deliveryArea0 === undefined) { var areaDelta0 = 10; }
    else { var areaDelta0 = pickupAreaCode - deliveryAreaCode0; }
    if (deliveryArea1 === undefined) { var areaDelta1 = 10; }
    else { var areaDelta1 = pickupAreaCode - deliveryAreaCode1; }
    if (deliveryArea2 === undefined) { var areaDelta2 = 10; }
    else { var areaDelta2 = pickupAreaCode - deliveryAreaCode2; }
    if (deliveryArea3 === undefined) { var areaDelta3 = 10; }
    else { var areaDelta3 = pickupAreaCode - deliveryAreaCode3; }
    if (deliveryArea4 === undefined) { var areaDelta4 = 10; }
    else { var areaDelta4 = pickupAreaCode - deliveryAreaCode4; }
    if (deliveryArea5 === undefined) { var areaDelta5 = 10; }
    else { var areaDelta5 = pickupAreaCode - deliveryAreaCode5; }
    if (deliveryArea6 === undefined) { var areaDelta6 = 10; }
    else { var areaDelta6 = pickupAreaCode - deliveryAreaCode6; }
    if (deliveryArea7 === undefined) { var areaDelta7 = 10; }
    else { var areaDelta7 = pickupAreaCode - deliveryAreaCode7; }
    if (deliveryArea8 === undefined) { var areaDelta8 = 10; }
    else { var areaDelta8 = pickupAreaCode - deliveryAreaCode8; }
    if (deliveryArea9 === undefined) { var areaDelta9 = 10; }
    else { var areaDelta9 = pickupAreaCode - deliveryAreaCode9; }

    //Pass distance values into pricing function
    var pricing0 = Number(priceModel(areaDelta0));
    var pricing1 = Number(priceModel(areaDelta1));
    var pricing2 = Number(priceModel(areaDelta2));
    var pricing3 = Number(priceModel(areaDelta3));
    var pricing4 = Number(priceModel(areaDelta4));
    var pricing5 = Number(priceModel(areaDelta5));
    var pricing6 = Number(priceModel(areaDelta6));
    var pricing7 = Number(priceModel(areaDelta7));
    var pricing8 = Number(priceModel(areaDelta8));
    var pricing9 = Number(priceModel(areaDelta9));

    var pay = pricing0 + pricing1 + pricing2 + pricing3 + pricing4 + pricing5 + pricing6 + pricing7 + pricing8 + pricing9;

    return pay;
}

function priceModel(deltaIn) {

    var fee = '';

    if (deltaIn === 0 || deltaIn === -1 || deltaIn === 1) {
        fee = 1000;
    } else if (deltaIn === -3 || deltaIn === -2 || deltaIn === 2 || deltaIn === 3) {
        fee = 1500;
    } else if (deltaIn === -5 || deltaIn === -4 || deltaIn === 4 || deltaIn === 5) {
        fee = 2000;
    } else if (deltaIn === -7 || deltaIn === -6 || deltaIn === 6 || deltaIn === 7) {
        fee = 2500;
    } else if (deltaIn === -9 || deltaIn === -8 || deltaIn === 8 || deltaIn === 9) {
        fee = 3000;
    }
    else if (deltaIn === 10) {
        fee = 0;
    }
    return fee;
}

let senderName = $(".name").val();
const pay = youPay();
let email = $(".email").val();
let phoneNumber = $(".phoneNumber").val();
let transRef = '8998709620';

// Flutterwave API
function makePayment(pay) {

    let senderName = $(".name").val();
    // let pay = youPay();
    let email = $(".email").val();
    let phoneNumber = $(".phoneNumber").val();
    let transRef = '8998709620';

    FlutterwaveCheckout({
        public_key: "FLWPUBK-36da305d37bd5a11ae89a5775b36ed71-X",
        tx_ref: transRef,
        amount: pay,
        currency: "NGN",
        country: "NG",
        payment_options: "card, ussd, banktransfer, barter, paga",
        meta: {
            consumer_id: transRef,
            // consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: email,
            phone_number: phoneNumber,
            name: senderName,
        },
        callback: function (data) {
            var form = document.getElementById('orderForm').submit();
        },
        onclose: function () {
            // close modal
        },
        customizations: {
            title: "Airand Technologies",
            description: "Urban delivery payment",
            logo: 'https://cdn.filestackcontent.com/dWqdHjO0SWqBfmG9UcVk'
        },
    });
}

function implement() {
    //Check all required fields before Running Animation
    alert('holla');
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
        // buttonAnimation();
        let pay = youPay();
        // let pay = 10;
        makePayment(pay);
    }
    if (!allAreFilled) {
        alert('Sorry, you have to fill all the required fields!');
    }

}