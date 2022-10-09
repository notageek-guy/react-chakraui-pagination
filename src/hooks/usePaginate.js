import { useState } from "react";
import { usePosts } from "./usePosts";
export const usePaginate = () => {
    const {posts} = usePosts();
   const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(8);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

    return {
        currentPosts,
        postsPerPage,
        posts,
        setPostsPerPage,
        setCurrentPage,
    }
}