import homeIcon from "../assets/images/categories/house.png"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../components/Error";
import LoadingRow from "../components/LoadingRow";


function CategoriesPage() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://105c05b788e4b8e6.mokky.dev/category`);
                setCategories(response.data);
            } catch(e) {
                setIsError(true);
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    if (isError) {
        return <Error />
    }


    return (        
        <section class="mobile-block">
            <div class="mobile-block__header is-red">
                <strong class="home-title">Категории</strong>
                {isLoading ? (<LoadingRow />) : (
                 <div class="container-grey">
                    <Link to="/" class="category-item">
                        <img src={homeIcon} alt="home" class="category-image" />
                        <h3 class="category-title">Главная</h3>
                    </Link>
                        {categories.map((category) => (
                            <Link to={`/category/posts/${category.id}`} class="category-item">
                                <img src={category.imageUrl} alt={category.name} class="category-image" />
                                <h3 class="category-title">{category.name}</h3>
                            </Link>
                        ))}
                </div>
                )}
        </div>
    </section>
    );
}

export default CategoriesPage;