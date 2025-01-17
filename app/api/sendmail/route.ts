import { EmailTemplate } from "@/app/components/email/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

export const POST = async (req: Request) => {
    const data = await req.json();
    //send mail
    const resend = new Resend('re_ENk4WWDT_JvwoEchygVLA9s1wwUB7ZBof');

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'lamanhvu62@gmail.com',
        subject: 'You have new Customer',
        react: await EmailTemplate({ firstName: data.firstName, email: data.email, phone: data.phone, message: data.message }),
    });

    return new NextResponse(JSON.stringify({ success: 'true' }), { status: 200 });
};

export const GET = () => {
    return new NextResponse(JSON.stringify("Method GET not allowed"), { status: 405 });
};

export const PUT = () => {
    return new NextResponse(JSON.stringify("Method PUT not allowed"), { status: 405 });
};

export const DELETE = () => {
    return new NextResponse(JSON.stringify("Method DELETE not allowed"), { status: 405 });
};