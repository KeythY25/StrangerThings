import "./Navbar.css"

export const Navbar=() => {
    return (
        <nav>
            <ul>
                <h4 className="logoName">Stranger's Things</h4>
                <li><a href="#Login">Login</a></li>
                <li><a href="Posts">Posts</a></li>
                <li><a className="active" href="#home">Home</a></li>
            </ul>
        </nav>
    )
}