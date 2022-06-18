import { Flex } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

import { useMediaQuery } from "@/common/utils";
import * as LoginLottie from "./login-lottie.json";

export const LoginDecorationSection = () => {
  const { isLargerThanTablet } = useMediaQuery();

  return (
    <>
      {isLargerThanTablet && (
        <Flex flex={1} bg='purple.100' justify='center' align='center'>
          <Player
            autoplay
            loop
            src={LoginLottie}
            style={{ width: "70%", maxWidth: "600px" }}
          />
        </Flex>
      )}
    </>
  );
};
