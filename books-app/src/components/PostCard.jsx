import bookimage from "../assets/images/categories/book.png"
import { Link } from "react-router-dom";

function PostCard({post}) {
    return (
         <Link to={`/post/${post.id}`} class="container-grey">
             <div class="category-item">
                <img src={bookimage} alt="Book" class="book-image" />
                <h3 class="book-title">{post.title}</h3>
                <span class="author-book">{post.author}</span>
                <span class="year-of-release">{post.year}</span>
            </div>
         </Link>
    );
}

export default PostCard;