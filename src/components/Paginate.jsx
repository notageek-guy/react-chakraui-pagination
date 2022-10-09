import { Button, Stack, HStack } from "@chakra-ui/react";
import React from "react";

export default function Paginate({
  currentPage,
  postsPerPage,
  totalPosts,
  setCurrentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goForward = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <HStack spacing={4} mt={4} justifyContent="center">
        <Button onClick={goBack}>Back</Button>
        {pages.map((page) => (
          <Button
            disabled={currentPage === page}
            _active=""
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}
        <Button onClick={goForward}>Forward</Button>
      </HStack>
    </>
  );
}
