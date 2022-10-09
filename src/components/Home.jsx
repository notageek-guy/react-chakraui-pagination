import { Container } from "@chakra-ui/react";
import DarkMode from ".//DarkMode";
import Posts from "./Posts";
import { useSearch } from "../hooks/useSearch";
import Paginate from "./Paginate";
export default function Home() {
    const { searchInput } = useSearch();
  return (
    <Container maxW="1200px" margin="auto">
      <DarkMode/>
        {searchInput ? <Posts/> : <Posts/>}
       
    </Container>
  );
}