//import { useImperativeHandle } from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">MyPorfolio</Link>
        <ul>
            <CustomLink to="/AboutMe">About Me</CustomLink>
            <CustomLink to="/ContactMe">Contact Me</CustomLink>
        </ul>
    </nav>
}
export default  Navbar;

function CustomLink(to, children, ...props) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}><Link href={to} {...props}>{children}</Link></li>
    )
}