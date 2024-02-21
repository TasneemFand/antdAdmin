import { axiosInstance } from "./axiosInstanse";

export const fetchProducts = async () => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_API_BASE_URL}/products`
  );
  return response.data;
};
