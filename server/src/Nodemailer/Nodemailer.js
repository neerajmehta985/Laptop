const nodemailer = require("nodemailer");
require('dotenv').config()

module.exports.OTPSender = async (email,Name,randomOtp) => {

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.NodeMailerId,
                pass: process.env.Password
            }
        });
        

 const info = await transporter.sendMail({
            from: '"NEERAJ MEHTA" <your-email@gmail.com>',
            to: email,
            subject: "Your Email OTP to Reset Password on MoviesAll",
            html: `
            <div style="background-color:#16253D;padding:20px;color:#fff;font-family:Arial, sans-serif;border-radius:10px;">
                <h2 style="color:#FF4500;">HACKERS</h2>
                <p>Hi ${Name},</p>
                <p>YO</p>
                <div style="background-color:#fff;color:#000;font-size:24px;font-weight:bold;text-align:center;padding:10px;margin:20px 0;border-radius:5px;">
                    ${randomOtp}
                </div>
                <p>The OTP is valid for 2 minutes.</p>
                <p>For account safety, do not share your OTP with others.</p>
                <br>
                <p>hackers neerajmehta,</p>
                <p>Team neerajmehta</p>
            </div>
            `,
        });

    }
    catch (e) { return res.status(500).send({ Status: false, msg: e.message }) }
}