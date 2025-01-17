interface EmailTemplateProps {
    firstName: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    phone,
    message,
}) => (
    <div>
        <h1>Bạn có 1 khách hàng mới</h1>
        <p>Đã có 1 khách hàng quan tâm đến dịch vụ và để lại thông tin liên lạc</p>
        <p>Hãy kiểm tra thông tin và liên hệ cho khách hàng sớm nhất có thể nhé!</p>
        <p>Thông tin khách hàng</p>
        <ul>
            <li>Họ và tên: {firstName}</li>
            <li>Email: {email}</li>
            <li>Số điện thoại: {phone}</li>
            <li>Lời nhắn: {message}</li>
        </ul>
    </div>
);
