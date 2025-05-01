function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">MyPorfolio</a>
        <ul>
            <li className="active"><a href="/AboutMe">About Me</a></li>
            <li><a href="/ContactMe">Contact Me</a></li>
        </ul>
    </nav>
}
export default  Navbar;