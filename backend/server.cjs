// backend/server.cjs
const express = require("express");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, "users.json");

// Load & save users
let users = [];
const loadUsers = () => {
  try {
    if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "[]");
    users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  } catch (e) {
    console.error("Failed to read users.json:", e);
    users = [];
  }
};
const saveUsers = () => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
loadUsers();

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send birthday emails
const sendBirthdayEmails = () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  users.forEach((user) => {
    if (!user.birthDate) return;
    const [year, month, day] = user.birthDate.split("-");
    if (parseInt(month, 10) === todayMonth && parseInt(day, 10) === todayDay) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "🎉 Happy Birthday from La Rive D'or!",
        html: `<h1>Happy Birthday ${user.firstName}!</h1>
               <p>From the La Rive D'or team. Enjoy a free boisson on us! 🥳</p>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log("Error sending email:", err);
        else console.log("Birthday email sent to", user.email);
      });
    }
  });
};

// Daily cron at 09:00
cron.schedule("0 9 * * *", sendBirthdayEmails);

// Signup endpoint
app.post("/signup", (req, res) => {
  try {
    const { firstName, lastName, email, birthDate } = req.body;
    console.log("Received signup data:", req.body);

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (users.find((u) => u.email.toLowerCase() === String(email).toLowerCase())) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = { firstName, lastName, email, birthDate: birthDate || "" };
    users.push(newUser);
    saveUsers();
    console.log("Saved user:", newUser);

    // Check birthday immediately
    if (birthDate) {
      const [year, month, day] = birthDate.split("-");
      const today = new Date();
      console.log("Today:", today.toISOString());
      console.log("User birthday:", year, month, day);

      if (parseInt(month, 10) === today.getMonth() + 1 && parseInt(day, 10) === today.getDate()) {
        console.log("Birthday matches today — sending email...");
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: "🎉 Happy Birthday from La Rive D'or!",
          html: `<h1>Happy Birthday ${firstName}!</h1>
                 <p>From the La Rive D'or team. Enjoy a free boisson on us! 🥳</p>`,
        };
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) console.log("Error sending immediate birthday email:", err);
          else console.log("Immediate birthday email sent to", email, info.response);
        });
      } else {
        console.log("Birthday does not match today.");
      }
    } else {
      console.log("No birthDate provided.");
    }

    return res.status(201).json({ message: "User added" });
  } catch (e) {
    console.error("Signup error:", e);
    return res.status(500).json({ error: "Server error while saving user" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
