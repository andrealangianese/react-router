import { Link, NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">HomePage </NavLink>
                    </li>
                    <li>
                        <NavLink to="/su-di-noi">Chi siamooooo </NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-products">I nostri Prodotti </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}