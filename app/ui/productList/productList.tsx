"use client";

import { useState } from "react";
import { Button } from "../button/button";

import styles from "./productList.module.scss";
import { PageConfig, ProductItem } from "../../[...slug]/productosPagesConfig";

const MAX_ITEMS_MOBILE = 6;

export type ProductListProps = {
  allProductsButton: PageConfig["allProductsButton"];
  productsListItems: PageConfig["productsListItems"];
};

export function ProductList({
  allProductsButton,
  productsListItems,
}: ProductListProps) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className={styles.productListWrapper}>
      <div className={`container mx-auto px-4 md:px-28 lg:px-8 2xl:px-0`}>
        {allProductsButton ? (
          <Button
            color="primary"
            text="Ver todos los productos"
            className={`${styles.showAllButton} md:hidden`}
            onClick={() => setShowAll(true)}
          ></Button>
        ) : null}
        <div
          className={`${styles.productList} ${
            productsListItems.length < 12 ? styles.flexList : ""
          }`}
        >
          {productsListItems.map((productItem: ProductItem, i: number) => (
            <div
              key={`product-${i}`}
              className={`${styles.productCard} ${
                MAX_ITEMS_MOBILE < i && allProductsButton && !showAll
                  ? "hidden sm:flex"
                  : "flex"
              }
              `}
            >
              <picture>
                <source srcSet={productItem.img} media="(min-width: 1024px)" />
                <img
                  src={productItem.imgXs}
                  alt={productItem.alt}
                  className={styles.productImage}
                />
              </picture>
              <h3>{productItem.title}</h3>
              <p>{productItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
