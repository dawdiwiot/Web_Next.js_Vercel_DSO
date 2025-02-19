import styles from "./quienes-somos.module.scss";
import { WhereToFindUs } from "../ui/whereToFindUs/whereToFindUs";
import { ValuesCarousel } from "../ui/valuesCarousel/valuesCarousel";

export default function Productos() {
  return (
    <main>
      <section className={styles.bannerWrapper}>
        <div className={`container mx-auto px-4 md:px-28 lg:px-8`}>
          <h1>Bienvenidos a Airdukon</h1>
          <p className={styles.textoGrande}>
            Cambios Git Hub
          </p>
          <p>
            En Airdukon, nuestra pasión es superar tus expectativas. Desde
            nuestros inicios, nos hemos dedicado a diseñar sistemas innovadores
            que no solo controlan la temperatura, sino que también infunden un
            ambiente de bienestar y armonía en cada rincón. Nos esforzamos por
            ofrecer soluciones que transforman espacios ordinarios en entornos
            extraordinarios.
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
            Nuestro compromiso con la excelencia y la satisfacción del cliente
            nos impulsa a servir a clientes en todas las regiones de España,
            desde grandes ciudades hasta áreas rurales.
          </p>
          <p>
            <b>Cobertura Nacional: </b> Contamos con una red de expertos
            técnicos y profesionales capacitados distribuidos en toda España.
            Esto nos permite llegar a clientes en cualquier lugar del país, ya
            sea en la costa, en el interior o en las islas.
          </p>
          <p>
            <b>Presencia Local, Servicio Global: </b>A través de nuestra
            presencia local, podemos ofrecer un servicio cercano y personalizado
            en cada región. Entendemos las necesidades climáticas y las
            particularidades de cada área geográfica, lo que nos permite adaptar
            nuestras soluciones a las condiciones específicas de cada cliente.
          </p>

          <p>
            <b>Compromiso con la Calidad y Eficiencia: </b>
            Independientemente de dónde te encuentres en España, puedes confiar
            en Airdukon para ofrecerte productos y servicios de alta calidad que
            mejoren tu calidad de vida y te proporcionen un confort duradero.
          </p>
        </div>
      </section>
      <WhereToFindUs></WhereToFindUs>
    </main>
  );
}
