import { Button, Divider, Flex, Heading, Stack } from "@chakra-ui/react";

import { useLogin } from "@/domains/auth/hooks";

export const LoginForm = () => {
  const { googleLogin } = useLogin();

  return (
    <Flex
      flex={1}
      maxW='800px'
      align='center'
      justify='center'
      direction='column'
    >
      <Stack
        w='80%'
        h='60%'
        justify='center'
        align='center'
        gap={4}
        boxShadow='l'
        borderRadius='12px'
      >
        <Heading>Welcome back!</Heading>
        <Divider />
        <Stack w='200px' align='center'>
          <Button w='full' fontWeight={500} onClick={() => googleLogin()}>
            구글 로그인
          </Button>
          <Button w='full' fontWeight={500}>
            네이버 로그인
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
