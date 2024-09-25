import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import LoadingPost from "../components/LoadingPost";

function PostsByCategories() {
    
    const {id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    
    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://105c05b788e4b8e6.mokky.dev/category/${id}`)
                setCategory(response.data);
            } catch(e) {
                console.log(e);
            }
            
        }
        async function fetchPosts() {
            try {
                setIsLoading(true)
                const response = await axios.get('https://105c05b788e4b8e6.mokky.dev/post');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);        
            }
        }
        fetchPosts();
        fetchCategory()
    }, [id]);
    
    return (
        <section class="mobile-block">
            <div class="mobile-block__header">
                <strong class="home-title">{category.name}</strong>
                    <div class="container-grey">
                    {isLoading ? (<LoadingPost />) : (
                    <>
                        {posts.map((post) => {
                            return post.category === category.name ? (
                                <PostCard key={post.id} post={post} />
                            ) : null
                        })}
                    </>
                )}
                </div>
            </div>
        </section>
    );
}

export default PostsByCategories;