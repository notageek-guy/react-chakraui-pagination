import {useState,useEffect,useRef} from 'react'

export const usePosts = () => {
    
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const query = useRef();
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    },[]);
    return {posts,loading,error}

}