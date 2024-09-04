import { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Questions from './components/Questions';
import Home from './components/Home';
import Results from './components/Results';
import Abouttool from './components/AboutTool';
import Developer from './components/Developer';


function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/abouttool" element={<Abouttool/>} />
          <Route path="/developer" element={<Developer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
