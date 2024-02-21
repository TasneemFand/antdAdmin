import { getCookie } from "../utils/axiosInstanse";

export const useAuth = () => {
  const token = getCookie("TOKEN-AUTH");
  if (token) return token;
  return null;
};
