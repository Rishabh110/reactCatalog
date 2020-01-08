import { Product } from "../Cards";

const catalogData = require("./catalog.json");

export const fetchCatalogItems: () => Promise<{
  success: boolean;
  count: number;
  body: Product[];
}> = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(catalogData);
    }, 600);
  });
};

export const fetchSingleCatalogItem: (
  productId: number
) => Promise<{
  success: boolean;
  body: Product;
}> = (productId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        body: catalogData.body[productId - 1]
      });
    }, 500);
  });
};
