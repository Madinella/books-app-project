import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Error";

function PostList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true)
                const response = await axios.get('https://105c05b788e4b8e6.mokky.dev/post');
                setPosts(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);        
            }
        }
        fetchPosts();
    }, []);

    if (isError) {
        return <Error />
    }

    return (
        <div class="container-grey">
           {isLoading ? (<LoadingPost />) : (
                <>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </>
            )} 
        </div>
    );
}

export default PostList;