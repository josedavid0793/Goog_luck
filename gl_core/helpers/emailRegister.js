import nodemailer from "nodemailer";


const emailRegister = async (datos) => {
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
    subject: "Verify your account with Good Luck.",
    text: "Verify your account with Good Luck, please...",
    html:`<p>Hi ${names} Verify your account with Good Luck, please.</p>
    <p>Your account is ready, you only have to confirm it in the following link:
    <a href="${process.env.URL_FRONT}/confirm/${token}">Verify account</a> </p>
    <p>Please disregard this email if you did not apply for this account.</p>
    `
  });
 // console.log("Mensaje enviado:%s",info.messageId);
};

export default emailRegister;
