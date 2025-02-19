import Link from "next/link";
import styles from "./home.module.scss";
import { Button } from "./ui/button/button";
import { HomeBannerSwiper } from "./ui/homeBannerSwiper/homeBannerSwiper";
import OurBrandCarousel from "./ui/ourBrandsCarousel/ourBrandsCarousel";
import { CircleTooltip } from "./ui/circleTooltip/circleTooltip";
import { WhereToFindUs } from "./ui/whereToFindUs/whereToFindUs";

export default function Home() {
  return (
    <>
      <section className={styles.homeBannerWrapper}>
        <HomeBannerSwiper></HomeBannerSwiper>
      </section>
      <section className={styles.ourBrandCarouselWrapper}>
        <OurBrandCarousel></OurBrandCarousel>
      </section>
      <section className={`container mx-auto px-4 md:px-28 lg:px-8`}>
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-end md:justify-between">
          <h2>Nuestros productos</h2>
          <Button
            text="Ver productos"
            color="primary"
            href={"/productos"}
          ></Button>
        </div>
        <div className={`${styles.productsGridWrapper}`}>
          <div className={styles.item1}>
            <CircleTooltip
              className={styles.circle1}
              title="Aire acondiconado Split"
              description="Sistema de climatización a nivel domestico."
              href="/productos/ventilacion-y-climatizacion"
            ></CircleTooltip>
            <picture>
              <source
                srcSet="/home-products-1-lg.png"
                media="(min-width: 1024px)"
              />
              <source
                srcSet="/home-products-1-md.png"
                media="(min-width: 768px)"
              />
              <img
                src="/home-products-1.png"
                alt="imagen de un salón con un aire acondicionado"
              />
            </picture>
          </div>

          <picture className={styles.item2}>
            <CircleTooltip
              className={styles.circle2}
              title="Radiador baja temperatura"
              description="La elección perfecta cuando se trata de combinar confort y eficiencia."
              href="/productos/calefaccion"
            ></CircleTooltip>
            <source
              srcSet="/home-products-2-lg.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/home-products-2-md.png"
              media="(min-width: 768px)"
            />
            <img
              src="/home-products-2.png"
              alt="imagen de una habitación con un radiador"
            />
          </picture>

          <picture className={styles.item3}>
            <CircleTooltip
              className={styles.circle3}
              title="Aire acondiconado Conductos"
              description="Es un tipo de aire acondicionado más discreto y estético."
              href="/productos/ventilacion-y-climatizacion"
              position="bottomLeft"
            ></CircleTooltip>
            <source
              srcSet="/home-products-3-lg.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/home-products-3-md.png"
              media="(min-width: 768px)"
            />
            <img
              src="/home-products-3.png"
              alt="imagen de un espacio abierto con ventilación por conductos"
            />
          </picture>

          <picture className={styles.item4}>
            <CircleTooltip
              className={styles.circle4}
              title="Aire acondiconado Cassette"
              description="Con numerosas salidas de aire, sirve para hogar y empresas."
              href="/productos/ventilacion-y-climatizacion"
              position="bottomLeft"
            ></CircleTooltip>
            <source
              srcSet="/home-products-4-lg.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/home-products-4-md.png"
              media="(min-width: 768px)"
            />
            <img
              src="/home-products-4.png"
              alt="imagen de un restaurante con un aire acondicionado de tipo cassete"
            />
          </picture>

          <div className={styles.item5}>
            <p className="font-semibold leading-4 mb-3 lg:leading-7 xl:mb-4">
              Nuestros productos
            </p>
            <p className="mb-4 md:mb-3 xl:mb-8">
              Tenemos gran variedad y para todos los lugares.
            </p>
            <Link href={"/productos"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <hr className={`${styles.separator} lg:hidden`} />
      <section
        className={`${styles.ourServiceWrapper} container mx-auto px-12 md:px-28 lg:px-8`}
      >
        <Button
          text="Ver servicios"
          color="primary"
          href={"/servicios"}
        ></Button>
      </section>

      <section className={`container mx-auto md:px-28 lg:px-8`}>
        <div className={styles.serviceList}>
          <div className={styles.card}>
            <h3>Descubre nuestros servicios</h3>
            <Link href={"/servicios"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className={styles.imageCard}>
            <Link href={"/servicios"}>
              <picture>
                <source
                  srcSet={"/home-services-1-lg.png"}
                  media="(min-width: 1024px)"
                />
                <img
                  src="/home-services-1.png"
                  alt="Fabricación e instalación de conductos de climatización "
                />
              </picture>
              <span>
                Fabricación e instalación de conductos de climatización 
              </span>
            </Link>
          </div>

          <div className={styles.imageCard}>
            <Link href={"/servicios"}>
              <picture>
                <source
                  srcSet={"/home-services-2-lg.png"}
                  media="(min-width: 1024px)"
                />
                <img
                  src="/home-services-2.png"
                  alt="Distribución e instalación de aire acondicionado  "
                />
              </picture>
              <span>Distribución e instalación de aire acondicionado </span>
            </Link>
          </div>

          <div className={styles.imageCard}>
            <Link href={"/servicios"}>
              <picture>
                <source
                  srcSet={"/home-services-3-lg.png"}
                  media="(min-width: 1024px)"
                />
                <img
                  src="/home-services-3.png"
                  alt="Rehabilitación y mantenimiento de instalaciones de climatización  "
                />
              </picture>
              <span>
                Rehabilitación y mantenimiento de instalaciones de
                climatización 
              </span>
            </Link>
          </div>
        </div>
      </section>
      <WhereToFindUs></WhereToFindUs>
    </>
  );
}
