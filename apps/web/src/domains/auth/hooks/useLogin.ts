import { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";

import { firebase } from "@/domains/firebase";
import { LoginUseCase } from "../useCase";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const loginUseCase = useMemo(() => new LoginUseCase(firebase), []);

  const { mutateAsync: googleLogin } = useMutation(loginUseCase.googleLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return { googleLogin };
};
