const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to another service if preferred (e.g., outlook, yahoo)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // For Gmail, you should use an App Password, not your real password
    },
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log("Error configuring NodeMailer: ", error);
    } else {
        console.log("Server is ready to send our emails!");
    }
});

// API endpoint to handle contact form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ status: "error", message: "Missing required fields: name, email, or message." });
    }

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // authenticated email
        replyTo: email, // reply to the person who submitted the form
        to: process.env.EMAIL_USER, // The email you want to receive the messages at
        subject: subject ? `Portfolio Contact from ${name}: ${subject}` : `New Portfolio Contact from ${name}`,
        text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                  <h2>New Message from Portfolio</h2>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                  <p><strong>Message:</strong></p>
                  <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc; white-space: pre-wrap;">${message}</blockquote>
               </div>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ status: "success", message: "Email sent successfully! I will get back to you soon." });
    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).json({ status: "error", message: "Failed to send email. Please try again later." });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
