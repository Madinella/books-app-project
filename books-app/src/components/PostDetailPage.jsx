import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetailPage() {
    
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
            async function fetchPost() {
                try {
                    const response = await axios.get(`https://105c05b788e4b8e6.mokky.dev/post/${id}`);
                    setPost(response.data);
                } catch (error) {
                    console.log(error);
                } 
            }
            fetchPost();
    }, [id]);
    
    return (
    <section class="mobile-block">
        <div class="mobile-block__header">
            <Link to="/" class="back-button">
                <div class="container-back">
                    <span>Назад</span>
                </div>
            </Link>
            <div class="container-post-detail">
                <div class="post-detail-block">
                    <h3 class="post-booktitle">{post.title}</h3>
                    <h3 class="post-bookauthor">{post.author}</h3>
                    <p class="description">
                        {post.description}
                    </p>
                    <img src={post.imageUrl} alt="Bookpost" class="postbook" />
                </div>
            </div>
        </div>
    </section>
    );
}

export default PostDetailPage;