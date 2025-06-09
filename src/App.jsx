"use client"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

import ProjectsPage from "./components/ProjectsPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
