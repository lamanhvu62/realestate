"use client";

import { BannerType } from "../../types";
import style from "./style.module.scss";
import {
  Bathtub,
  Bed,
  Dataset,
  Sell,
  WhatshotSharp,
} from "@mui/icons-material";

export default function Projects({ data }: { data: BannerType[] }) {
  return (
    <div>
      <div className="container mx-auto py-11 max-w-5xl">
        <h3 className="text-3xl font-bold text-center text-yellow-400 mb-2">
          Dự Án
        </h3>
        <p className="text-center mb-6 text-gray-600">
          Hãy xem những dự án nổi bật của chúng tôi
        </p>
        <div className="flex flex-wrap text-gray-700">
          {data.map((item, index) => (
            <div key={item.id} className={`w-1/2 p-2 order-${item.order}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
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
                <div className="p-2 flex items-center justify-between">
                  <p className="mb-0 font-semibold text-gray-700">
                    <Sell style={{ fontSize: "26px", color: "#facc15" }} />
                    {item.price}
                  </p>
                  <ul className="flex items-center">
                    <li className="p-1 font-semibold flex flex-col items-center">
                      <p>
                        <Dataset
                          style={{ fontSize: "36px", color: "#facc15" }}
                        />
                        {item.bed}
                      </p>
                      <p>Diện tích</p>
                    </li>
                    <li className="p-1 font-semibold flex flex-col items-center">
                      <p>
                        <Bed style={{ fontSize: "36px", color: "#facc15" }} />
                        {item.area}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
