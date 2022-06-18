import { Flex } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

import { useMediaQuery } from "@/common/utils";
import * as donutLottie from "./donut-lottie.json";

export const LoginDecorationSection = () => {
  const { isLargerThanTablet } = useMediaQuery();

  return (
    <>
      {isLargerThanTablet && (
        <Flex flex={1} bg='purple.100' justify='center' align='center'>
          <Player
            autoplay
            loop
            src='https://assets9.lottiefiles.com/packages/lf20_q5pk6p1k.json'
            style={{ width: "70%", maxWidth: "600px" }}
          />
        </Flex>
      )}
    </>
  );
};
