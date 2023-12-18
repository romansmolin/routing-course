import './App.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Routes, Route, Link, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans, { loader as vansLoader } from './pages/Vans.jsx';

import "./server.js"
import VanDetail from './pages/VanDetail.jsx';
import Layout from './components/Layout.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans.jsx';
import HostVansDetails, { loader as vanDetailLoader } from './pages/Host/HostVansDetails.jsx';

import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanPricing from './pages/Host/HostVanPricing';

import Login, {loader as loginLoader, action as loginAction} from './pages/Login.jsx';

import Error from './components/Error.jsx';
import NotFound from './pages/NotFound.jsx';


import { requireAuth } from './utils.js';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route
      path="vans/:id"
      element={<VanDetail />}
      loader={vanDetailLoader}
    />
    {/**
     * Challenge:
     * Include the `await requireAuth()` everywhere it's needed!
     */}

    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requireAuth()}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVansDetails />}
        loader={vanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => await requireAuth()}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
