import { InfoSection } from "../ui/InfoSection/infoSection";
import styles from "./servicios.module.scss";

const ductsConfig = {
  id: "ducts",
  className: styles.infoSection,
  imageConfig: {
    alt: "Conductos de climatización",
    xs: "./ducts.png",
    md: "./ducts-md.png",
    lg: "./ducts-lg.png",
  },
  title: "Conductos de climatización",
  children: (
    <div>
      <p>
        En Airdukon, nos especializamos en la instalación de conductos de
        ventilación a medida, diseñados para adaptarse perfectamente a las
        necesidades específicas de tu espacio.
      </p>
      <p>
        Nuestro proceso de instalación comienza con una evaluación detallada de
        tu propiedad y tus requisitos de ventilación.
      </p>
      <p>
        Damos asistencia técnica en cualquier momento del proyecto, realizando
        informes técnicos, consultoría, gestión y administración de proyectos y
        redacción de estudios de ingeniería.
      </p>
    </div>
  ),
};

const airConditioningConfig = {
  id: "airConditioning",
  className: styles.infoSectionAir,
  imageConfig: {
    alt: "Aire acondicionado",
    xs: "./airConditioning.png",
    md: "./airConditioning-md.png",
    lg: "./airConditioning-lg.png",
  },
  title: "Aire acondicionado",
  children: (
    <div>
      <p>
        Nos dedicamos a proporcionar instalaciones profesionales y
        personalizadas de sistemas de aire acondicionado para garantizar el
        confort y bienestar en tu hogar o espacio comercial.
      </p>
      <p>
        Nuestro proceso de instalación sigue estándares rigurosos para asegurar
        un rendimiento óptimo y duradero de tu sistema de aire acondicionado.
      </p>
      <p>
        Damos asistencia técnica en cualuier momento del proyecto, realizando
        informes técnicos, consultoría, gestión y administración de proyectos y
        redacción de estudios de ingeniería.
      </p>
    </div>
  ),
};

export default function Servicios() {
  return (
    <main className={styles.wrapper}>
      <InfoSection {...ductsConfig}></InfoSection>
      <section className={styles.contentWrapper}>
        <div className="container mx-auto px-12 md:px-32">
          <h1>Realizamos</h1>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img src="/icons/manufacturing.png" alt="Fabricacion"></img>
              <div>
                <h3>Frabricación</h3>
                <p>
                  Nuestro equipo fabricará los conductos a medida en vuestras
                  instalaciones. Cada sección de conducto se corta y ensambla
                  con precisión para garantizar un ajuste perfecto una vez
                  instalado.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <img src="/icons/instalation.png" alt="Instalación"></img>
              <div>
                <h3>Instalación</h3>
                <p>
                  Nos comprometemos a realizar un trabajo limpio, eficiente y
                  con el mínimo impacto en tus actividades diarias.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <img
                src="/icons/rehabilitation.png"
                alt="Reabilitación y Mantenimiento"
              ></img>
              <div>
                <h3>Reabilitación y Mantenimiento</h3>
                <p>
                  Ofrecemos programas de mantenimiento y reabilitación de
                  equipos.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <img
                src="/icons/anytime.png"
                alt="En cualquier momento del proyecto"
              ></img>
              <div>
                <h3>En cualquier momento del proyecto</h3>
                <p>
                  Puedes contar con nosotros en cualquier momento del proyecto,
                  no debe ser al inicio, nosotros nos adaptamos a cada proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection {...airConditioningConfig}></InfoSection>
      <section
        className={`${styles.contentWrapper} ${styles.contentWrapperAir}`}
      >
        <div className="container mx-auto px-12 md:px-32">
          <h2>Realizamos</h2>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img src="/icons/instalation.png" alt="Instalación"></img>
              <div>
                <h3>Instalación</h3>
                <p>
                  Nos comprometemos a realizar un trabajo limpio, eficiente y
                  con el mínimo impacto en tus actividades diarias.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <img
                src="/icons/rehabilitation.png"
                alt="Reabilitación y Mantenimiento"
              ></img>
              <div>
                <h3>Reabilitación y Mantenimiento</h3>
                <p>
                  Ofrecemos programas de mantenimiento y reabilitación de
                  equipos.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <img
                src="/icons/anytime.png"
                alt="En cualquier momento del proyecto"
              ></img>
              <div>
                <h3>En cualquier momento del proyecto</h3>
                <p>
                  Puedes contar con nosotros en cualquier momento del proyecto,
                  no debe ser al inicio, nosotros nos adaptamos a cada proyecto.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <img
                src="/icons/buy.png"
                alt="Compra de material y equipos"
              ></img>
              <div>
                <h3>Compra de material y equipos</h3>
                <p>
                  Nos encargamos de realizar el asesoramiento y la compra de
                  material y equipos, para poder realizar la instalación del
                  aire acondicionado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
