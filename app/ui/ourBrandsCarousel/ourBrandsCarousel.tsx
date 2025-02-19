"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";

import styles from "./ourBrandCarousel.module.scss";
import { brandsConfig } from "./brandsConfig";

function getRandomElements(arr: string[], count: number) {
  let shuffled = arr.slice(0);
  let i = arr.length;
  let min = i - count;
  let temp, index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(min);
}

export default function OurBrandCarousel() {
  const [numberOfITems, setNumberOfItems] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setNumberOfItems(
        window.innerWidth < 768 ? 4 : window.innerWidth > 1024 ? 18 : 12
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const randomBrands = getRandomElements(brandsConfig, numberOfITems);

  return (
    <div className={styles.wrapper}>
      <Swiper
        className="customSwipper"
        modules={[Pagination, Grid]}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
      >
        {randomBrands.map((data) => (
          <SwiperSlide key={data} className={styles.slide}>
            <img
              className={styles.brandImage}
              src={data}
              alt={data}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
