import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>Hello form Host</h1>
        <Outlet />
    </div>
  )
}

export default Dashboard
