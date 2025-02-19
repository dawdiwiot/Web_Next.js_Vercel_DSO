"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.scss";
import { navbarConfig, NavbarItem } from "./navbarConfig";
import { Button } from "../button/button";

const activeClasses = styles.activeLink;
const normalClasses = styles.link;

const level2Items = navbarConfig.filter((c) => c.level === 2).sort();

export function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isSubMenuOpen, setSubmenuOpen] = useState(false);
  const [desktopSubMenuConfig, setDesktopSubmenuConfig] = useState<
    NavbarItem | undefined
  >(undefined);
  const [isDesktopSubMenuOpen, setDesktopSubmenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setSubmenuOpen(false);
    setDesktopSubmenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleOpenSubmenu = (ev: any) => {
    ev.preventDefault();
    setSubmenuOpen(!isSubMenuOpen);
  };

  const handleOpenDesktopMenu = (item: NavbarItem) => {
    setDesktopSubmenuConfig(item);
    setDesktopSubmenuOpen(true);
  };

  const handleCloseDesktopSubmenu = () => {
    setDesktopSubmenuOpen(false);
  };

  const getLink = (url: string) => {
    return navbarConfig.find((link) => link.url === url);
  };

  const isActiveLink: (url: string) => boolean = (url) => {
    const currentLink = getLink(url);
    const isChildrenUrl = !!navbarConfig
      .filter((config) => config.parentId === currentLink!.id)
      .find((c) => c.url === pathname);
    return currentLink?.url === pathname || isChildrenUrl;
  };

  const getLinkClass: (url: string) => string = (url) =>
    isActiveLink(url) ? activeClasses : normalClasses;

  return (
    <nav className={styles.wrapper} id="header">
      <div className="container mx-auto px-4 flex justify-between items-center pt-4 pb-2 md:px-28 lg:px-8">
        <Link href="/">
          <img src="/logo.png" className={styles.logo} alt="Logo Airdukon" />
        </Link>

        {/* ----------------------   TABLET/DESKTOP MENU  ---------------------------*/}
        <div className={`hidden md:flex items-center`}>
          <ul className="flex flex-row gap-8 items-center md:gap-12">
            {navbarConfig
              .filter(
                (linkConfig) => linkConfig.level === 1 && !linkConfig.isHidden
              )
              .sort()
              ?.map((config) => (
                <li key={`link-level1-${config.id}`} className="text-center">
                  <Link
                    className={`${getLinkClass(config.url)}`}
                    href={config.url}
                  >
                    {config.description}
                  </Link>
                </li>
              ))}
            <li className="hidden lg:block">
              <Link href={"?modal=true"}>
                <Button text="Contáctanos" color="secondary"></Button>
              </Link>
            </li>
          </ul>
        </div>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          type="button"
        >
          <span className="sr-only">Open main menu</span>
          <img src="/icons/menuButton.png" alt="open main menu"></img>
        </button>
      </div>

      {/* ----------------------  SECONDARY BAR ---------------------------*/}
      <div className={styles.secondaryBar}>
        <div className="container mx-auto px-4 md:px-28 lg:px-8">
          <span className="block text-end md:hidden">
            {getLink(pathname)?.description}
          </span>
          <div className="hidden md:flex flex-row justify-between lg:justify-around lg:max-w-3xl lg:mx-auto">
            {level2Items.map((item) => (
              <button
                key={`secondartBar-${item.id}`}
                type="button"
                onClick={() => handleOpenDesktopMenu(item)}
              >
                {item.description}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------------  DESKTOP SUBMENU BAR ---------------------------*/}
      <div
        className={`${styles.desktopSubmenu} ${
          desktopSubMenuConfig && isDesktopSubMenuOpen ? styles.opened : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-28 lg:px-8">
          <div className={styles.desktopSubmenuWrapper}>
            <div className={styles.desktopSubmenuLeft}>
              <button onClick={handleCloseDesktopSubmenu}>
                <img src="/icons/desktopSubmenuArrow.png"></img>
              </button>
              <div>
                {desktopSubMenuConfig?.config ? (
                  <Link href={desktopSubMenuConfig?.url || ""}>
                    <div
                      className={styles.leftImg}
                      style={{
                        backgroundImage: `url("${desktopSubMenuConfig?.config?.image}")`,
                      }}
                    ></div>
                    {desktopSubMenuConfig?.config?.title}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.desktopSubmenuRight}>
              {desktopSubMenuConfig?.config?.productsListItems?.map((item) => (
                <div key={item.title} className={styles.desktopSubmenuItem}>
                  <div
                    className={styles.rightImg}
                    style={{
                      backgroundImage: `url("${item.imgXs}")`,
                    }}
                  ></div>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------   MOBILE MENU  ---------------------------*/}
      <div
        className={`md:hidden ${styles.mobileMenu} ${
          isOpen ? styles.open : styles.close
        }`}
      >
        <ul className={styles.firstLevelMenu}>
          {navbarConfig
            .filter(
              (linkConfig) => linkConfig.level === 1 && !linkConfig.isHidden
            )
            .sort((config) => config.order)
            ?.map((config) => {
              const childs = navbarConfig.filter(
                (c) => c.parentId === config.id
              );

              return (
                <li key={`link-level1-${config.id}`}>
                  <Link className={getLinkClass(config.url)} href={config.url}>
                    <span>
                      {config.description}

                      {childs.length ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 ml-3 font-bold"
                          onClick={handleOpenSubmenu}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      ) : (
                        ""
                      )}
                    </span>
                  </Link>
                  {childs.length ? (
                    <ul
                      className={`${styles.secondLevelMenu} ${
                        isSubMenuOpen && isOpen ? styles.open : styles.close
                      }`}
                    >
                      {childs.map((child) => (
                        <li key={`link-level2-${child.id}`}>
                          <Link
                            className={`block relative p-0 px-4 lg:px-6 ${getLinkClass(
                              child.url
                            )}`}
                            href={child.url}
                          >
                            <span>{child.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}
