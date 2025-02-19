"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { InfoSection, InfoSectionProps } from "../InfoSection/infoSection";

const bannerInfoSectionConfig: InfoSectionProps[] = [
  {
    id: "homeBanner-1",
    imageConfig: {
      alt: "Tubos de ventilación",
      xs: "./home-banner-1.png",
      md: "./home-banner-1-md.png",
      lg: "./home-banner-1-lg.png",
    },
    title: "Desde Airdukon",
    children: (
      <div>
        <p>
          Transformamos la manera en que experimentas el confort en tu vida
          diaria. Somos creadores de ambientes que inspiran, refrescan y elevan
          tus momentos.
        </p>
        <br />
        <p>
          Cada sistema que creamos está respaldado por años de investigación,
          desarrollo y pruebas rigurosas para garantizar su rendimiento óptimo y
          durabilidad.
        </p>
      </div>
    ),
    buttonsConfig: [
      {
        className: "big",
        color: "link",
        text: "Saber más",
        href: "/quienes-somos"
      },
      {
        className: "big",
        color: "secondary",
        text: "Contáctanos",
        href: "?modal=true"
      },
    ],
  },
  {
    id: "homeBanner-2",
    imageConfig: {
      alt: "Planificación del proyecto",
      xs: "./home-banner-2.png",
      md: "./home-banner-2-md.png",
      lg: "./home-banner-2-lg.png",
    },
    title: "Desde Airdukon",
    children: (
      <div>
        <p>
          Entendemos que cada cliente y cada proyecto son únicos. Por eso,
          estamos preparados para unirnos en cualquier etapa del proceso, desde
          la consulta inicial hasta la implementación y el mantenimiento
          continuo.
        </p>
        <br />
        <p>
          Nuestra empresa está diseñada para adaptarse a tus necesidades. Si ya
          tienes un proyecto en marcha y necesitas asesoramiento técnico o
          soluciones adicionales, estamos listos para unirnos en cualquier
          momento para ofrecerte nuestra experiencia y recursos.
        </p>
      </div>
    ),
    buttonsConfig: [
      {
        className: "big",
        color: "link",
        text: "Saber más",
        href: "/quienes-somos"
      },
      {
        className: "big",
        color: "secondary",
        text: "Contáctanos",
        href: "?modal=true"
      },
    ],
  },
];

export function HomeBannerSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      modules={[ Autoplay]}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
    >
      {bannerInfoSectionConfig.map((config, i) => (
        <SwiperSlide key={`homeBannerSwiper-${i}`}>
          <InfoSection {...config}></InfoSection>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
