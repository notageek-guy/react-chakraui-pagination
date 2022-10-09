import { useColorMode,Button, Box } from "@chakra-ui/react";
import React from "react";


import { FaMoon, FaSun } from "react-icons/fa";
export default function DarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex" flexDir="row-reverse" p={4}>
       <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
      </Box>
   
  );
}
