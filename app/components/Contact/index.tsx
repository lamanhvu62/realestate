"use client";
import { useRef, useState } from "react";
import style from "./style.module.scss";

export default function Contact() {

    const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const ref = useRef<HTMLFormElement>(null)

    interface Event {
        target: {
            name: string;
            value: string;
        };
    }

    const handleChange = (e: Event) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/sendmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            setLoading(false);
            setSuccess(true);
        } catch (error) {
            console.error("Error sending data:", error);
        }
        
        setInterval(() => {
            setSuccess(false);
            ref.current?.reset();
        }, 5000);
    }

    return (
        <div className="" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/landfinder-95adb.firebasestorage.app/o/living-room-gbb61c6983_1920.jpg?alt=media&token=b67ec3ee-5cdb-4c74-a16b-03996dae4d38)" }}>
            <div className="container mx-auto py-11 max-w-5xl">
                <h2 className="text-3xl font-bold text-center text-yellow-400 mb-2 [text-shadow:_0_2px_1px_rgb(0_0_0_/_40%)]">Liên hệ</h2>
                <p className="text-center mb-5">Hãy liên hệ với chúng tôi</p>
                <form id="form-contact" ref={ref} className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-1/2 p-2 mb-3 border border-gray-300 rounded"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input type="text" placeholder="Email" className="w-1/2 p-2 mb-3 border border-gray-300 rounded"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input type="text" placeholder="Số điện thoại" className="w-1/2 p-2 mb-3 border border-gray-300 rounded"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <textarea placeholder="Nội dung" className="w-1/2 p-2 mb-3 border border-gray-300 rounded"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="bg-yellow-400 text-white p-2 rounded"
                        disabled={loading}
                    >
                        {loading ? "Đang Gửi ..." : "Gửi"}
                    </button>
                </form>
            </div>
            {
                success && <Toast message="Gửi thành công, chúng tôi sẽ liên hệ cho bạn ngay" />
            }
        </div>
    );
}

const Toast = ({ message }: { message: string }) => {
    return (
        <div id="toast-simple" className={`fixed top-4 right-4 z-20 flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 ${style.toast}`} role="alert">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
            </svg>
            <div className="ps-4 text-sm font-normal">{message}</div>
        </div>

    );
}