import {NavLink} from "react-router-dom";
import "../styles/header-style.css";

function Header() {
    return (
        <header className="header">
            <h1>Grass Simulation</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/grass-types">Types of Grass</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;