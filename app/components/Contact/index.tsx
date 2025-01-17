"use client";
import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
    const [loading, setLoading] = useState(false);

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
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }

    return (
        <div className="" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/landfinder-95adb.firebasestorage.app/o/living-room-gbb61c6983_1920.jpg?alt=media&token=b67ec3ee-5cdb-4c74-a16b-03996dae4d38)" }}>
            <div className="container mx-auto py-11 max-w-5xl">
                <h2 className="text-3xl font-bold text-center text-yellow-400 mb-2 [text-shadow:_0_2px_1px_rgb(0_0_0_/_40%)]">Liên hệ</h2>
                <p className="text-center mb-5">Hãy liên hệ với chúng tôi</p>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
        </div>
    );
}