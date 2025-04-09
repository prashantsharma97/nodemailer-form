const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Get the email user from the .env file
        pass: process.env.EMAIL_PASS  // Get the email password from the .env file
      },
    });

    const emailTemplate = fs.readFileSync(path.join(__dirname, '../public/emailTemplate.html'), 'utf-8');
    
    // Replace placeholders with actual data
    const personalizedTemplate = emailTemplate
      .replace('[Recipient\'s Name]', name) // Replace the recipient name
      .replace('[UserMessage]', message); // Replace with the user's message

    // Mail options
    const mailOptions = {
      from: 'your-email@gmail.com', // Replace with your email
      to: 'prashantatul565@gmail.com', // Replace with the recipient's email
      subject: 'New Contact Form Submission',
      html: personalizedTemplate, // Use the personalized email template
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error });
  }
};

module.exports = { sendEmail };