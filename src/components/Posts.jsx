import { Box } from '@chakra-ui/react';
import React from 'react'
import { usePaginate } from '../hooks/usePaginate';
import Paginate from './Paginate';
import SearchBox from './SearchBox';
import { usePosts } from '../hooks/usePosts';
export default function Posts() {
    const {posts:data} = usePosts();
    const {
       currentPosts : posts ,
         postsPerPage,
        setCurrentPage,
    } = usePaginate();
    
    
  return (
   <Box p={4}>
    <SearchBox />
         {posts?.map(post=>(
               <>
                <Box key={post?.id} p={4} border="1px solid black" borderRadius="md" mb={4}
                    bg="facebook.100" color='black'
                >
                    <Box fontSize="xl" fontWeight="bold">{post.title}</Box>
                    <Box>{post.body}</Box>
                </Box>

               
               </>
            ))}
             <Paginate 
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                setCurrentPage={setCurrentPage}
                currentPage={posts}
             />
   </Box>
  )
}
