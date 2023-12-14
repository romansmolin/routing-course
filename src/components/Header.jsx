import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink
                    to="/host"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                    Hosts
                </NavLink>
                <NavLink
                    to="/about"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyle : null }
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
