

//Price calculator
function youPay() {
    //Extract values from body
    var price0 = Number($('.itemSize0').val());
    var price1 = $('.itemSize1').val();
    var price2 = $('.itemSize2').val();
    var price3 = $('.itemSize3').val();
    var price4 = $('.itemSize4').val();
    var price5 = $('.itemSize5').val();
    var price6 = $('.itemSize6').val();
    var price7 = $('.itemSize7').val();
    var price8 = $('.itemSize8').val();
    var price9 = $('.itemSize9').val();

    if (price1 !== undefined) { var finalPrice1 = Number(price1); } else { var finalPrice1 = 0 }
    if (price2 !== undefined) { var finalPrice2 = Number(price2); } else { var finalPrice2 = 0 }
    if (price3 !== undefined) { var finalPrice3 = Number(price3); } else { var finalPrice3 = 0 }
    if (price4 !== undefined) { var finalPrice4 = Number(price4); } else { var finalPrice4 = 0 }
    if (price5 !== undefined) { var finalPrice5 = Number(price5); } else { var finalPrice5 = 0 }
    if (price6 !== undefined) { var finalPrice6 = Number(price6); } else { var finalPrice6 = 0 }
    if (price7 !== undefined) { var finalPrice7 = Number(price7); } else { var finalPrice7 = 0 }
    if (price8 !== undefined) { var finalPrice8 = Number(price8); } else { var finalPrice8 = 0 }
    if (price9 !== undefined) { var finalPrice9 = Number(price9); } else { var finalPrice9 = 0 }

    var pay = price0 + finalPrice1 + finalPrice2 + finalPrice3 + finalPrice4 + finalPrice5 + finalPrice6 + finalPrice7 + finalPrice8 + finalPrice9;

    return pay;
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