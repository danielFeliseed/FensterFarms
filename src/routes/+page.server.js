import { supabase } from "$lib/supabaseClient";
// import { GMAIL } from "$lib/env";
// import { GMAIL_PASSWORD } from "$lib/env";


//   export async function load() {
//     const { data } = await supabase.from("countries").select();
//     return {
//       countries: data ?? [],
//     };
//   }

//   const express = require('express');
//   const nodemailer = require('nodemailer');
//   const bodyParser = require('body-parser');
  
//   const app = express();
  
//   app.use(bodyParser.urlencoded({ extended: false }));
//   app.use(bodyParser.json());
  
//   app.post('/submit-form', (req, res) => {
//     const { name, email, comment } = req.body;
  
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: {GMAIL},
//         pass: {GMAIL_PASSWORD}
//       }
//     });
  
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: 'daniel@feliseed.co.jp',
//       subject: 'New Contact Form Submission',
//       text: `Name: ${name}\nEmail: ${email}\nComment: ${comment}`
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//         res.send('error');
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.send('success');
//       }
//     });
//   });
  
//   app.listen(3000, () => console.log('Server running on port 3000'));