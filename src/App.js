import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home.js';
import About from './Component/About';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import SubmissionSuccess from './Component/SubmissionSuccess';

const App = () => {

  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Renz Capagcuan</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container mt-4">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/submission-success" element={<SubmissionSuccess />} />
            </Routes>
        </div>
    </Router>
  );

};

export default App;
