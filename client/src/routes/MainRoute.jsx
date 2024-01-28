import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CommingSoonPage from '../pages/CommingSoonPage';
import ErrorPage from '../pages/ErrorPage';

function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/comingsoon" element={<CommingSoonPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default MainRoute
