import React from "react";

// Chakra UI
import { Box } from "@chakra-ui/react";

// Navbar
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <Box as="header" w="100%" h="5rem" bg="transparent">
      <Navbar />
    </Box>
  );
};

export default Header;
