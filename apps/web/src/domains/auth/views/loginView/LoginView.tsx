import { Flex } from "@chakra-ui/react";
import { LoginDecorationSection } from "./LoginDecorationSection";
import { LoginForm } from "./LoginForm";

export const LoginView = () => {
  return (
    <Flex h='full'>
      <LoginForm />
      <LoginDecorationSection />
    </Flex>
  );
};
