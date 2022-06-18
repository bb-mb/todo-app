import { useMediaQuery } from "@/common/utils";
import { Flex } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";

export const LoginView = () => {
  const { isLargerThanTablet } = useMediaQuery();

  return (
    <Flex h='full'>
      <LoginForm />

      {isLargerThanTablet && (
        <Flex flex={1} bg='teal.100'>
          logo
        </Flex>
      )}
    </Flex>
  );
};
