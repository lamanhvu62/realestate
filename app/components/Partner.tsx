"use client";

import { useEffect, useState } from "react";
import { PartnerType } from "../types";
import Image from "next/image";

export default function Partner() {
    const [data, setData] = useState<PartnerType[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("/api/partner");
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching banner data:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="bg-white">
            <div className="container mx-auto py-11 max-w-5xl">
                <h2 className="text-3xl font-bold text-center text-yellow-400 mb-2 [text-shadow:_0_2px_1px_rgb(0_0_0_/_40%)]">Đơn vị Đồng Hành</h2>
                <p className="text-center mb-5">Các đơn vị và đối tác của chúng tôi</p>
                <ul className="flex flex-wrap justify-start items-center">
                    {
                        data.map((item, index) => (
                            <li key={item.id} className="flex items-center justify-center w-1/4">
                                <Image src={item.img} alt={item.name} width="1020" height="420" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}