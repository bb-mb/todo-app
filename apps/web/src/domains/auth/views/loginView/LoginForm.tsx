import { Button, Divider, Flex, Heading, Stack } from "@chakra-ui/react";

export const LoginForm = () => {
  return (
    <Flex flex={1} align='center' justify='center' direction='column'>
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
        <Stack w='100%' align='center'>
          <Button w='50%' maxW='200px'>
            구글 로그인
          </Button>
          <Button w='50%' maxW='200px'>
            네이버 로그인
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
