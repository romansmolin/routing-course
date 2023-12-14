import React from 'react'
import HostVansDetails from '../pages/Host/HostVansDetails'
import { Outlet, NavLink } from 'react-router-dom'

const HostVanNaviagtion = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  }
  return (
    <>
      <nav className='host-van-detail-nav'>
        <NavLink
          to="."
          end
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Info
        </NavLink>
        <NavLink
          to="photo"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Photos
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => isActive ? activeStyle : null}
        >
          Pricing
        </NavLink>
      </nav>
    </>
  )
}

export default HostVanNaviagtion
