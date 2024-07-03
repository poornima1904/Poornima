import { NextResponse } from "next/server";
import zod from "zod";
import stripIndent from "strip-indent";
import { Resend } from "resend";
import EmailTemplate from "@/email-templates/EmailTemplate";

export const runtime = "edge";

const contactFormValidator = zod.object({
  name: zod
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be less than 50 characters long" }),
  email: zod
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email Invalid!",
    })
    .email({ message: "Invalid email" }),
  message: zod
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message is Invalid!",
    })
    .min(3, { message: "Message must be at least 3 characters long" })
    .max(500, { message: "Message must be less than 500 characters long" }),
});

async function sendContactFormEmail(name, email, message) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  return await resend.emails.send({
    from: "Website Contact <contact@kittens.ninja>",
    to:['singhpoornima1904@gmail.com'],
    subject: "Website Contact Form Submission",
    text: stripIndent(`
      Message from ${name}
      ${email}
      ${message}
    `),
    react: EmailTemplate({ name, email, message }),
    reply_to: email,
  });
}

export const POST = async (req, res) => {
  try {
    const data = await req.json();
    const parseResult = contactFormValidator.safeParse(data);
    if (!parseResult.success) {
      return new NextResponse(JSON.stringify(parseResult.error.flatten()), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emailResponse = await sendContactFormEmail(
      parseResult.data.name,
      parseResult.data.email,
      parseResult.data.message
    );

    if (emailResponse.error) {
      return new NextResponse(
        JSON.stringify({ message: emailResponse.error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Email sent successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const OPTIONS = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return res.status(200).end();
};
