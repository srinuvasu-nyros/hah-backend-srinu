const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fileURLToPath = require("url");
const path = require("path");
// const currentFilePath = import.meta.url;
// const currentDirectory = dirname(fileURLToPath(currentFilePath));
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// const currentFilePath = import.meta.url;
// const currentDirectory = dirname(fileURLToPath(currentFilePath));

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "manohar.nyros@gmail.com",
    pass: "xonrxkdwtkbielzv",
  },
});

const email_verify_otp = async(name, email, otp) => {
  try {
    const renderedContent = await ejs.renderFile(
      path.join(__dirname, `../templates/email_verify_otp.ejs`),
      { otp, name }
    );

    const mailOptions = {
      from: "manohar.nyros@gmail.com",
      to: email,
      subject: "HaH - Email Confirmation",
      html: renderedContent,
    };

    const verificationInfo = await transporter.sendMail(mailOptions);
    return verificationInfo;
  } catch (error) {
    return { error };
  }
}

const email_reset_password_otp = async(name, email, otp) => {
  try {
    const renderedContent = await ejs.renderFile(
      path.join(__dirname, `../templates/email_reset_password_otp.ejs`),
      { otp, name }
    );

    const mailOptions = {
      from: "manohar.nyros@gmail.com",
      to: email,
      subject: "HaH - Reset Password",
      html: renderedContent,
    };

    const verificationInfo = await transporter.sendMail(mailOptions);
    return verificationInfo;
  } catch (error) {
    return { error };
  }
}
module.exports = {
  email_verify_otp,
  email_reset_password_otp
};