/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import About from './pages/About';
import Services from './pages/Services';
import Bespoke from './pages/services/Bespoke';
import Bridals from './pages/services/Bridals';
import Tutorials from './pages/services/Tutorials';
import Illustration from './pages/services/Illustration';
import { AdminLayout } from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="courses" element={<Courses />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="services/bespoke" element={<Bespoke />} />
          <Route path="services/bridals" element={<Bridals />} />
          <Route path="services/tutorials" element={<Tutorials />} />
          <Route path="services/illustration" element={<Illustration />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* Add other admin routes here as needed */}
          <Route path="*" element={<div className="p-8 text-center text-gray-500">Module under construction</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
