import React from 'react'
import {BrowserRouter, Routes, Router, Route} from "react-router-dom"
import About from './components/About';
import Header from "./components/Header"
import Hero from "./components/Header"
import Brands from "./components/Header";
import Projects from "./components/pages/Projects"
import Skills from "./components/pages/Skills"



export default function MainRouter() {
    return (
        <BrowserRouter>
        <Header />
        <About />
        <Routes>
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
        </Routes>
        
        </BrowserRouter>
    )
}
