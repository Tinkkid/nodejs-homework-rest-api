const nodemailer = require("nodemailer")
require("dotenv").config();

const META_PASSWORD = 'JulMax12!';

const nodemailerConfig = {
   host: "smtp.meta.ua",
   port: 465,
   secure: true,
   auth: {
      user: "y.kostovynska@meta.ua",
      pass: META_PASSWORD,
   }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
   to: "togis99753@aaorsi.com",
   from: "y.kostovynska@meta.ua",
   subject: "Test email",
   html: "<p>Test</p>"
}

transport.sendMail(email).then(()=>console.log("Send success")).catch(error=>console.log(error.message))