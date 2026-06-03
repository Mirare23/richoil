"use server";
import { Resend } from "resend";

export async function SendEmailSubmission(
  name: string,
  email: string,
  phone: string,
  message: string,
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const send = resend.emails
      .send({
        from: "bot@bot.richoil.id",
        to: "richoilindo@gmail.com",
        subject: "New Submission from Contact Form",
        html:
          "<div style='font-family: Arial, sans-serif; line-height: 1.5; color: #333;'>\n" +
          "<h2 style='color: #2c3e50;'>New Contact Form Submission</h2>\n" +
          "<p><strong>Name:</strong> " +
          name +
          "</p>\n" +
          "<p><strong>Email:</strong> " +
          email +
          "</p>\n" +
          "<p><strong>Phone:</strong> " +
          phone +
          "</p>\n" +
          "<p><strong>Message:</strong><br>" +
          message.replace(/\n/g, "<br>") +
          "</p>\n" +
          "</div>",
      })
      .then(() => {
        console.log("Email sent successfully!");
      });
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
