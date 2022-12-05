import React, { useState } from "react";

// Chakra UI
import { Box, Flex, Icon, HStack } from "@chakra-ui/react";

// Menu icon
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Image
import Image from "next/image";

// Logo
import Logo from "../../public/assets/logo.svg";

const Navbar = () => {
  // Menu state
  const [active, setActive] = useState(false);

  return (
    <Flex
      justify="space-between"
      align="center"
      h="5rem"
      as="nav"
      position="relative"
      maxW="1024px"
      mx="auto"
      px="1rem"
    >
      {/* Logo */}
      <Image src={Logo} alt="Header logo" width={125} height={125} />

      {/* Mobile navigation */}
      {active ? (
        <Box display={["block", "none"]}>
          <Icon
            as={XMarkIcon}
            boxSize={8}
            cursor="pointer"
            onClick={() => setActive(false)}
          />
        </Box>
      ) : (
        <Box display={["block", "none"]}>
          <Icon
            as={Bars3Icon}
            boxSize={8}
            cursor="pointer"
            onClick={() => setActive(true)}
          />
        </Box>
      )}

      {/* Desktop navigation */}
      <Box display={["none", null, "block"]}></Box>
    </Flex>
  );
};

export default Navbar;
