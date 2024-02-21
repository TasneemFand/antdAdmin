import { useLoaderData } from "react-router-dom";
import ProductsTable from "./components/productsTable";
import { TProductsRes } from "./types";

const ProductsPage = () => {
  const products = useLoaderData();

  return <ProductsTable data={(products as TProductsRes).products} />;
};

export default ProductsPage;
