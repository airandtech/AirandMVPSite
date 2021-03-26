let youPay = document.querySelector(".price").innerHTML;
let senderName = document.querySelector(".name").innerHTML;
let email = document.querySelector('.email').innerHTML;
let phoneNumber = document.querySelector('.phoneNumber').innerHTML;
let transRef = document.querySelector('.transRef').innerHTML;

// Flutterwave API
function makePayment() {

  FlutterwaveCheckout({
    public_key: "FLWPUBK-36da305d37bd5a11ae89a5775b36ed71-X",
    tx_ref: transRef,
    amount: youPay,
    currency: "NGN",
    country: "NG",
    payment_options: "card, ussd, banktransfer, barter, paga",
    redirect_url: // specified redirect URL
      "https://www.airand.net/order",
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
      console.log(data);
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

// function makePayment() {

//   FlutterwaveCheckout({

//     public_key: "FLWPUBK-36da305d37bd5a11ae89a5775b36ed71-X",
//     tx_ref: "hooli-rttx-1920tbbtuyj34t",
//     amount: 100,
//     currency: "NGN",
//     // payment_options: "card,banktransfer,ussd",
//     meta: {
//       consumer_id: 23,
//       consumer_mac: "92a3-912ba-1192a",
//       customer: {
//         email: "Party@gmail.com",
//         phone_number: "08102909304",
//         name: "yemi desola",
//       },
//     },
//     customer: {
//       email: "Party@gmail.com",
//       phone_number: "08102909304",
//       name: "yemi desola",
//     },
//     subaccounts: [
//       {
//         id: "RS_8B3B62CAD553EBBC1D8B2DC6F11591D2",
//         transaction_charge_type: "flat_subaccount",
//         transaction_charge: 20
//       }
//     ],
//     callback: function (data) {
//       console.log(data);
//       var txid = data.transaction_id;
//       //window.location = "https://www.mobijobs.africa/callback/";
//       alert("welcome")
//     },
//     customizations: {
//       title: "My store",
//       description: "Payment for items in cart",
//       logo: "https://crypvest.co.za/images/high-res.png",
//     },
//   });

// }