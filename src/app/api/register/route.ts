import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Server-side validation
    const requiredFields = ["fullName", "email", "whatsapp", "country", "address", "projects", "github", "experience", "linkedin", "portfolio"];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ success: false, message: `Field ${field} is required` }, { status: 400 });
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 });
    }

    // Configure the SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Define Email Options
    const mailOptions = {
      from: `"NeroDev Community" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `⚡ New NeroDev Registration: ${data.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Patrick+Hand&display=swap');
              body { background-color: #fdfbf7; padding: 20px; font-family: 'Patrick Hand', 'Comic Sans MS', cursive, sans-serif; color: #2d2d2d; }
              .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 4px solid #2d2d2d; box-shadow: 8px 8px 0px 0px #2d2d2d; padding: 0; position: relative; border-radius: 20px 5px 20px 5px / 5px 20px 5px 20px; overflow: hidden; }
              .header { background-color: #fff9c4; padding: 40px 20px; text-align: center; border-bottom: 4px solid #2d2d2d; }
              .logo { width: 50px; height: 50px; background: #e5e0d8; border: 3px solid #2d2d2d; display: inline-flex; align-items: center; justify-content: center; font-weight: 900; color: #2d2d2d; font-size: 24px; font-family: 'Kalam', cursive; box-shadow: 4px 4px 0px 0px #2d2d2d; margin-bottom: 20px; border-radius: 10px 3px 10px 3px / 3px 10px 3px 10px; }
              .content { padding: 40px 30px; background: white; }
              .section-title { font-size: 24px; font-weight: 700; color: #2d2d2d; font-family: 'Kalam', cursive; margin: 30px 0 15px; border-bottom: 3px dashed #2d2d2d; padding-bottom: 8px; text-transform: uppercase; }
              .data-row { margin-bottom: 24px; padding: 15px; background: #fdfbf7; border: 3px solid #2d2d2d; box-shadow: 4px 4px 0px 0px #2d2d2d; border-radius: 10px 5px 15px 5px / 5px 15px 5px 10px; }
              .label { font-size: 16px; font-weight: 700; color: #ff4d4d; text-transform: uppercase; margin-bottom: 8px; font-family: 'Kalam', cursive; }
              .value { font-size: 18px; font-weight: 600; color: #2d2d2d; line-height: 1.5; }
              .link { color: #2d5da1; text-decoration: underline; font-weight: 700; }
              .footer { padding: 20px; text-align: center; font-size: 16px; color: #2d2d2d; background-color: #e5e0d8; border-top: 4px solid #2d2d2d; font-weight: bold; }
              .badge { display: inline-block; padding: 6px 16px; border: 3px solid #2d2d2d; background: #2d5da1; color: white; font-size: 16px; font-weight: 700; box-shadow: 2px 2px 0px 0px #2d2d2d; border-radius: 5px 15px 5px 15px / 15px 5px 15px 5px; }
              .title-text { margin: 0; font-size: 36px; font-weight: 700; font-family: 'Kalam', cursive; color: #2d2d2d; }
              .subtitle-text { margin: 10px 0 0; font-size: 18px; font-weight: 600; color: #2d2d2d; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">ND</div>
                <h1 class="title-text">New Pioneer Joined!</h1>
                <p class="subtitle-text">A new member has registered for NeuroDev.</p>
              </div>
              
              <div class="content">
                <div class="section-title">Basic Information</div>
                <div class="data-row" style="background-color: #ffffff;">
                  <div class="label">Full Name</div>
                  <div class="value">${data.fullName}</div>
                </div>
                <div class="data-row">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${data.email}" class="link">${data.email}</a></div>
                </div>
                <div class="data-row" style="background-color: #ffffff;">
                  <div class="label">WhatsApp Number</div>
                  <div class="value">${data.whatsapp}</div>
                </div>
                <div class="data-row">
                  <div class="label">Location</div>
                  <div class="value">${data.country} — ${data.address}</div>
                </div>

                <div class="section-title">Professional Profile</div>
                <div class="data-row" style="background-color: #ffffff;">
                  <div class="label">Experience Level</div>
                  <div class="value"><span class="badge">${data.experience}</span></div>
                </div>
                <div class="data-row">
                  <div class="label">Projects Summary</div>
                  <div class="value">${data.projects}</div>
                </div>
                <div class="data-row" style="background-color: #ffffff;">
                  <div class="label">GitHub Profile</div>
                  <div class="value"><a href="${data.github}" class="link" target="_blank">${data.github}</a></div>
                </div>
                <div class="data-row">
                  <div class="label">LinkedIn Profile</div>
                  <div class="value"><a href="${data.linkedin}" class="link" target="_blank">${data.linkedin}</a></div>
                </div>
                <div class="data-row" style="background-color: #ffffff;">
                  <div class="label">Portfolio Link</div>
                  <div class="value"><a href="${data.portfolio}" class="link" target="_blank">${data.portfolio}</a></div>
                </div>
              </div>

              <div class="footer">
                &copy; ${new Date().getFullYear()} NeuroDev Infrastructure<br>
                Automated System Alert — Please respond within 24 hours.
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Registration successful" });
  } catch (error: any) {
    console.error("Nodemailer Error Details:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack
    });
    return NextResponse.json({ 
      success: false, 
      message: "Failed to send email. Please check server logs for details.",
      error: error.message 
    }, { status: 500 });
  }
}
