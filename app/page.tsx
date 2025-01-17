"use client";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import type { BannerType } from "./types";
import Partner from "./components/Partner";
import Contact from "./components/Contact";

export default function Home() {
  const [banners, setBanners] = useState<BannerType[]>([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/banner");
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    }
    fetchData();
  }, []);

  
  return (
    <div>
      <Banner data={banners} />
      <Projects data={banners} />
      <Partner />
      <Contact />
    </div>
  );
}
