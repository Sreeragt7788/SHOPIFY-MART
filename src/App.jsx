import React from 'react'
import './App.css'
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import { Outlet } from "react-router-dom"


const App = () => {
  return (
    <main className="mainBody">
      <Header/>
      <Navigation/>
      <div className="my-4">
        <Outlet/>
      </div>
      <marquee><strong>24x7 Customer Support Toll Free no: 0492-3336547</strong></marquee>
      <footer className="d-flex justify-content-center align-items-center">
            2024 CopyRight @ Sreerag T
      </footer>
    </main>
  )
}

export default App