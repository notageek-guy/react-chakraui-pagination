import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { useSearch } from "../hooks/useSearch";

export default function SearchBox() {
    const {
        searchItems
    } = useSearch();
  return (
    <Box>
      <Input onChange={e=> searchItems(e.target.value)}
      my={3} maxW='400px' placeholder="Enter the Task here..." type="text" />
    </Box>
  );
}
