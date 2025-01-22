"use client";

import Image from "next/image";
import { Bathtub, Bed, Dataset, LocationOn, Sell } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { BannerType } from "../types";

// Import Swiper styles
import "swiper/css";

export default function Banner({data}: {data: BannerType[]}) {

  return (
    <div className="relative xl:h-screen overflow-hidden">
      <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
        {data.map((items) => {
          return (
            <SwiperSlide key={items.id}>
              <div className="w-full xl:h-screen relative flex xl:flex-row flex-col items-center justify-end z-20">
                <div className="xl:absolute -z-10 bottom-0">
                  <Image
                    src={items.img}
                    alt={items.name}
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="w-full xl:w-1/2 bg-white rounded flex relative">
                  <div className="absolute top-4 right-4">
                    <svg
                      viewBox="0 0 100 100"
                      width="70"
                      height="70"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m22 47.4-.2 1.8-9.3-1.1.7-6.1 1.6.2-.5 4.3 2.5.3.4-3.6 1.5.2-.4 3.6zm2.6-8.9c-1.2 2.5-3 3.1-6.1 1.6-3.1-1.4-4-3.2-2.8-5.7 1.2-2.6 3-3.1 6.2-1.6 3.1 1.4 3.9 3.1 2.7 5.7zm-3.5-4c-2.2-1-3.3-.8-3.9.6-.6 1.3-.1 2.3 2.1 3.3s3.2.8 3.9-.6c.6-1.4.1-2.3-2.1-3.3zm11.4-6.8-1.4 1.4-3.2-1.2c-.1.1-.3.3-.4.4l-1.2 1.2 2.2 2.2-1.3 1.3-6.7-6.5 2.5-2.5c1.9-2 3.2-2.4 5-.6 1.2 1.1 1.4 2.1.9 3.1zm-5.8-2.9c-1-1-1.7-.5-2.6.5l-1.1 1.1 2.2 2.2 1.1-1.1c1-1.1 1.4-1.8.4-2.7zm14-1c-2.3.8-3.9.2-4.6-1.9l1.7-.6c.4 1.1 1.2 1.4 2.4 1 1-.4 1.6-.9 1.3-1.7-.7-1.9-5.4 1.1-6.6-2.2-.5-1.6.1-3 2.4-3.8 2.5-.9 3.8-.1 4.4 1.8l-1.7.6c-.3-.7-.8-1.4-2.2-.9-1.2.4-1.5 1.1-1.2 1.7.7 1.9 5.4-1.2 6.6 2.2.7 1.7-.1 3-2.5 3.8zm11.1-1.8-.6-1.8-3.7.1-.6 1.7h-2l3.2-9.4h2.1l3.5 9.3zm-2.6-7.6-1.3 4.3 2.7-.1zm12.1 8-.5 1.6-5.4-1.6 2.6-9 1.8.5-2.1 7.3zm10.9-.6-3.7-2.4-1.2 1.9 3.2 2.1-.8 1.2-3.2-2.1-1.3 2.1 3.8 2.4-1 1.4-5.3-3.5 5.1-7.8 5.3 3.4zm13.5 30.1-.2-4.3-2.5.1.2 3.6-1.5.1-.2-3.6-3.7.2-.1-1.8 9.3-.4.3 6.1zm.5 7.9c-.7 2.7-2.5 3.5-5.8 2.6s-4.4-2.5-3.7-5.2 2.4-3.5 5.8-2.6c3.3.9 4.4 2.5 3.7 5.2zm-4.2-3.4c-2.3-.6-3.3-.2-3.7 1.2s.3 2.3 2.6 2.9 3.3.2 3.7-1.2-.3-2.2-2.6-2.9zm-1.4 14.8c-1.6 2.3-2.7 2.8-4.8 1.4-1.3-.9-1.8-1.8-1.4-2.9l-3.7-.5 1.1-1.6 3.4.6c.1-.2.2-.3.3-.5l1-1.4-2.6-1.8 1-1.5 7.7 5.3zm-2.8-4.1-.9 1.3c-.8 1.2-1.1 1.9.1 2.7s1.7.3 2.5-.9l.9-1.3zm-9.8 15.8c-2.4 1.3-3.7.7-4.7-1l1.6-.9c.4.7 1 1.2 2.3.5 1.2-.6 1.3-1.3.9-1.9-1-1.8-5.2 2-6.9-1.1-.9-1.6-.3-3.1 1.9-4.3 2.1-1.2 3.8-.8 4.8 1.1l-1.6.9c-.6-1-1.4-1.2-2.6-.6-1 .5-1.4 1.2-1 1.9 1 1.8 5.2-2 6.9 1.1 1 1.7.6 3.2-1.6 4.3zm-10.2 3.6-2.1.4-5-8.6 2-.4.9 1.7 3.6-.7.2-1.9 1.9-.4zm-3.5-5.5 2.1 4 .6-4.5zm-6.5 6.3-1.8-.2.9-7.6-3.7-.4.2-1.7 5.6.7zm-10.2-1.9-5.7-2.5.6-1.4 4.1 1.8.9-2-3.5-1.7.6-1.3 3.5 1.5 1-2.3-4.1-1.8.6-1.4 5.8 2.5zm12.3-18.8c9.2 0 16.6-7.4 16.6-16.6s-7.4-16.6-16.6-16.6-16.6 7.4-16.6 16.6 7.4 16.6 16.6 16.6m0 .4c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17-7.6 17-17 17zm0 2.6c10.8 0 19.6-8.8 19.6-19.6s-8.8-19.6-19.6-19.6-19.6 8.8-19.6 19.6 8.8 19.6 19.6 19.6m0 .4c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0 25.6c25.1 0 45.6-20.5 45.6-45.6s-20.5-45.6-45.6-45.6c-25.2 0-45.6 20.5-45.6 45.6s20.4 45.6 45.6 45.6m0 .4c-25.4 0-46-20.6-46-46s20.6-46 46-46 46 20.6 46 46-20.6 46-46 46zm0 2.6c26.8 0 48.6-21.8 48.6-48.6s-21.8-48.6-48.6-48.6c-26.8 0-48.6 21.8-48.6 48.6s21.8 48.6 48.6 48.6m0 .4c-27.1 0-49-21.9-49-49s21.9-49 49-49 49 21.9 49 49-21.9 49-49 49z"></path>
                    </svg>
                  </div>
                  <ul className="p-2 w-2/12 flex flex-col justify-between items-center">
                    <li className="basis-1/3 border-b flex flex-col items-center justify-center text-slate-600 font-semibold">
                      <Tooltip
                        title="Diện tích"
                        placement="top"
                        className="flex flex-col font-semibold items-center justify-center"
                      >
                        <div>
                          <Dataset
                            style={{ fontSize: "36px", color: "#facc15" }}
                          />
                          <span>
                            {items.area}m<sup>2</sup>
                          </span>
                        </div>
                      </Tooltip>
                    </li>
                    <li className="basis-1/3 border-b flex flex-col items-center justify-center text-slate-600 font-semibold">
                      <Tooltip
                        title="Phòng tắm"
                        placement="top"
                        className="flex flex-col items-center justify-center font-semibold"
                      >
                        <div>
                          <Bathtub
                            style={{ fontSize: "36px", color: "#facc15" }}
                          />
                          {items.shower}
                        </div>
                      </Tooltip>
                    </li>
                    <li className="basis-1/3 flex flex-col font-semibold items-center justify-center text-slate-600">
                      <Tooltip
                        title="Phòng ngủ"
                        placement="top"
                        className="flex flex-col items-center justify-center"
                      >
                        <div>
                          <Bed style={{ fontSize: "36px", color: "#facc15" }} />
                          {items.bed}
                        </div>
                      </Tooltip>
                    </li>
                  </ul>
                  <div className="p-3 border-l w-10/12">
                    <p className="text-slate-600 mb-6">
                      <LocationOn
                        style={{ fontSize: "26px", color: "#facc15" }}
                      />
                      {items.address}
                    </p>
                    <h2 className="text-xl xl:text-3xl font-bold text-yellow-400 mb-4">
                      {items.name}
                    </h2>
                    <p className="mb-4 text-slate-600">{items.desc}</p>
                    <div className="flex xl:flex-row flex-col justify-between xl:items-center">
                      <p className="text-slate-600 text-xl xl:text-2xl font-semibold xl:mb-0 mb-3">
                        <Sell style={{ fontSize: "26px", color: "#facc15" }} />
                        {items.price} VND
                      </p>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#facc15" }}
                      >
                        <Link href={`/du-an/${items.link}`}>Xem chi tiết</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
