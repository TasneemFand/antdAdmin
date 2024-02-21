import axios from "axios";
import { TSignIn } from "../types";

export const useSignIn = () => {
  const signIn = async ({ password, name }: TSignIn) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      {
        username: name,
        password,
      }
    );
    return response.data;
  };

  return signIn;
};
