export type TProductsRes = {
  products: Array<TProduct>;
};
export type TProduct = {
  title: string;
  price: number;
  brand: string;
  category: string;
};
