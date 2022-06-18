import { GoogleAuthProvider } from "firebase/auth";
import { useMemo } from "react";

export const useLogin = () => {
  const googleProvider = useMemo(() => new GoogleAuthProvider(), []);
};
