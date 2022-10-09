import { Box } from '@chakra-ui/react';
import React from 'react'

import { useSearch } from '../hooks/useSearch'
export default function SearchList() {
    const {
    searchResults,
    } = useSearch();
  return (
   <Box>
         {searchResults?.map(post=>(
                <>
                    <Box key={post?.id} p={4} border="1px solid black" borderRadius="md" mb={4}
                        bg="facebook.100" color='black'
                    >
                        <Box fontSize="xl" fontWeight="bold">{post.title}</Box>
                        <Box>{post.body}</Box>  

                        </Box>
                </>
            ))}
   </Box>
  )
}
