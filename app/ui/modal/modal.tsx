"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import styles from "./modal.module.scss";
import { useEffect, useRef, Suspense } from "react";

function Component() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dialogRef.current && !dialogRef.current?.contains(event.target)) {
        router.push(pathname);
      }
    };

    if (modal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal]);

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className={styles.wrapper} ref={dialogRef}>
            <h3>AIRDUKON</h3>
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
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

const Modal = () => {
  return (
    <Suspense>
      <Component></Component>
    </Suspense>
  );
};

export default Modal;
