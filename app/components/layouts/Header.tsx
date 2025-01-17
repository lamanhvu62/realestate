"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Header() {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <header className={`transition-all duration-500 ${scroll ? "bg-white drop-shadow-sm" : "bg-tranparent"} fixed top-0 left-0 w-full z-50`}>
            <div className={`container mx-auto flex justify-between ${scroll ? "items-center" : "items-start"} `}>
                <div>
                    <h1 className="">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/landfinder-95adb.firebasestorage.app/o/landfinder-logo.svg?alt=media&token=acfa7936-e6a9-4935-9c5f-29f35540e6c6"
                            width={100}
                            height={100}
                            alt="Land Finder Logo"
                            className={`${scroll ? "w-20" : "w-32"} transition-all duration-500`}
                            />
                    </h1>
                </div>
                <nav className={`${scroll ? "" : "pt-3"} `}>
                    <ul className="flex items-center">
                        <li className="p-2">Dự án</li>
                        <li className="p-2">Giới Thiệu</li>
                        <li className="p-2">Liên Hệ</li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}