import PostList from "../components/PostList";

function HomePage() {
    return (
    <section class="mobile-block">
        <div class="mobile-block__header">
            <strong class="home-title">Главная</strong>
        </div>
        <PostList />
    </section>
    );
}
export default HomePage;