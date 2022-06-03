import nodemailer from "nodemailer";

const emailForgotpass = async (datos) => {
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const { email, names, token } = datos;
  //Send email
  const info = await transport.sendMail({
    from: "Good Luck",
    to: email,
    subject: "Reset your password Good Luck.",
    text: "Reset your password Good Luck, please...",
    html:`<p>Hi ${names} You have requested that your password be reset.</p>
    <p>To create a new password, click the link below:
    <a href="${process.env.URL_FRONT}/forgetpassword/${token}">Reset Password</a> </p>
    <p>Please disregard this email if you did not apply for this account.</p>
    `
  });
  console.log("Mensaje enviado:%s",info.messageId);
}

export default emailForgotpass;