import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    return (
        <>
            <nav className='host-nav'>
                <NavLink
                    to="/host"
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Income
                </NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Reviews
                </NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout
