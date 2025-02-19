import { notFound } from "next/navigation";

import styles from "./productos.module.scss";
import { pagesConfigurations, PageConfig } from "./productosPagesConfig";
import { ProductList } from "../ui/productList/productList";
import { Button } from "../ui/button/button";

export async function generateStaticParams() {
  return Object.keys(pagesConfigurations).map((key) => ({
    slug: key.split("/"),
  }));
}

const ProductsPage = ({ params }: { params: any }) => {
  const productKey = params.slug.join("/");
  const pageConfig: PageConfig = pagesConfigurations[productKey];

  if (!pageConfig) {
    notFound();
  }

  const { title, children, allProductsButton, productsListItems } = pageConfig;
  return (
    <section className={`${styles.wrapper}`}>
      <div className="container mx-auto px-4 md:px-28 lg:px-0">
        <h1>{title}</h1>
        <div className={styles.childrenNode}>{children}</div>
      </div>

      <ProductList
        allProductsButton={allProductsButton}
        productsListItems={productsListItems}
      ></ProductList>

      <div className={styles.contactUsSection}>
        <div className="container mx-auto px-4 md:px-20 lg:px-0">
          <h3>¿Echas de menos algún producto?</h3>
          <p>
            No te preocupes, porque seguro lo tenemos. <br></br>
            Ponte en contácto con nosotros y resolveremos cualquier duda que
            tengas.
          </p>
          <Button color="secondary" text="Contáctanos" href="?modal=true" className="big"></Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
