import styles from "./quienes-somos.module.scss";
import { WhereToFindUs } from "../ui/whereToFindUs/whereToFindUs";
import { ValuesCarousel } from "../ui/valuesCarousel/valuesCarousel";

export default function Productos() {
  return (
    <main>
      <section className={styles.bannerWrapper}>
        <div className={`container mx-auto px-4 md:px-28 lg:px-8`}>
          <h1>Cambios Git Hub</h1>
          <p className={styles.textoGrande}>
            Cambios Git Hub
          </p>
          <p>

          </p>
        </div>
      </section>
      <section className={styles.ourValues}>
        <h2>Nuestros valores</h2>
        <div
          className={`${styles.valuesWrapper} container mx-auto px-12 md:px-28 lg:px-8`}
        >
          <ValuesCarousel></ValuesCarousel>
        </div>
        <div
          className={`${styles.valuesDescriptions} container mx-auto px-12 md:px-28 lg:px-8`}
        >
          <p>
      
          </p>
          <p>
           
          </p>
          <p>
            <b>
          </p>

          <p>
            <b>
          </p>
        </div>
      </section>
      <WhereToFindUs></WhereToFindUs>
    </main>
  );
}
