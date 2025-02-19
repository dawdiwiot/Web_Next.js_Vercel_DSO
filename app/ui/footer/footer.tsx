import Link from "next/link";

import styles from "./footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="footer" className={styles.wrapper}>
      <h3>AIRDUKON</h3>
      <div className={`${styles.contentWrapper} container mx-auto`}>
        <div className={styles.contactColumn}>
          <div>
            <a href="tel:600 00 00 00">
              <img src="/icons/phone.png"></img>
              <span>600 00 00 00</span>
            </a>
          </div>
          <div>
            <a href="mailto:info@airdukon.es">
              <img src="/icons/mail.png"></img>
              <span>info@airdukon.es</span>
            </a>
          </div>

          <div className={`${styles.socialLinks} lg:hidden`}>
            <span>Síguenos</span>
            <div>
              <a href="https://x.com/home">
                <img src="/icons/x.png" alt="Logo de X"></img>
              </a>
              <a href="https://www.facebook.com/">
                <img src="/icons/facebook.png" alt="Logo de facebook"></img>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.linksColumn}>
          <Link className={`${styles.link}`} href={"/politicas-privacidad"}>
            Política de Privacidad
          </Link>
          <Link className={`${styles.link}`} href={"/politicas-cookies"}>
            Política de Cookies
          </Link>
          <span>© {year} Airdukon. Todos los derechos reservados</span>
        </div>

        <div className={`${styles.socialLinks} hidden lg:block`}>
          <span>Síguenos</span>
            <a href="https://x.com/home">
              <img src="/icons/x.png" alt="Logo de X"></img>
            </a>
            <a href="https://www.facebook.com/">
              <img src="/icons/facebook.png" alt="Logo de facebook"></img>
            </a>
        </div>
      </div>
    </div>
  );
}
