const Mailjet = require('node-mailjet');
require("dotenv").config();

const { MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE, MJ_SENDER_EMAIL } = process.env;

const mailjet = new Mailjet({
    apiKey: MJ_APIKEY_PUBLIC,
    apiSecret: MJ_APIKEY_PRIVATE
});

const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
        Messages: [
            {
                From: {
                    Email: MJ_SENDER_EMAIL,
                    // Name: "Mailjet Pilot"
                },
                To: [
                    {
                        Email: "hiren60992@rockdian.com",
                        Name: "hiren"
                    }
                ],
                Subject: "Your email flight plan!",
                TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
        ]
    })

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })