import { Flex } from "@chakra-ui/react";

import { LoginDecorationSection } from "./loginDecorationSection";
import { LoginForm } from "./LoginForm";

export const LoginView = () => {
  return (
    <Flex h='full'>
      <LoginForm />
      <LoginDecorationSection />
    </Flex>
  );
};
