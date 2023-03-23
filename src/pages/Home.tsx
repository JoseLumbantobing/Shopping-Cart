import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eius exercitationem numquam sint ratione obcaecati reprehenderit quis optio voluptate, quam eveniet necessitatibus aliquid possimus, repudiandae neque. Asperiores illo placeat excepturi?</p>
        <div>Shop
            <Link style={{ textDecoration: 'none', color: '#388bc7' }} to="/store"> here</Link>.
        </div>
        <div>Read more
            <Link style={{ textDecoration: 'none', color: 'coral' }}  to="/about"> here</Link>.
        </div>
        </>
    )
}