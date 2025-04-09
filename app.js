// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Create a route to handle form submission
// app.post('/send-message', async (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', // Or any other email service you use
//     auth: {
//       user: 'prashantatul565@gmail.com',  // Replace with your email address
//       pass: 'wdfeghepxcatghbj'  
//         // Replace with your email password
//     }
//   });

//   const mailOptions = {
//     from: email,  // Sender address
//     to: 'prashantatul565@gmail.com', // Receiver address
//     subject: `New message from ${name}`,
//     text: `You have received a new message from:
    
//     Name: ${name}
//     Email: ${email}
//     Message: ${message}`
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending email!' });
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });





const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const emailService = require('./server/emailService.js'); // Import emailService to send emails

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint for sending the email
app.post('/send-email', emailService.sendEmail);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
