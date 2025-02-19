"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./valuesCarousel.module.scss";

export function ValuesCarousel() {
  return (
    <Swiper
      slidesPerView={2}
      modules={[Autoplay]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        768: {
          enabled: false,
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide className={`${styles.value} ${styles.odd}`}>
        <img src="/icons/experience.png" alt="Experiencia en el sector" />
        <span>Experiencia en el sector</span>
      </SwiperSlide>

      <SwiperSlide className={`${styles.value} ${styles.even}`}>
        <img src="/icons/commitment.png" alt="Compromiso" />
        <span>Compromiso</span>
      </SwiperSlide>

      <SwiperSlide className={`${styles.value} ${styles.odd}`}>
        <img src="/icons/professionalism.png" alt="Profesionalidad" />
        <span>Profesionalidad</span>
      </SwiperSlide>

      <SwiperSlide className={`${styles.value} ${styles.even}`}>
        <img src="/icons/seriousness.png" alt="Seriedad" />
        <span>Seriedad</span>
      </SwiperSlide>
    </Swiper>
  );
}
