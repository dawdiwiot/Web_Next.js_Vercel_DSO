import styles from "./whereToFindUs.module.scss";
import { InfoSection } from "../InfoSection/infoSection";

const whereToFindUsConfig = {
  id: "whereToFindUs",
  imageConfig: {
    alt: "Mapa sobre España",
    xs: "./whereToFindUs.png",
    md: "./whereToFindUs-md.png",
    lg: "./whereToFindUs-lg.png",
  },
  title: "Donde puedes encontrarnos",
  children: (
    <p>
      Actualmente nos situamos en Madrid, pero nos desplazamos a los
      alrededores. Nosotros somos quienes suministramos los materiales a nuestros
      clientes, desde nuestro gran almacén situado en el centro de Madrid.
    </p>
  ),
  buttonsConfig: [
    {
      className: "big",
      color: "secondary",
      text: "Contáctanos",
      href: "?modal=true",
    },
  ],
};

export function WhereToFindUs() {
  return (
    <section className={styles.wrapper}>
      <InfoSection {...whereToFindUsConfig}></InfoSection>
    </section>
  );
}
