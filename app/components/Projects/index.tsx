"use client";

import Link from "next/link";
import { BannerType } from "../../types";
import style from "./style.module.scss";
import {
  Bathtub,
  Bed,
  Dataset,
  Sell,
  WhatshotSharp,
} from "@mui/icons-material";
import Card from '../Skeleton/Card'

export default function Projects({ data, loading }: { data: BannerType[], loading: boolean }) {
  if (loading) {
    return (
      <div className="container mx-auto py-11 max-w-5xl">
        <h3 className="text-3xl font-bold text-center text-yellow-400 mb-2 [text-shadow:_0_2px_1px_rgb(0_0_0_/_40%)]">
          Dự Án
        </h3>
        <p className="text-center mb-6 text-gray-600">
          Hãy xem những dự án nổi bật của chúng tôi
        </p>
        <div className="flex flex-wrap">
          <div className="xl:w-1/2 w-full p-3">
            <Card />
          </div>
          <div className="xl:w-1/2 w-full p-3">
            <Card />
          </div>
          <div className="xl:w-1/2 w-full p-3">
            <Card />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="container mx-auto py-11 max-w-5xl">
        <h3 className="text-3xl font-bold text-center text-yellow-400 mb-2 [text-shadow:_0_2px_1px_rgb(0_0_0_/_40%)]">
          Dự Án
        </h3>
        <p className="text-center mb-6 text-gray-600">
          Hãy xem những dự án nổi bật của chúng tôi
        </p>
        <div className="flex flex-wrap text-gray-700">
          {data.map((item) => (
            <div key={item.id} className={`xl:w-1/2 w-full p-2 hover:-translate-y-1 transition-all`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <Link href={`/du-an/${item.link}`} className="block">
                  <div
                    className={`${style.card}`}
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    {item.hot && (
                      <span className={style.hot}>
                        <WhatshotSharp style={{ color: "#fff" }} />
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-yellow-500 text-shadow [text-shadow:_0_2px_1px_rgb(0_0_0_/_40%)] p-3">
                      {item.name}
                    </h3>
                  </div>
                  <div className="p-2 flex xl:flex-row flex-col-reverse items-center justify-between">
                    <div className="flex justify-between items-center w-full lg:w-auto mt-3 lg-mt-0">
                      <p className="mb-0 font-semibold text-gray-700 xl:mt-0 mt-3">
                        <Sell style={{ fontSize: "26px", color: "#facc15" }} />
                        {item.price}
                      </p>
                      <span className="p-2 bg-yellow-500 text-white rounded-md block text-center lg:hidden">
                        Xem chi tiết
                      </span>
                    </div>
                    <ul className="flex items-center">
                      <li className="p-1 font-semibold flex flex-col items-center">
                        <p>
                          <Dataset
                            style={{ fontSize: "36px", color: "#facc15" }}
                          />
                          {item.area}
                        </p>
                        <p>Diện tích</p>
                      </li>
                      <li className="p-1 font-semibold flex flex-col items-center">
                        <p>
                          <Bed style={{ fontSize: "36px", color: "#facc15" }} />
                          {item.bed}
                        </p>
                        <p>Phòng ngủ</p>
                      </li>
                      <li className="p-1 font-semibold flex flex-col items-center">
                        <p>
                          <Bathtub
                            style={{ fontSize: "36px", color: "#facc15" }}
                          />
                          {item.shower}
                        </p>
                        <p>Phòng tắm</p>
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
