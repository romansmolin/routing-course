import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';

import "./server.js"
import VanDetail from './pages/VanDetail.jsx';
import Layout from './components/Layout.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVansDetails from './pages/Host/HostVansDetails.jsx';

import HostVanInfo  from './pages/Host/HostVanInfo.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanPricing from './pages/Host/HostVanPricing';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="photo" element={<HostVanPhotos />} />
                <Route path="pricing" element={<HostVanPricing />} /> 
            </Route>  
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
