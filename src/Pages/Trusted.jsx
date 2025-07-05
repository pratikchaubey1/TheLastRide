import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Trusted({ trust }) {
  return (
    <div className="mt-10 px-4 py-10 bg-gray-100 dark:bg-zinc-800 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-10">
        Our Trusted Members
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 2000 }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-14"
        >
          {trust.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 px-5 py-5 gap-5 mx-2 h-[220px] sm:h-[200px]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300 shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <p className="text-sm font-bold text-black dark:text-white">
                    Name:
                    <span className="ml-2 font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-pulse">
                      {item.name}
                    </span>
                  </p>

                  <p className="text-sm font-bold text-black dark:text-white">
                    Role:
                    <span className="ml-2 font-semibold text-gray-700 dark:text-gray-300">
                      {item.role}
                    </span>
                  </p>

                  <p className="text-sm font-bold text-black dark:text-white">
                    Age:
                    <span className="ml-2 font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
                      {item.age}
                    </span>
                  </p>

                  <div className="flex gap-3 pt-1">
                    {item.Insta && (
                      <a href={item.Insta} target="_blank" rel="noopener noreferrer">
                        <img
                          src="https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png"
                          alt="Instagram"
                          className="h-5 w-5 hover:scale-110 transition-transform duration-300"
                        />
                      </a>
                    )}
                    {item.discord && (
                      <a href={item.discord} target="_blank" rel="noopener noreferrer">
                        <img
                          src="https://img.icons8.com/?size=96&id=30998&format=png"
                          alt="Discord"
                          className="h-5 w-5 hover:scale-110 transition-transform duration-300"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination !mt-6 flex justify-center"></div>
      </div>
    </div>
  );
}

export default Trusted;
