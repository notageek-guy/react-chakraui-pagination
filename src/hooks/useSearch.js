import { useState } from "react";
import { usePosts } from "./usePosts";
export const useSearch = (searchValue) => {
  const { posts } = usePosts();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const results = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(results);
    } else setSearchInput(posts);
  };
  return {
    searchResults,
    searchInput,
    searchItems,
  };
};
