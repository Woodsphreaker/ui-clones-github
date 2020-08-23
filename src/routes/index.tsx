import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Profile from '~/pages/Profile';
import Repo from '~/pages/Repo';

// Components
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/:username" element={<Profile />} />
      <Route path="/:username/:reponame" element={<Repo />} />
    </Routes>
    <Footer />
  </Router>
);
