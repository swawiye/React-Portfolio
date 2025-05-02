function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">MyPorfolio</a>
        <ul>
            <CustomLink href="/AboutMe">About Me</CustomLink>
            <CustomLink href="/ContactMe">Contact Me</CustomLink>
        </ul>
    </nav>
}
export default  Navbar;

function CustomLink(href, children, ...props) {
    const path = window.location.pathname
    return(
        <li className={path === href ? "active" : ""}><a href={href} {...props}>{children}</a></li>
    )
}