<<<<<<< HEAD
//Require Packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
const https = require("https");
const { stringify } = require("querystring");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const fetch = require('node-fetch');
// import alert from 'alert';
// const alert = require('alert');
// const flash = require('connect-flash'); 
// const cookieParser = require('cookie-parser');

// const popupS = require('popups');

// const flutterwave = require(__dirname + '/flutterwave.js');

// console.log(flutterwave());

var router = express.Router();
var session = require('express-session');
// var flash = require('connect-flash');
// const { response } = require("express");
// // app.configure(function () {
// app.use(cookieParser('keyboard cat'));
// app.use(session({ cookie: { maxAge: 60000 } }));
// app.use(flash());
// // });

require("dotenv").config();

let transRef;

//Declare npm packages to be used
app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
// app.use(flash());

//Home page
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//Order page
app.get("/order", function (req, res) {
    res.sendFile(__dirname + "/index-order.html");
});

app.get("/contact", function (req, res, next) {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/terms-of-service", function (req, res) {
    res.sendFile(__dirname + "/terms-of-service.html");
});

app.get("/privacy-policy", function (req, res) {
    res.sendFile(__dirname + "/privacy-policy.html");
});

app.get("/partner-onboarding-guide", function (req, res) {
    res.sendFile(__dirname + "/partner-onboarding-guide.html");
});

app.post('/contact', function (req, res) {

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let company = req.body.company;
    let message = req.body.message;

    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0IiwibmJmIjoxNjEyMjk4ODU1LCJleHAiOjE4MzMxMzcyNTUsImlhdCI6MTYxMjI5ODg1NX0.3zczffQao8D4BzEsgNjA-B-rTWbk6beUDK6HQgkRXoE"; //token

    const url = 'https://airandapi.azurewebsites.net/api/email/send';
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`,

    }
    const mail = {
        name: "name",
        to: 'hello@airand.net',
        message: `${name} || ${email} || ${phone} || ${company} || ${message}`,
        subject: 'Airand Contact Centre'
    };

    const jsonMail = JSON.stringify(mail);

    console.log(mail);

    fetch(url, { method: 'POST', headers: headers, body: jsonMail })
        .then((res) => {
            return res.json()
        })
        .then((json) => {

            //Success page
            if (json.status === true) {
                res.render("contact", {
                    message: 'Message successfully sent!'
                });
            }
            // failure page
            else {
                res.render("contact", {
                    message: `${response.statusCode} An error occured, message not sent!`
                });
            }

            // Do something with the returned data.
            console.log(json);

        });
});


app.post("/order", function (req, res, next) {

    //Constructor for other deliveries
    function Delivery(address, regionCode, areaCode, name, email, phone, description) {
        this.address = address;
        this.regionCode = regionCode;
        this.areaCode = areaCode;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.description = description;
    }

    //declare constants
    var pickupArea = (req.body.pArea);
    // var regionCode = ;
    var pickupAddress = req.body.pAddress;
    var senderName = req.body.sName;
    var senderPhoneNumber = req.body.sPhoneNumber;
    var email = req.body.email;

    var deliveryArea0 = (req.body.dArea0);
    var deliveryAddress0 = req.body.dAddress0;
    var receiverName0 = req.body.rName0;
    var receiverPhoneNumber0 = req.body.rPhoneNumber0;
    var itemDescription0 = req.body.iDescription0;

    var deliveryArea1 = (req.body.dArea1);
    var deliveryAddress1 = (req.body.dAddress1);
    var receiverName1 = (req.body.rName1);
    var receiverName1 = (req.body.rPhoneNumber1);
    var itemDescription1 = (req.body.iDescription1);

    var deliveryArea2 = (req.body.dArea2);
    var deliveryAddress2 = (req.body.dAddress2);
    var receiverName2 = (req.body.rName2);
    var receiverPhoneNumber2 = (req.body.rPhoneNumber2);
    var itemDescription2 = (req.body.iDescription2);

    var deliveryArea3 = (req.body.dArea3);
    var deliveryAddress3 = (req.body.dAddress3);
    var receiverName3 = (req.body.rName3);
    var receiverPhoneNumber3 = (req.body.rPhoneNumber3);
    var itemDescription3 = (req.body.iDescription3);

    var deliveryArea4 = (req.body.dArea4);
    var deliveryAddress4 = (req.body.dAddress4);
    var receiverName4 = (req.body.rName4);
    var receiverPhoneNumber4 = (req.body.rPhoneNumber4);
    var itemDescription4 = (req.body.iDescription4);

    var deliveryArea5 = (req.body.dArea5);
    var deliveryAddress5 = (req.body.dAddress5);
    var receiverName5 = (req.body.rName5);
    var receiverPhoneNumber5 = (req.body.rPhoneNumber5);
    var itemDescription5 = (req.body.iDescription5);

    var deliveryArea6 = (req.body.dArea6);
    var deliveryAddress6 = (req.body.dAddress6);
    var receiverName6 = (req.body.rName6);
    var receiverPhoneNumber6 = (req.body.rPhoneNumber6);
    var itemDescription6 = (req.body.iDescription6);

    var deliveryArea7 = (req.body.dArea7);
    var deliveryAddress7 = (req.body.dAddress7);
    var receiverName7 = (req.body.rName7);
    var receiverPhoneNumber7 = (req.body.rPhoneNumber7);
    var itemDescription7 = (req.body.iDescription7);

    var deliveryArea8 = (req.body.dArea8);
    var deliveryAddress8 = (req.body.dAddress8);
    var receiverName8 = (req.body.rName8);
    var receiverPhoneNumber8 = (req.body.rPhoneNumber8);
    var itemDescription8 = (req.body.iDescription8);

    var deliveryArea9 = (req.body.dArea9);
    var deliveryAddress9 = (req.body.dAddress9);
    var receiverName9 = (req.body.rName9);
    var receiverPhoneNumber9 = (req.body.rPhoneNumber9);
    var itemDescription9 = (req.body.iDescription9);

    //pass area into area code function
    var pickupAreaCode = areaCoder(pickupArea)[0];
    var deliveryAreaCode0 = areaCoder(deliveryArea0)[0];
    var deliveryAreaCode1 = areaCoder(deliveryArea1)[0];
    var deliveryAreaCode2 = areaCoder(deliveryArea2)[0];
    var deliveryAreaCode3 = areaCoder(deliveryArea3)[0];
    var deliveryAreaCode4 = areaCoder(deliveryArea4)[0];
    var deliveryAreaCode5 = areaCoder(deliveryArea5)[0];
    var deliveryAreaCode6 = areaCoder(deliveryArea6)[0];
    var deliveryAreaCode7 = areaCoder(deliveryArea7)[0];
    var deliveryAreaCode8 = areaCoder(deliveryArea8)[0];
    var deliveryAreaCode9 = areaCoder(deliveryArea9)[0];

    var pickupRegionCode = areaCoder(pickupArea)[1];
    var deliveryRegionCode0 = areaCoder(deliveryArea0)[1];
    var deliveryRegionCode1 = areaCoder(deliveryArea1)[1];
    var deliveryRegionCode2 = areaCoder(deliveryArea2)[1];
    var deliveryRegionCode3 = areaCoder(deliveryArea3)[1];
    var deliveryRegionCode4 = areaCoder(deliveryArea4)[1];
    var deliveryRegionCode5 = areaCoder(deliveryArea5)[1];
    var deliveryRegionCode6 = areaCoder(deliveryArea6)[1];
    var deliveryRegionCode7 = areaCoder(deliveryArea7)[1];
    var deliveryRegionCode8 = areaCoder(deliveryArea8)[1];
    var deliveryRegionCode9 = areaCoder(deliveryArea9)[1];

    //Containing packet declaration
    const data = {
        pickUp: {
            address: pickupAddress,
            regionCode: pickupRegionCode,
            areaCode: pickupArea,
            name: senderName,
            email: email,
            phone: senderPhoneNumber
        },
        delivery: [{
            address: deliveryAddress0,
            regionCode: deliveryRegionCode0,
            areaCode: deliveryArea0,
            name: receiverName0,
            email: email,
            phone: receiverPhoneNumber0,
            description: itemDescription0
        }]
    }

    //Push other delivery data into output object
    if (deliveryArea1 !== undefined) {
        var delivery1 = new Delivery(deliveryAddress1, deliveryRegionCode1, deliveryArea1, receiverName1, email, receiverName1, itemDescription1);
        data.delivery.push(delivery1);
    }

    if (deliveryArea2 !== undefined) {
        var delivery2 = new Delivery(deliveryAddress2, deliveryRegionCode2, deliveryArea2, receiverName2, email, receiverPhoneNumber2, itemDescription2);
        data.delivery.push(delivery2);
    }

    if (deliveryArea3 !== undefined) {
        var delivery3 = new Delivery(deliveryAddress3, deliveryRegionCode3, deliveryArea3, receiverName3, email, receiverPhoneNumber3, itemDescription3);
        data.delivery.push(delivery3);
    }

    if (deliveryArea4 !== undefined) {
        var delivery4 = new Delivery(deliveryAddress4, deliveryRegionCode4, deliveryArea4, receiverName4, email, receiverPhoneNumber4, itemDescription4);
        data.delivery.push(delivery4);
    }

    if (deliveryArea5 !== undefined) {
        var delivery5 = new Delivery(deliveryAddress5, deliveryRegionCode5, deliveryArea5, receiverName5, email, receiverPhoneNumber5, itemDescription5);
        data.delivery.push(delivery5);
    }

    if (deliveryArea6 !== undefined) {
        var delivery6 = new Delivery(deliveryAddress6, deliveryRegionCode6, deliveryArea6, receiverName6, email, receiverPhoneNumber6, itemDescription6);
        data.delivery.push(delivery6);
    }

    if (deliveryArea7 !== undefined) {
        var delivery7 = new Delivery(deliveryAddress7, deliveryRegionCode7, deliveryArea7, receiverName7, email, receiverPhoneNumber7, itemDescription7);
        data.delivery.push(delivery7);
    }

    if (deliveryArea8 !== undefined) {
        var delivery8 = new Delivery(deliveryAddress8, deliveryRegionCode8, deliveryArea8, receiverName8, email, receiverPhoneNumber8, itemDescription8);
        data.delivery.push(delivery8);
    }

    if (deliveryArea9 !== undefined) {
        var delivery9 = new Delivery(deliveryAddress9, deliveryRegionCode9, deliveryArea9, receiverName9, email, receiverPhoneNumber9, itemDescription9);
        data.delivery.push(delivery9);
    }

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
            var regionCode = "ISL001";
        } else if (island2.includes(sectorMetro) === true) {
            var areaCode = 4;
            var regionCode = "ISL002";
        } else if (island3.includes(sectorMetro) === true) {
            var areaCode = 3;
            var regionCode = "ISL003";
        } else if (island4.includes(sectorMetro) === true) {
            var areaCode = 2;
            var regionCode = "ISL004";
        } else if (island5.includes(sectorMetro) === true) {
            var areaCode = 1;
            var regionCode = "ISL005";
        } else if (mainland1.includes(sectorMetro) === true) {
            var areaCode = 6;
            var regionCode = "MLD001";
        } else if (mainland2.includes(sectorMetro) === true) {
            var areaCode = 7;
            var regionCode = "MLD002";
        } else if (mainland3.includes(sectorMetro) === true) {
            var areaCode = 8;
            var regionCode = "MLD003";
        } else if (mainland4.includes(sectorMetro) === true) {
            var areaCode = 9;
            var regionCode = "MLD004";
        } else if (mainland5.includes(sectorMetro) === true) {
            var areaCode = 10;
            var regionCode = "MLD005";
        }
        return [areaCode, regionCode];

    }

    //Distance Calculation
    if (deliveryArea0 === undefined) { var areaDelta0 = 10; } else { var areaDelta0 = pickupAreaCode - deliveryAreaCode0; }
    if (deliveryArea1 === undefined) { var areaDelta1 = 10; } else { var areaDelta1 = pickupAreaCode - deliveryAreaCode1; }
    if (deliveryArea2 === undefined) { var areaDelta2 = 10; } else { var areaDelta2 = pickupAreaCode - deliveryAreaCode2; }
    if (deliveryArea3 === undefined) { var areaDelta3 = 10; } else { var areaDelta3 = pickupAreaCode - deliveryAreaCode3; }
    if (deliveryArea4 === undefined) { var areaDelta4 = 10; } else { var areaDelta4 = pickupAreaCode - deliveryAreaCode4; }
    if (deliveryArea5 === undefined) { var areaDelta5 = 10; } else { var areaDelta5 = pickupAreaCode - deliveryAreaCode5; }
    if (deliveryArea6 === undefined) { var areaDelta6 = 10; } else { var areaDelta6 = pickupAreaCode - deliveryAreaCode6; }
    if (deliveryArea7 === undefined) { var areaDelta7 = 10; } else { var areaDelta7 = pickupAreaCode - deliveryAreaCode7; }
    if (deliveryArea8 === undefined) { var areaDelta8 = 10; } else { var areaDelta8 = pickupAreaCode - deliveryAreaCode8; }
    if (deliveryArea9 === undefined) { var areaDelta9 = 10; } else { var areaDelta9 = pickupAreaCode - deliveryAreaCode9; }

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

    //Add all prices
    function youPay() {
        var pay = pricing0 + pricing1 + pricing2 + pricing3 + pricing4 + pricing5 + pricing6 + pricing7 + pricing8 + pricing9;
        return pay;
    }
    var nowPay = youPay();
    //export to success ejs 
    module.exports = {
        price: youPay()
    }

    //Pricing function
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
        } else if (deltaIn === 10) {
            fee = 0;
        }
        return fee;
    }

    // Convert data to json format
    const jsonData = JSON.stringify(data);

    const url = "https://airandapi.azurewebsites.net/api/dispatch/order";
    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3IiwibmJmIjoxNjA4MzY2OTE3LCJleHAiOjE4MjkyMDUzMTcsImlhdCI6MTYwODM2NjkxN30.2qiGtHae5DqzYG3PFY7UTOHmwtPcuNccqPbeSsl8XlU"; //token

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + access_token // token
        },
    };

    //Post data via http protocol to API endpoint
    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {

            const dataIn = JSON.parse(data);
            console.log(dataIn);
            const paymentUrl = dataIn.data.paymentLink;
            const transactionId = dataIn.data.transactionId;

            transRef = transactionId;

            console.log(response.statusCode);

            //Success page
            if (response.statusCode === 200) {

                res.render("success", {
                    price: nowPay,
                    name: senderName + ",",
                    email: email,
                    phone: senderPhoneNumber,
                    transRef: transRef
                });
            }
            // failure page
            else {
                res.sendFile(__dirname + "/failure.html");
            }
        })
    });

    //send JSON file to server host
    request.write(jsonData);
    request.end();

    return nowPay;

});

app.post('/order/e-commerce', function (req, res) {

    //Constructor for other deliveries
    function Delivery(address, name, phone, description, cost, lat, lng) {
        this.address = address;
        this.name = name;
        this.phone = phone;
        this.description = description;
        this.cost = cost;
        this.lat = lat;
        this.lng = lng;
    }

    let addCoord = []; //Array to input Address coordinates

    //declare constants
    var pickupAddress = req.body.pAddress;
    var senderName = req.body.sName;
    var senderPhoneNumber = req.body.sPhoneNumber;
    var email = req.body.email;
    addCoord.push(pickupAddress); //Push Address to Coordinates Array

    var deliveryAddress0 = req.body.dAddress0;
    var receiverName0 = req.body.rName0;
    var receiverPhoneNumber0 = req.body.rPhoneNumber0;
    var itemDescription0 = req.body.iDescription0;
    var price0 = Number(req.body.itemSize0);
    if (deliveryAddress0 != undefined) {
        addCoord.push(deliveryAddress0);
    }

    var deliveryAddress1 = (req.body.dAddress1);
    var receiverName1 = (req.body.rName1);
    var receiverPhoneNumber1 = (req.body.rPhoneNumber1);
    var itemDescription1 = (req.body.iDescription1);
    var price1 = (req.body.itemSize1);
    if (deliveryAddress1 != undefined) {
        addCoord.push(deliveryAddress1);
    }

    var deliveryAddress2 = (req.body.dAddress2);
    var receiverName2 = (req.body.rName2);
    var receiverPhoneNumber2 = (req.body.rPhoneNumber2);
    var itemDescription2 = (req.body.iDescription2);
    var price2 = (req.body.itemSize2);
    if (deliveryAddress2 != undefined) {
        addCoord.push(deliveryAddress2);
    }

    var deliveryAddress3 = (req.body.dAddress3);
    var receiverName3 = (req.body.rName3);
    var receiverPhoneNumber3 = (req.body.rPhoneNumber3);
    var itemDescription3 = (req.body.iDescription3);
    var price3 = (req.body.itemSize3);
    if (deliveryAddress3 != undefined) {
        addCoord.push(deliveryAddress3);
    }

    var deliveryAddress4 = (req.body.dAddress4);
    var receiverName4 = (req.body.rName4);
    var receiverPhoneNumber4 = (req.body.rPhoneNumber4);
    var itemDescription4 = (req.body.iDescription4);
    var price4 = (req.body.itemSize4);
    if (deliveryAddress4 != undefined) {
        addCoord.push(deliveryAddress4);
    }

    var deliveryAddress5 = (req.body.dAddress5);
    var receiverName5 = (req.body.rName5);
    var receiverPhoneNumber5 = (req.body.rPhoneNumber5);
    var itemDescription5 = (req.body.iDescription5);
    var price5 = (req.body.itemSize5);
    if (deliveryAddress5 != undefined) {
        addCoord.push(deliveryAddress5);
    }

    var deliveryAddress6 = (req.body.dAddress6);
    var receiverName6 = (req.body.rName6);
    var receiverPhoneNumber6 = (req.body.rPhoneNumber6);
    var itemDescription6 = (req.body.iDescription6);
    var price6 = (req.body.itemSize6);
    if (deliveryAddress6 != undefined) {
        addCoord.push(deliveryAddress6);
    }

    var deliveryAddress7 = (req.body.dAddress7);
    var receiverName7 = (req.body.rName7);
    var receiverPhoneNumber7 = (req.body.rPhoneNumber7);
    var itemDescription7 = (req.body.iDescription7);
    var price7 = (req.body.itemSize7);
    if (deliveryAddress7 != undefined) {
        addCoord.push(deliveryAddress7);
    }

    var deliveryAddress8 = (req.body.dAddress8);
    var receiverName8 = (req.body.rName8);
    var receiverPhoneNumber8 = (req.body.rPhoneNumber8);
    var itemDescription8 = (req.body.iDescription8);
    var price8 = (req.body.itemSize8);
    if (deliveryAddress8 != undefined) {
        addCoord.push(deliveryAddress8);
    }

    var deliveryAddress9 = (req.body.dAddress9);
    var receiverName9 = (req.body.rName9);
    var receiverPhoneNumber9 = (req.body.rPhoneNumber9);
    var itemDescription9 = (req.body.iDescription9);
    var price9 = (req.body.itemSize9);
    if (deliveryAddress9 != undefined) {
        addCoord.push(deliveryAddress9);
    }

    const addCoordOut = []; //Array to output Address coordinates

    // loop through google maps API to retrieve coordinates of al, addresses
    const getCoordinates = new Promise((resolve, reject) => {

        for (let i = 0; i < addCoord.length; i++) {
            // console.log(addCoord[i])
            const coordHeaders = {
                "Content-Type": "application/json",
            }
            const googleCoordUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addCoord[i]}&key=AIzaSyAgR7PScd7Y6QOKvWw5eq4lYVHi4eLK3xY`;

            fetch(googleCoordUrl, { method: 'GET', headers: coordHeaders })

                .then(res => res.json())
                // .catch(err => console.log('Invalid Address'))
                .then((json => {

                    if (json.status === 'OK') {

                        let returnedCoordLat = json.results[0].geometry.location.lat;
                        let returnedCoordLng = json.results[0].geometry.location.lng;

                        let returnedCoord = { returnedCoordLat, returnedCoordLng };
                        addCoordOut.push(returnedCoord); //send coordinates to output coordinates array
                        if (addCoordOut.length === addCoord.length) {
                            console.log("Before returning coords")
                            resolve(addCoordOut)
                        }

                    }
                }))
        }

    })


    // Initiiatialize data packet 
    let data;
    // Initialize total price
    let totalPrice;
    // Initialize json data
    let jsonData;


    //Containing packet declaration
    declareData = async (addCoordOutz) => {
        console.log("Before passing into data packet >>>")

        //Pass coords into data packet
        data = {
            CompanyId: 30,
            pickUp: {
                address: pickupAddress,
                name: senderName,
                email: email,
                phone: senderPhoneNumber,
                lat: addCoordOutz[0].returnedCoordLat,
                lng: addCoordOutz[0].returnedCoordLng
            },
            delivery: [{
                address: deliveryAddress0,
                name: receiverName0,
                phone: receiverPhoneNumber0,
                description: itemDescription0,
                cost: price0,
                lat: addCoordOutz[1].returnedCoordLat,
                lng: addCoordOutz[1].returnedCoordLng
            }]
        };
        console.log("declare data function")
        console.log(addCoordOutz[0])
        console.log(addCoordOutz[1])
        console.log(addCoordOutz[2])


        // console.log(data);

        //Push other delivery data into output object
        if (price1 !== undefined) {
            var delivery1 = new Delivery(deliveryAddress1, receiverName1, receiverPhoneNumber1, itemDescription1, Number(price1), addCoordOutz[2].returnedCoordLat, addCoordOutz[2].returnedCoordLng);
            data.delivery.push(delivery1);
        }

        if (price2 !== undefined) {
            console.log(price2)
            var delivery2 = new Delivery(deliveryAddress2, receiverName2, receiverPhoneNumber2, itemDescription2, Number(price2), addCoordOutz[3].returnedCoordLat, addCoordOutz[3].returnedCoordLng);
            data.delivery.push(delivery2);
        }

        if (price3 !== undefined) {
            var delivery3 = new Delivery(deliveryAddress3, receiverName3, receiverPhoneNumber3, itemDescription3, Number(price3), addCoordOutz[4].returnedCoordLat, addCoordOutz[4].returnedCoordLng);
            data.delivery.push(delivery3);
        }

        if (price4 !== undefined) {
            var delivery4 = new Delivery(deliveryAddress4, receiverName4, receiverPhoneNumber4, itemDescription4, Number(price4), addCoordOutz[5].returnedCoordLat, addCoordOutz[5].returnedCoordLng);
            data.delivery.push(delivery4);
        }

        if (price5 !== undefined) {
            var delivery5 = new Delivery(deliveryAddress5, receiverName5, receiverPhoneNumber5, itemDescription5, Number(price5), addCoordOutz[6].returnedCoordLat, addCoordOutz[6].returnedCoordLng);
            data.delivery.push(delivery5);
        }

        if (price6 !== undefined) {
            var delivery6 = new Delivery(deliveryAddress6, receiverName6, receiverPhoneNumber6, itemDescription6, Number(price6), addCoordOutz[7].returnedCoordLat, addCoordOutz[7].returnedCoordLng);
            data.delivery.push(delivery6);
        }

        if (price7 !== undefined) {
            var delivery7 = new Delivery(deliveryAddress7, receiverName7, receiverPhoneNumber7, itemDescription7, Number(price7), addCoordOutz[8].returnedCoordLat, addCoordOutz[8].returnedCoordLng);
            data.delivery.push(delivery7);
        }

        if (price8 !== undefined) {
            var delivery8 = new Delivery(deliveryAddress8, receiverName8, receiverPhoneNumber8, itemDescription8, Number(price8), addCoordOutz[9].returnedCoordLat, addCoordOutz[9].returnedCoordLng);
            data.delivery.push(delivery8);
        }

        if (price9 !== undefined) {
            var delivery9 = new Delivery(deliveryAddress9, receiverName9, receiverPhoneNumber9, itemDescription9, Number(price9), addCoordOutz[10].returnedCoordLat, addCoordOutz[10].returnedCoordLng);
            data.delivery.push(delivery9);
        }

        //Calculate price
        if (price1 !== undefined) { var finalPrice1 = Number(price1); } else { var finalPrice1 = 0 }
        if (price2 !== undefined) { var finalPrice2 = Number(price2); } else { var finalPrice2 = 0 }
        if (price3 !== undefined) { var finalPrice3 = Number(price3); } else { var finalPrice3 = 0 }
        if (price4 !== undefined) { var finalPrice4 = Number(price4); } else { var finalPrice4 = 0 }
        if (price5 !== undefined) { var finalPrice5 = Number(price5); } else { var finalPrice5 = 0 }
        if (price6 !== undefined) { var finalPrice6 = Number(price6); } else { var finalPrice6 = 0 }
        if (price7 !== undefined) { var finalPrice7 = Number(price7); } else { var finalPrice7 = 0 }
        if (price8 !== undefined) { var finalPrice8 = Number(price8); } else { var finalPrice8 = 0 }
        if (price9 !== undefined) { var finalPrice9 = Number(price9); } else { var finalPrice9 = 0 }

        totalPrice = price0 + finalPrice1 + finalPrice2 + finalPrice3 + finalPrice4 + finalPrice5 + finalPrice6 + finalPrice7 + finalPrice8 + finalPrice9;

        // Convert data to json format
        jsonData = JSON.stringify(data);
    }

    executeAll = async () => {
        getCoordinates.then(() => {
            console.log("coords in promise")
            declareData(addCoordOut).then(() => {
                postData(data);
            })
        }).catch(err => console.log(err))
    }

    //execute all promises
    executeAll();

    postData = (passedData) => {
        console.log("Inside postData")
        // console.log(passedData)
        const url = "https://api.airand.net/api/dispatch/order/company";
        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJuYmYiOjE2MDMzOTI1MDUsImV4cCI6MTgyNDIzMDkwNSwiaWF0IjoxNjAzMzkyNTA1fQ.MZKVJ6NOclgO72F4R21KJWN2-cx_Sq1cw4SFsbxwBlI"; //token

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token // token
            },
        };

        console.log("before https request")

        //Post data via http protocol to API endpoint
        const request = https.request(url, options, function (response) {

            response.on("data", function (data) {

                console.log(response.statusCode);

                //Success page
                if (response.statusCode === 200) {

                    const dataIn = JSON.parse(data);
                    console.log(dataIn)
                    const orderNumber = dataIn.data.orders;
                    res.render("e-commerce-success", {
                        price: totalPrice,
                        name: senderName + ",",
                        email: email,
                        phone: senderPhoneNumber,
                        transRef: 'transRef',
                        orderNumber: orderNumber
                    });
                }
                // failure page
                else {
                    // console.log(dataIn.message);
                    res.sendFile(__dirname + "/failure.html");
                }
            })
        });

        request.on('error', (e) => {
            // console.log("+++error happened here")
            // console.error(e)
        })


        let jsonData = JSON.stringify(passedData);
        //send JSON file to server host
        request.write(jsonData);
        request.end();
    }
});
app.get('/order/e-commerce', function (req, res) {
    res.sendFile(__dirname + '/e-commerce-order.html')
});

app.get('/e-commerce-register', function (req, res) {
    res.sendFile(__dirname + '/e-commerce-register.html')
});

app.post('/e-commerce-register', function (req, res) {

    const pAddress = req.body.pAddress;
    const companyName = req.body.companyName;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const productCategory = req.body.productCategory;
    const deliveryFrequecncy = req.body.deliveryFrequency;
    const AverageMonthlyDeliveries = req.body.AverageMonthlyDeliveries;

    let data = {
        BusinessName: companyName,
        Address: pAddress,
        OwnerName: name,
        OwnerPhone: phone,
        OwnerEmail: email,
        ProductCategory: productCategory,
        DeliveryFrequency: deliveryFrequecncy,
        AvgMonthlyDelivery: AverageMonthlyDeliveries
    }

    let jsonData = JSON.stringify(data);

    // console.log(jsonData);

    const url = 'https://api.airand.net/api/merchants';
    // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYmYiOjE2MDE3NjYxOTcsImV4cCI6MTYwMjM3MDk5NCwiaWF0IjoxNjAxNzY2MTk3fQ.ASe492TH0lJp6FI9WPaTbTZbq839dqUhtwHO7fudbb4"; //token

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Authorization: "Bearer " + access_token // token
        },
    };

    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {

            console.log(JSON.parse(data));
            const dataIn = JSON.parse(data);
            const message = dataIn.message
            console.log(response.statusCode);

            //Success page
            if (response.statusCode === 200) {
                res.render('registration-successful', {
                    name: name
                });
            }
            //failure page
            else {
                res.render('registration-failure', {
                    errorMessage: message
                });
            }
        })
    });

    //send JSON file to server host
    request.write(jsonData)
    request.end();

});
app.get('/orderbackendtest', function (req, res) {
    res.sendFile(__dirname + '/index-order-test.html');
});

app.get('/e-commerce-TCs', function (req, res) {
    res.sendFile(__dirname + '/e-commerce-TCs.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about-airand.html');
});

//Order Number for Tracking
let orderNumberIn;
let deliveryTime;

//Order tracking
app.post('/order/track', function (req, res) {

    orderNumberIn = req.body.orderNumber;

    const url = `https://api.airand.net/api/location/order/track/${orderNumberIn}`;
    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYmYiOjE2MDE3NjYxOTcsImV4cCI6MTYwMjM3MDk5NCwiaWF0IjoxNjAxNzY2MTk3fQ.ASe492TH0lJp6FI9WPaTbTZbq839dqUhtwHO7fudbb4"; //token

    //Declare all variables globally
    let deliveryStatus;
    let orderNumber;
    let riderName;
    let riderPhone;
    let pickupAddress;
    let deliveryAddress;
    let deliveryFee;
    let status;

    const GoogleMapsAPIKey = 'AIzaSyAgR7PScd7Y6QOKvWw5eq4lYVHi4eLK3xY'; //Google Maps API Key

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`,
    }

    fetch(url, { method: 'GET', headers: headers })

        .then(res => res.json())
        .catch(err => {
            console.log(err)
            console.log('Order number error')
        })
        .then((json => {
            // console.log(json.data.destination.lat)
            // console.log(json.data.destination.lat)

            if (json.data === 'FAILED') {
                console.log(json.data)
                let message = json.message;
                res.render('failure', {
                    errorMessage: message
                })
            }
            else {

                orderNumber = `#${orderNumberIn}`;
                riderName = json.data.riderName;
                riderPhone = json.data.riderPhone;
                pickupAddress = json.data.pickUpAddress;
                deliveryAddress = json.data.deliveryAddress;
                deliveryFee = json.data.deliveryFee;
                riderCoordinatesLat = json.data.rider.lat;
                riderCoordinatesLng = json.data.rider.lng;
                destinationCoordinatesLat = json.data.destination.lat;
                destinationCoordinatesLng = json.data.destination.lng;
                pickupCoordinatesLat = json.data.pickup.lat;
                pickupCoordinatesLng = json.data.pickup.lng;

                status = json.data.deliveryStatus;
                if (status == 01) {
                    deliveryStatus = 'Assigned to a dispatcher';
                    destinationCoordinatesLat = pickupCoordinatesLat;
                    destinationCoordinatesLng = pickupCoordinatesLng;
                }
                if (status == 00) {
                    deliveryStatus = 'Delivered';
                    res.render('delivered', {
                        deliveryStatus: deliveryStatus,
                        orderNumber: orderNumber,
                        riderName: riderName,
                        riderPhone: riderPhone,
                        pickupAddress: pickupAddress,
                        deliveryAddress: deliveryAddress,
                        deliveryFee: `N${deliveryFee}`,
                    })
                }
                if (status == 02) {
                    deliveryStatus = 'Picked Up';
                }
                if (status == 03) {
                    deliveryStatus = 'Order Created';
                }

                console.log(deliveryStatus);
                console.log(json);
            }
        }))
        .catch(err => console.log(err))

        //Promise to retrieve Google ETA
        .then(data => {

            //Google distance API endpoint and parameters 
            let distanceUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${riderCoordinatesLat},${riderCoordinatesLng}&destinations=${destinationCoordinatesLat}%2C${destinationCoordinatesLng}&key=${GoogleMapsAPIKey}`;

            fetch(distanceUrl, { method: 'GET', headers: headers })
                .then((response) => {
                    return response.json()
                })
                .catch(err => console.log(err))
                .then((jsonDistance) => {
                    console.log(jsonDistance);
                    deliveryTime = jsonDistance.rows[0].elements[0].duration.text;
                    console.log(`ridercoord => ${deliveryTime}`);
                })
                .then((info) => {

                    if (deliveryStatus === 'Assigned to a dispatcher') {
                        res.render('order-tracking', {
                            deliveryStatus: deliveryStatus,
                            orderNumber: orderNumber,
                            riderName: riderName,
                            riderPhone: riderPhone,
                            pickupAddress: pickupAddress,
                            deliveryAddress: deliveryAddress,
                            deliveryFee: `N${deliveryFee}`,
                            riderCoordinatesLat: riderCoordinatesLat,
                            riderCoordinatesLng: riderCoordinatesLng,
                            destinationCoordinatesLat: pickupCoordinatesLat,
                            destinationCoordinatesLng: pickupCoordinatesLng,
                            deliveryTime: deliveryTime,
                            task: 'pickup'
                        })
                    } else {
                        res.render('order-tracking', {
                            deliveryStatus: deliveryStatus,
                            orderNumber: orderNumber,
                            riderName: riderName,
                            riderPhone: riderPhone,
                            pickupAddress: pickupAddress,
                            deliveryAddress: deliveryAddress,
                            deliveryFee: `N${deliveryFee}`,
                            riderCoordinatesLat: riderCoordinatesLat,
                            riderCoordinatesLng: riderCoordinatesLng,
                            destinationCoordinatesLat: destinationCoordinatesLat,
                            destinationCoordinatesLng: destinationCoordinatesLng,
                            deliveryTime: deliveryTime,
                            task: 'delivery'
                        })
                    }
                })
        })
        .catch(err => console.log(err))
});


//test new payment gateway
app.get('/try', function (req, res) {
    res.sendFile(__dirname + '/payTest.html');
});
app.post('/try', function (req, res) {
    const youPay = req.body.fee;
    const email = req.body.email;
    const phone = req.body.phoneNumber;
    const name = req.body.name;
    const transRef = 'hooli-rttx-1920tbbtuyj34t';

    res.render("success", {
        price: youPay,
        name: name + ",",
        email: email,
        phone: phone,
        pay: 'https://www.airand.net/order',
        transRef: transRef
    });
});


app.get('/orderDetails', function (req, res) {

    const transactionId = req.query.transactionId;

    const orderUrl = "https://airandapi.azurewebsites.net/api/dispatch/orders/fetch";
    const access_token = ""; //token

    const orderDetailsOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + access_token // token
        },
    };

    https.request(orderUrl, orderDetailsOptions, function (response) {
        response.on("data", function (data) {

            console.log(JSON.parse(data));
            console.log(response.statusCode);

            //Success page
            if (response.statusCode === 200) {
                res.render("success", {
                    price: nowPay,
                    name: senderName + ",",
                    pay: paymentLink
                });
            }
            // failure page
            else {
                res.sendFile(__dirname + "/failure.html");
            }
        })
    });
    //send JSON file to server host
    request.end();
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/404.html');
});

app.listen(process.env.PORT || 8080, function () {
    console.log("Server is running on port 8080...")
=======
//Require Packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
const https = require("https");
const { stringify } = require("querystring");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const fetch = require('node-fetch');
// import alert from 'alert';
// const alert = require('alert');
// const flash = require('connect-flash'); 
// const cookieParser = require('cookie-parser');

// const popupS = require('popups');

// const flutterwave = require(__dirname + '/flutterwave.js');

// console.log(flutterwave());

var router = express.Router();
var session = require('express-session');
// var flash = require('connect-flash');
// const { response } = require("express");
// // app.configure(function () {
// app.use(cookieParser('keyboard cat'));
// app.use(session({ cookie: { maxAge: 60000 } }));
// app.use(flash());
// // });

require("dotenv").config();

let transRef;

//Declare npm packages to be used
app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
// app.use(flash());

//Home page
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//Order page
app.get("/order", function (req, res) {
    res.sendFile(__dirname + "/index-order.html");
});

app.get("/contact", function (req, res, next) {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/terms-of-service", function (req, res) {
    res.sendFile(__dirname + "/terms-of-service.html");
});

app.get("/privacy-policy", function (req, res) {
    res.sendFile(__dirname + "/privacy-policy.html");
});

app.get("/partner-onboarding-guide", function (req, res) {
    res.sendFile(__dirname + "/partner-onboarding-guide.html");
});

app.post('/contact', function (req, res) {

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let company = req.body.company;
    let message = req.body.message;

    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0IiwibmJmIjoxNjEyMjk4ODU1LCJleHAiOjE4MzMxMzcyNTUsImlhdCI6MTYxMjI5ODg1NX0.3zczffQao8D4BzEsgNjA-B-rTWbk6beUDK6HQgkRXoE"; //token

    const url = 'https://airandapi.azurewebsites.net/api/email/send';
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`,

    }
    const mail = {
        name: "name",
        to: 'hello@airand.net',
        message: `${name} || ${email} || ${phone} || ${company} || ${message}`,
        subject: 'Airand Contact Centre'
    };

    const jsonMail = JSON.stringify(mail);

    console.log(mail);

    fetch(url, { method: 'POST', headers: headers, body: jsonMail })
        .then((res) => {
            return res.json()
        })
        .then((json) => {

            //Success page
            if (json.status === true) {
                res.render("contact", {
                    message: 'Message successfully sent!'
                });
            }
            // failure page
            else {
                res.render("contact", {
                    message: `${response.statusCode} An error occured, message not sent!`
                });
            }

            // Do something with the returned data.
            console.log(json);

        });
});


app.post("/order", function (req, res, next) {

    //Constructor for other deliveries
    function Delivery(address, regionCode, areaCode, name, email, phone, description) {
        this.address = address;
        this.regionCode = regionCode;
        this.areaCode = areaCode;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.description = description;
    }

    //declare constants
    var pickupArea = (req.body.pArea);
    // var regionCode = ;
    var pickupAddress = req.body.pAddress;
    var senderName = req.body.sName;
    var senderPhoneNumber = req.body.sPhoneNumber;
    var email = req.body.email;

    var deliveryArea0 = (req.body.dArea0);
    var deliveryAddress0 = req.body.dAddress0;
    var receiverName0 = req.body.rName0;
    var receiverPhoneNumber0 = req.body.rPhoneNumber0;
    var itemDescription0 = req.body.iDescription0;

    var deliveryArea1 = (req.body.dArea1);
    var deliveryAddress1 = (req.body.dAddress1);
    var receiverName1 = (req.body.rName1);
    var receiverName1 = (req.body.rPhoneNumber1);
    var itemDescription1 = (req.body.iDescription1);

    var deliveryArea2 = (req.body.dArea2);
    var deliveryAddress2 = (req.body.dAddress2);
    var receiverName2 = (req.body.rName2);
    var receiverPhoneNumber2 = (req.body.rPhoneNumber2);
    var itemDescription2 = (req.body.iDescription2);

    var deliveryArea3 = (req.body.dArea3);
    var deliveryAddress3 = (req.body.dAddress3);
    var receiverName3 = (req.body.rName3);
    var receiverPhoneNumber3 = (req.body.rPhoneNumber3);
    var itemDescription3 = (req.body.iDescription3);

    var deliveryArea4 = (req.body.dArea4);
    var deliveryAddress4 = (req.body.dAddress4);
    var receiverName4 = (req.body.rName4);
    var receiverPhoneNumber4 = (req.body.rPhoneNumber4);
    var itemDescription4 = (req.body.iDescription4);

    var deliveryArea5 = (req.body.dArea5);
    var deliveryAddress5 = (req.body.dAddress5);
    var receiverName5 = (req.body.rName5);
    var receiverPhoneNumber5 = (req.body.rPhoneNumber5);
    var itemDescription5 = (req.body.iDescription5);

    var deliveryArea6 = (req.body.dArea6);
    var deliveryAddress6 = (req.body.dAddress6);
    var receiverName6 = (req.body.rName6);
    var receiverPhoneNumber6 = (req.body.rPhoneNumber6);
    var itemDescription6 = (req.body.iDescription6);

    var deliveryArea7 = (req.body.dArea7);
    var deliveryAddress7 = (req.body.dAddress7);
    var receiverName7 = (req.body.rName7);
    var receiverPhoneNumber7 = (req.body.rPhoneNumber7);
    var itemDescription7 = (req.body.iDescription7);

    var deliveryArea8 = (req.body.dArea8);
    var deliveryAddress8 = (req.body.dAddress8);
    var receiverName8 = (req.body.rName8);
    var receiverPhoneNumber8 = (req.body.rPhoneNumber8);
    var itemDescription8 = (req.body.iDescription8);

    var deliveryArea9 = (req.body.dArea9);
    var deliveryAddress9 = (req.body.dAddress9);
    var receiverName9 = (req.body.rName9);
    var receiverPhoneNumber9 = (req.body.rPhoneNumber9);
    var itemDescription9 = (req.body.iDescription9);

    //pass area into area code function
    var pickupAreaCode = areaCoder(pickupArea)[0];
    var deliveryAreaCode0 = areaCoder(deliveryArea0)[0];
    var deliveryAreaCode1 = areaCoder(deliveryArea1)[0];
    var deliveryAreaCode2 = areaCoder(deliveryArea2)[0];
    var deliveryAreaCode3 = areaCoder(deliveryArea3)[0];
    var deliveryAreaCode4 = areaCoder(deliveryArea4)[0];
    var deliveryAreaCode5 = areaCoder(deliveryArea5)[0];
    var deliveryAreaCode6 = areaCoder(deliveryArea6)[0];
    var deliveryAreaCode7 = areaCoder(deliveryArea7)[0];
    var deliveryAreaCode8 = areaCoder(deliveryArea8)[0];
    var deliveryAreaCode9 = areaCoder(deliveryArea9)[0];

    var pickupRegionCode = areaCoder(pickupArea)[1];
    var deliveryRegionCode0 = areaCoder(deliveryArea0)[1];
    var deliveryRegionCode1 = areaCoder(deliveryArea1)[1];
    var deliveryRegionCode2 = areaCoder(deliveryArea2)[1];
    var deliveryRegionCode3 = areaCoder(deliveryArea3)[1];
    var deliveryRegionCode4 = areaCoder(deliveryArea4)[1];
    var deliveryRegionCode5 = areaCoder(deliveryArea5)[1];
    var deliveryRegionCode6 = areaCoder(deliveryArea6)[1];
    var deliveryRegionCode7 = areaCoder(deliveryArea7)[1];
    var deliveryRegionCode8 = areaCoder(deliveryArea8)[1];
    var deliveryRegionCode9 = areaCoder(deliveryArea9)[1];

    //Containing packet declaration
    const data = {
        pickUp: {
            address: pickupAddress,
            regionCode: pickupRegionCode,
            areaCode: pickupArea,
            name: senderName,
            email: email,
            phone: senderPhoneNumber
        },
        delivery: [{
            address: deliveryAddress0,
            regionCode: deliveryRegionCode0,
            areaCode: deliveryArea0,
            name: receiverName0,
            email: email,
            phone: receiverPhoneNumber0,
            description: itemDescription0
        }]
    }

    //Push other delivery data into output object
    if (deliveryArea1 !== undefined) {
        var delivery1 = new Delivery(deliveryAddress1, deliveryRegionCode1, deliveryArea1, receiverName1, email, receiverName1, itemDescription1);
        data.delivery.push(delivery1);
    }

    if (deliveryArea2 !== undefined) {
        var delivery2 = new Delivery(deliveryAddress2, deliveryRegionCode2, deliveryArea2, receiverName2, email, receiverPhoneNumber2, itemDescription2);
        data.delivery.push(delivery2);
    }

    if (deliveryArea3 !== undefined) {
        var delivery3 = new Delivery(deliveryAddress3, deliveryRegionCode3, deliveryArea3, receiverName3, email, receiverPhoneNumber3, itemDescription3);
        data.delivery.push(delivery3);
    }

    if (deliveryArea4 !== undefined) {
        var delivery4 = new Delivery(deliveryAddress4, deliveryRegionCode4, deliveryArea4, receiverName4, email, receiverPhoneNumber4, itemDescription4);
        data.delivery.push(delivery4);
    }

    if (deliveryArea5 !== undefined) {
        var delivery5 = new Delivery(deliveryAddress5, deliveryRegionCode5, deliveryArea5, receiverName5, email, receiverPhoneNumber5, itemDescription5);
        data.delivery.push(delivery5);
    }

    if (deliveryArea6 !== undefined) {
        var delivery6 = new Delivery(deliveryAddress6, deliveryRegionCode6, deliveryArea6, receiverName6, email, receiverPhoneNumber6, itemDescription6);
        data.delivery.push(delivery6);
    }

    if (deliveryArea7 !== undefined) {
        var delivery7 = new Delivery(deliveryAddress7, deliveryRegionCode7, deliveryArea7, receiverName7, email, receiverPhoneNumber7, itemDescription7);
        data.delivery.push(delivery7);
    }

    if (deliveryArea8 !== undefined) {
        var delivery8 = new Delivery(deliveryAddress8, deliveryRegionCode8, deliveryArea8, receiverName8, email, receiverPhoneNumber8, itemDescription8);
        data.delivery.push(delivery8);
    }

    if (deliveryArea9 !== undefined) {
        var delivery9 = new Delivery(deliveryAddress9, deliveryRegionCode9, deliveryArea9, receiverName9, email, receiverPhoneNumber9, itemDescription9);
        data.delivery.push(delivery9);
    }

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
            var regionCode = "ISL001";
        } else if (island2.includes(sectorMetro) === true) {
            var areaCode = 4;
            var regionCode = "ISL002";
        } else if (island3.includes(sectorMetro) === true) {
            var areaCode = 3;
            var regionCode = "ISL003";
        } else if (island4.includes(sectorMetro) === true) {
            var areaCode = 2;
            var regionCode = "ISL004";
        } else if (island5.includes(sectorMetro) === true) {
            var areaCode = 1;
            var regionCode = "ISL005";
        } else if (mainland1.includes(sectorMetro) === true) {
            var areaCode = 6;
            var regionCode = "MLD001";
        } else if (mainland2.includes(sectorMetro) === true) {
            var areaCode = 7;
            var regionCode = "MLD002";
        } else if (mainland3.includes(sectorMetro) === true) {
            var areaCode = 8;
            var regionCode = "MLD003";
        } else if (mainland4.includes(sectorMetro) === true) {
            var areaCode = 9;
            var regionCode = "MLD004";
        } else if (mainland5.includes(sectorMetro) === true) {
            var areaCode = 10;
            var regionCode = "MLD005";
        }
        return [areaCode, regionCode];

    }

    //Distance Calculation
    if (deliveryArea0 === undefined) { var areaDelta0 = 10; } else { var areaDelta0 = pickupAreaCode - deliveryAreaCode0; }
    if (deliveryArea1 === undefined) { var areaDelta1 = 10; } else { var areaDelta1 = pickupAreaCode - deliveryAreaCode1; }
    if (deliveryArea2 === undefined) { var areaDelta2 = 10; } else { var areaDelta2 = pickupAreaCode - deliveryAreaCode2; }
    if (deliveryArea3 === undefined) { var areaDelta3 = 10; } else { var areaDelta3 = pickupAreaCode - deliveryAreaCode3; }
    if (deliveryArea4 === undefined) { var areaDelta4 = 10; } else { var areaDelta4 = pickupAreaCode - deliveryAreaCode4; }
    if (deliveryArea5 === undefined) { var areaDelta5 = 10; } else { var areaDelta5 = pickupAreaCode - deliveryAreaCode5; }
    if (deliveryArea6 === undefined) { var areaDelta6 = 10; } else { var areaDelta6 = pickupAreaCode - deliveryAreaCode6; }
    if (deliveryArea7 === undefined) { var areaDelta7 = 10; } else { var areaDelta7 = pickupAreaCode - deliveryAreaCode7; }
    if (deliveryArea8 === undefined) { var areaDelta8 = 10; } else { var areaDelta8 = pickupAreaCode - deliveryAreaCode8; }
    if (deliveryArea9 === undefined) { var areaDelta9 = 10; } else { var areaDelta9 = pickupAreaCode - deliveryAreaCode9; }

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

    //Add all prices
    function youPay() {
        var pay = pricing0 + pricing1 + pricing2 + pricing3 + pricing4 + pricing5 + pricing6 + pricing7 + pricing8 + pricing9;
        return pay;
    }
    var nowPay = youPay();
    //export to success ejs 
    module.exports = {
        price: youPay()
    }

    //Pricing function
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
        } else if (deltaIn === 10) {
            fee = 0;
        }
        return fee;
    }

    // Convert data to json format
    const jsonData = JSON.stringify(data);

    const url = "https://airandapi.azurewebsites.net/api/dispatch/order";
    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3IiwibmJmIjoxNjA4MzY2OTE3LCJleHAiOjE4MjkyMDUzMTcsImlhdCI6MTYwODM2NjkxN30.2qiGtHae5DqzYG3PFY7UTOHmwtPcuNccqPbeSsl8XlU"; //token

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + access_token // token
        },
    };

    //Post data via http protocol to API endpoint
    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {

            const dataIn = JSON.parse(data);
            console.log(dataIn);
            const paymentUrl = dataIn.data.paymentLink;
            const transactionId = dataIn.data.transactionId;

            transRef = transactionId;

            console.log(response.statusCode);

            //Success page
            if (response.statusCode === 200) {

                res.render("success", {
                    price: nowPay,
                    name: senderName + ",",
                    email: email,
                    phone: senderPhoneNumber,
                    transRef: transRef
                });
            }
            // failure page
            else {
                res.sendFile(__dirname + "/failure.html");
            }
        })
    });

    //send JSON file to server host
    request.write(jsonData);
    request.end();

    return nowPay;

});

app.post('/order/e-commerce', function (req, res) {

    //Constructor for other deliveries
    function Delivery(address, name, phone, description, cost, lat, lng) {
        this.address = address;
        this.name = name;
        this.phone = phone;
        this.description = description;
        this.cost = cost;
        this.lat = lat;
        this.lng = lng;
    }

    let addCoord = []; //Array to input Address coordinates

    //declare constants
    var pickupAddress = req.body.pAddress;
    var senderName = req.body.sName;
    var senderPhoneNumber = req.body.sPhoneNumber;
    var email = req.body.email;
    addCoord.push(pickupAddress); //Push Address to Coordinates Array

    var deliveryAddress0 = req.body.dAddress0;
    var receiverName0 = req.body.rName0;
    var receiverPhoneNumber0 = req.body.rPhoneNumber0;
    var itemDescription0 = req.body.iDescription0;
    var price0 = Number(req.body.itemSize0);
    if (deliveryAddress0 != undefined) {
        addCoord.push(deliveryAddress0);
    }

    var deliveryAddress1 = (req.body.dAddress1);
    var receiverName1 = (req.body.rName1);
    var receiverPhoneNumber1 = (req.body.rPhoneNumber1);
    var itemDescription1 = (req.body.iDescription1);
    var price1 = (req.body.itemSize1);
    if (deliveryAddress1 != undefined) {
        addCoord.push(deliveryAddress1);
    }

    var deliveryAddress2 = (req.body.dAddress2);
    var receiverName2 = (req.body.rName2);
    var receiverPhoneNumber2 = (req.body.rPhoneNumber2);
    var itemDescription2 = (req.body.iDescription2);
    var price2 = (req.body.itemSize2);
    if (deliveryAddress2 != undefined) {
        addCoord.push(deliveryAddress2);
    }

    var deliveryAddress3 = (req.body.dAddress3);
    var receiverName3 = (req.body.rName3);
    var receiverPhoneNumber3 = (req.body.rPhoneNumber3);
    var itemDescription3 = (req.body.iDescription3);
    var price3 = (req.body.itemSize3);
    if (deliveryAddress3 != undefined) {
        addCoord.push(deliveryAddress3);
    }

    var deliveryAddress4 = (req.body.dAddress4);
    var receiverName4 = (req.body.rName4);
    var receiverPhoneNumber4 = (req.body.rPhoneNumber4);
    var itemDescription4 = (req.body.iDescription4);
    var price4 = (req.body.itemSize4);
    if (deliveryAddress4 != undefined) {
        addCoord.push(deliveryAddress4);
    }

    var deliveryAddress5 = (req.body.dAddress5);
    var receiverName5 = (req.body.rName5);
    var receiverPhoneNumber5 = (req.body.rPhoneNumber5);
    var itemDescription5 = (req.body.iDescription5);
    var price5 = (req.body.itemSize5);
    if (deliveryAddress5 != undefined) {
        addCoord.push(deliveryAddress5);
    }

    var deliveryAddress6 = (req.body.dAddress6);
    var receiverName6 = (req.body.rName6);
    var receiverPhoneNumber6 = (req.body.rPhoneNumber6);
    var itemDescription6 = (req.body.iDescription6);
    var price6 = (req.body.itemSize6);
    if (deliveryAddress6 != undefined) {
        addCoord.push(deliveryAddress6);
    }

    var deliveryAddress7 = (req.body.dAddress7);
    var receiverName7 = (req.body.rName7);
    var receiverPhoneNumber7 = (req.body.rPhoneNumber7);
    var itemDescription7 = (req.body.iDescription7);
    var price7 = (req.body.itemSize7);
    if (deliveryAddress7 != undefined) {
        addCoord.push(deliveryAddress7);
    }

    var deliveryAddress8 = (req.body.dAddress8);
    var receiverName8 = (req.body.rName8);
    var receiverPhoneNumber8 = (req.body.rPhoneNumber8);
    var itemDescription8 = (req.body.iDescription8);
    var price8 = (req.body.itemSize8);
    if (deliveryAddress8 != undefined) {
        addCoord.push(deliveryAddress8);
    }

    var deliveryAddress9 = (req.body.dAddress9);
    var receiverName9 = (req.body.rName9);
    var receiverPhoneNumber9 = (req.body.rPhoneNumber9);
    var itemDescription9 = (req.body.iDescription9);
    var price9 = (req.body.itemSize9);
    if (deliveryAddress9 != undefined) {
        addCoord.push(deliveryAddress9);
    }

    const addCoordOut = []; //Array to output Address coordinates

    // loop through google maps API to retrieve coordinates of al, addresses
    const getCoordinates = new Promise((resolve, reject) => {

        for (let i = 0; i < addCoord.length; i++) {
            // console.log(addCoord[i])
            const coordHeaders = {
                "Content-Type": "application/json",
            }
            const googleCoordUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addCoord[i]}&key=AIzaSyAgR7PScd7Y6QOKvWw5eq4lYVHi4eLK3xY`;

            fetch(googleCoordUrl, { method: 'GET', headers: coordHeaders })

                .then(res => res.json())
                // .catch(err => console.log('Invalid Address'))
                .then((json => {

                    if (json.status === 'OK') {

                        let returnedCoordLat = json.results[0].geometry.location.lat;
                        let returnedCoordLng = json.results[0].geometry.location.lng;

                        let returnedCoord = { returnedCoordLat, returnedCoordLng };
                        addCoordOut.push(returnedCoord); //send coordinates to output coordinates array
                        if (addCoordOut.length === addCoord.length) {
                            console.log("Before returning coords")
                            resolve(addCoordOut)
                        }

                    }
                }))
        }

    })


    // Initiiatialize data packet 
    let data;
    // Initialize total price
    let totalPrice;
    // Initialize json data
    let jsonData;


    //Containing packet declaration
    declareData = async (addCoordOutz) => {
        console.log("Before passing into data packet >>>")

        //Pass coords into data packet
        data = {
            CompanyId: 30,
            pickUp: {
                address: pickupAddress,
                name: senderName,
                email: email,
                phone: senderPhoneNumber,
                lat: addCoordOutz[0].returnedCoordLat,
                lng: addCoordOutz[0].returnedCoordLng
            },
            delivery: [{
                address: deliveryAddress0,
                name: receiverName0,
                phone: receiverPhoneNumber0,
                description: itemDescription0,
                cost: price0,
                lat: addCoordOutz[1].returnedCoordLat,
                lng: addCoordOutz[1].returnedCoordLng
            }]
        };
        console.log("declare data function")
        console.log(addCoordOutz[0])
        console.log(addCoordOutz[1])
        console.log(addCoordOutz[2])


        // console.log(data);

        //Push other delivery data into output object
        if (price1 !== undefined) {
            var delivery1 = new Delivery(deliveryAddress1, receiverName1, receiverPhoneNumber1, itemDescription1, Number(price1), addCoordOutz[2].returnedCoordLat, addCoordOutz[2].returnedCoordLng);
            data.delivery.push(delivery1);
        }

        if (price2 !== undefined) {
            console.log(price2)
            var delivery2 = new Delivery(deliveryAddress2, receiverName2, receiverPhoneNumber2, itemDescription2, Number(price2), addCoordOutz[3].returnedCoordLat, addCoordOutz[3].returnedCoordLng);
            data.delivery.push(delivery2);
        }

        if (price3 !== undefined) {
            var delivery3 = new Delivery(deliveryAddress3, receiverName3, receiverPhoneNumber3, itemDescription3, Number(price3), addCoordOutz[4].returnedCoordLat, addCoordOutz[4].returnedCoordLng);
            data.delivery.push(delivery3);
        }

        if (price4 !== undefined) {
            var delivery4 = new Delivery(deliveryAddress4, receiverName4, receiverPhoneNumber4, itemDescription4, Number(price4), addCoordOutz[5].returnedCoordLat, addCoordOutz[5].returnedCoordLng);
            data.delivery.push(delivery4);
        }

        if (price5 !== undefined) {
            var delivery5 = new Delivery(deliveryAddress5, receiverName5, receiverPhoneNumber5, itemDescription5, Number(price5), addCoordOutz[6].returnedCoordLat, addCoordOutz[6].returnedCoordLng);
            data.delivery.push(delivery5);
        }

        if (price6 !== undefined) {
            var delivery6 = new Delivery(deliveryAddress6, receiverName6, receiverPhoneNumber6, itemDescription6, Number(price6), addCoordOutz[7].returnedCoordLat, addCoordOutz[7].returnedCoordLng);
            data.delivery.push(delivery6);
        }

        if (price7 !== undefined) {
            var delivery7 = new Delivery(deliveryAddress7, receiverName7, receiverPhoneNumber7, itemDescription7, Number(price7), addCoordOutz[8].returnedCoordLat, addCoordOutz[8].returnedCoordLng);
            data.delivery.push(delivery7);
        }

        if (price8 !== undefined) {
            var delivery8 = new Delivery(deliveryAddress8, receiverName8, receiverPhoneNumber8, itemDescription8, Number(price8), addCoordOutz[9].returnedCoordLat, addCoordOutz[9].returnedCoordLng);
            data.delivery.push(delivery8);
        }

        if (price9 !== undefined) {
            var delivery9 = new Delivery(deliveryAddress9, receiverName9, receiverPhoneNumber9, itemDescription9, Number(price9), addCoordOutz[10].returnedCoordLat, addCoordOutz[10].returnedCoordLng);
            data.delivery.push(delivery9);
        }

        //Calculate price
        if (price1 !== undefined) { var finalPrice1 = Number(price1); } else { var finalPrice1 = 0 }
        if (price2 !== undefined) { var finalPrice2 = Number(price2); } else { var finalPrice2 = 0 }
        if (price3 !== undefined) { var finalPrice3 = Number(price3); } else { var finalPrice3 = 0 }
        if (price4 !== undefined) { var finalPrice4 = Number(price4); } else { var finalPrice4 = 0 }
        if (price5 !== undefined) { var finalPrice5 = Number(price5); } else { var finalPrice5 = 0 }
        if (price6 !== undefined) { var finalPrice6 = Number(price6); } else { var finalPrice6 = 0 }
        if (price7 !== undefined) { var finalPrice7 = Number(price7); } else { var finalPrice7 = 0 }
        if (price8 !== undefined) { var finalPrice8 = Number(price8); } else { var finalPrice8 = 0 }
        if (price9 !== undefined) { var finalPrice9 = Number(price9); } else { var finalPrice9 = 0 }

        totalPrice = price0 + finalPrice1 + finalPrice2 + finalPrice3 + finalPrice4 + finalPrice5 + finalPrice6 + finalPrice7 + finalPrice8 + finalPrice9;

        // Convert data to json format
        jsonData = JSON.stringify(data);
    }

    executeAll = async () => {
        getCoordinates.then(() => {
            console.log("coords in promise")
            declareData(addCoordOut).then(() => {
                postData(data);
            })
        }).catch(err => console.log(err))
    }

    //execute all promises
    executeAll();

    postData = (passedData) => {
        console.log("Inside postData")
        // console.log(passedData)
        const url = "https://api.airand.net/api/dispatch/order/company";
        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJuYmYiOjE2MDMzOTI1MDUsImV4cCI6MTgyNDIzMDkwNSwiaWF0IjoxNjAzMzkyNTA1fQ.MZKVJ6NOclgO72F4R21KJWN2-cx_Sq1cw4SFsbxwBlI"; //token

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token // token
            },
        };

        console.log("before https request")

        //Post data via http protocol to API endpoint
        const request = https.request(url, options, function (response) {

            response.on("data", function (data) {

                console.log(response.statusCode);

                //Success page
                if (response.statusCode === 200) {

                    const dataIn = JSON.parse(data);
                    console.log(dataIn)
                    const orderNumber = dataIn.data.orders;
                    res.render("e-commerce-success", {
                        price: totalPrice,
                        name: senderName + ",",
                        email: email,
                        phone: senderPhoneNumber,
                        transRef: 'transRef',
                        orderNumber: orderNumber
                    });
                }
                // failure page
                else {
                    // console.log(dataIn.message);
                    res.sendFile(__dirname + "/failure.html");
                }
            })
        });

        request.on('error', (e) => {
            // console.log("+++error happened here")
            // console.error(e)
        })


        let jsonData = JSON.stringify(passedData);
        //send JSON file to server host
        request.write(jsonData);
        request.end();
    }
});
app.get('/order/e-commerce', function (req, res) {
    res.sendFile(__dirname + '/e-commerce-order.html')
});

app.get('/e-commerce-register', function (req, res) {
    res.sendFile(__dirname + '/e-commerce-register.html')
});

app.post('/e-commerce-register', function (req, res) {

    const pAddress = req.body.pAddress;
    const companyName = req.body.companyName;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const productCategory = req.body.productCategory;
    const deliveryFrequecncy = req.body.deliveryFrequency;
    const AverageMonthlyDeliveries = req.body.AverageMonthlyDeliveries;

    let data = {
        BusinessName: companyName,
        Address: pAddress,
        OwnerName: name,
        OwnerPhone: phone,
        OwnerEmail: email,
        ProductCategory: productCategory,
        DeliveryFrequency: deliveryFrequecncy,
        AvgMonthlyDelivery: AverageMonthlyDeliveries
    }

    let jsonData = JSON.stringify(data);

    // console.log(jsonData);

    const url = 'https://api.airand.net/api/merchants';
    // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYmYiOjE2MDE3NjYxOTcsImV4cCI6MTYwMjM3MDk5NCwiaWF0IjoxNjAxNzY2MTk3fQ.ASe492TH0lJp6FI9WPaTbTZbq839dqUhtwHO7fudbb4"; //token

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Authorization: "Bearer " + access_token // token
        },
    };

    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {

            console.log(JSON.parse(data));
            const dataIn = JSON.parse(data);
            const message = dataIn.message
            console.log(response.statusCode);

            //Success page
            if (response.statusCode === 200) {
                res.render('registration-successful', {
                    name: name
                });
            }
            //failure page
            else {
                res.render('registration-failure', {
                    errorMessage: message
                });
            }
        })
    });

    //send JSON file to server host
    request.write(jsonData)
    request.end();

});
app.get('/orderbackendtest', function (req, res) {
    res.sendFile(__dirname + '/index-order-test.html');
});

app.get('/e-commerce-TCs', function (req, res) {
    res.sendFile(__dirname + '/e-commerce-TCs.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about-airand.html');
});

//Order Number for Tracking
let orderNumberIn;
let deliveryTime;

//Order tracking
app.post('/order/track', function (req, res) {

    orderNumberIn = req.body.orderNumber;

    const url = `https://api.airand.net/api/location/order/track/${orderNumberIn}`;
    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYmYiOjE2MDE3NjYxOTcsImV4cCI6MTYwMjM3MDk5NCwiaWF0IjoxNjAxNzY2MTk3fQ.ASe492TH0lJp6FI9WPaTbTZbq839dqUhtwHO7fudbb4"; //token

    //Declare all variables globally
    let deliveryStatus;
    let orderNumber;
    let riderName;
    let riderPhone;
    let pickupAddress;
    let deliveryAddress;
    let deliveryFee;
    let status;

    const GoogleMapsAPIKey = 'AIzaSyAgR7PScd7Y6QOKvWw5eq4lYVHi4eLK3xY'; //Google Maps API Key

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`,
    }

    fetch(url, { method: 'GET', headers: headers })

        .then(res => res.json())
        .catch(err => {
            console.log(err)
            console.log('Order number error')
        })
        .then((json => {
            // console.log(json.data.destination.lat)
            // console.log(json.data.destination.lat)

            if (json.data === 'FAILED') {
                console.log(json.data)
                let message = json.message;
                res.render('failure', {
                    errorMessage: message
                })
            }
            else {

                orderNumber = `#${orderNumberIn}`;
                riderName = json.data.riderName;
                riderPhone = json.data.riderPhone;
                pickupAddress = json.data.pickUpAddress;
                deliveryAddress = json.data.deliveryAddress;
                deliveryFee = json.data.deliveryFee;
                riderCoordinatesLat = json.data.rider.lat;
                riderCoordinatesLng = json.data.rider.lng;
                destinationCoordinatesLat = json.data.destination.lat;
                destinationCoordinatesLng = json.data.destination.lng;
                pickupCoordinatesLat = json.data.pickup.lat;
                pickupCoordinatesLng = json.data.pickup.lng;

                status = json.data.deliveryStatus;
                if (status == 01) {
                    deliveryStatus = 'Assigned to a dispatcher';
                    destinationCoordinatesLat = pickupCoordinatesLat;
                    destinationCoordinatesLng = pickupCoordinatesLng;
                }
                if (status == 00) {
                    deliveryStatus = 'Delivered';
                    res.render('delivered', {
                        deliveryStatus: deliveryStatus,
                        orderNumber: orderNumber,
                        riderName: riderName,
                        riderPhone: riderPhone,
                        pickupAddress: pickupAddress,
                        deliveryAddress: deliveryAddress,
                        deliveryFee: `N${deliveryFee}`,
                    })
                }
                if (status == 02) {
                    deliveryStatus = 'Picked Up';
                }
                if (status == 03) {
                    deliveryStatus = 'Order Created';
                }

                console.log(deliveryStatus);
                console.log(json);
            }
        }))
        .catch(err => console.log(err))

        //Promise to retrieve Google ETA
        .then(data => {

            //Google distance API endpoint and parameters 
            let distanceUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${riderCoordinatesLat},${riderCoordinatesLng}&destinations=${destinationCoordinatesLat}%2C${destinationCoordinatesLng}&key=${GoogleMapsAPIKey}`;

            fetch(distanceUrl, { method: 'GET', headers: headers })
                .then((response) => {
                    return response.json()
                })
                .catch(err => console.log(err))
                .then((jsonDistance) => {
                    console.log(jsonDistance);
                    deliveryTime = jsonDistance.rows[0].elements[0].duration.text;
                    console.log(`ridercoord => ${deliveryTime}`);
                })
                .then((info) => {

                    if (deliveryStatus === 'Assigned to a dispatcher') {
                        res.render('order-tracking', {
                            deliveryStatus: deliveryStatus,
                            orderNumber: orderNumber,
                            riderName: riderName,
                            riderPhone: riderPhone,
                            pickupAddress: pickupAddress,
                            deliveryAddress: deliveryAddress,
                            deliveryFee: `N${deliveryFee}`,
                            riderCoordinatesLat: riderCoordinatesLat,
                            riderCoordinatesLng: riderCoordinatesLng,
                            destinationCoordinatesLat: pickupCoordinatesLat,
                            destinationCoordinatesLng: pickupCoordinatesLng,
                            deliveryTime: deliveryTime,
                            task: 'pickup'
                        })
                    } else {
                        res.render('order-tracking', {
                            deliveryStatus: deliveryStatus,
                            orderNumber: orderNumber,
                            riderName: riderName,
                            riderPhone: riderPhone,
                            pickupAddress: pickupAddress,
                            deliveryAddress: deliveryAddress,
                            deliveryFee: `N${deliveryFee}`,
                            riderCoordinatesLat: riderCoordinatesLat,
                            riderCoordinatesLng: riderCoordinatesLng,
                            destinationCoordinatesLat: destinationCoordinatesLat,
                            destinationCoordinatesLng: destinationCoordinatesLng,
                            deliveryTime: deliveryTime,
                            task: 'delivery'
                        })
                    }
                })
        })
        .catch(err => console.log(err))
});


//test new payment gateway
app.get('/try', function (req, res) {
    res.sendFile(__dirname + '/payTest.html');
});
app.post('/try', function (req, res) {
    const youPay = req.body.fee;
    const email = req.body.email;
    const phone = req.body.phoneNumber;
    const name = req.body.name;
    const transRef = 'hooli-rttx-1920tbbtuyj34t';

    res.render("success", {
        price: youPay,
        name: name + ",",
        email: email,
        phone: phone,
        pay: 'https://www.airand.net/order',
        transRef: transRef
    });
});


app.get('/orderDetails', function (req, res) {

    const transactionId = req.query.transactionId;

    const orderUrl = "https://airandapi.azurewebsites.net/api/dispatch/orders/fetch";
    const access_token = ""; //token

    const orderDetailsOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + access_token // token
        },
    };

    https.request(orderUrl, orderDetailsOptions, function (response) {
        response.on("data", function (data) {

            console.log(JSON.parse(data));
            console.log(response.statusCode);

            //Success page
            if (response.statusCode === 200) {
                res.render("success", {
                    price: nowPay,
                    name: senderName + ",",
                    pay: paymentLink
                });
            }
            // failure page
            else {
                res.sendFile(__dirname + "/failure.html");
            }
        })
    });
    //send JSON file to server host
    request.end();
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/404.html');
});

app.listen(process.env.PORT || 8080, function () {
    console.log("Server is running on port 8080...")
>>>>>>> 18639bd06f7c8d0a6ba9e4ad1d624e165d58ab43
});