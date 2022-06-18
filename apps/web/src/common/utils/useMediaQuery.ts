import { useMediaQuery as useChakraMediaQuery } from "@chakra-ui/react";

const MOBILE_WIDTH = 420;
const TABLET_WIDTH = 768;
const LAPTOP_WIDTH = 1024;

export const useMediaQuery = () => {
  const [isLargerThanMobile] = useChakraMediaQuery(
    `(min-width: ${MOBILE_WIDTH}px)`
  );

  const [isLargerThanTablet] = useChakraMediaQuery(
    `(min-width: ${TABLET_WIDTH}px)`
  );

  const [isLargerThanLaptop] = useChakraMediaQuery(
    `(min-width: ${LAPTOP_WIDTH}px)`
  );

  return { isLargerThanMobile, isLargerThanTablet, isLargerThanLaptop };
};
