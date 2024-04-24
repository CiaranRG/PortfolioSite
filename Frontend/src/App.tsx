import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './Navbar/Navbar'
import MainPage from './MainPage/MainPage'
import Footer from './Footer/Footer'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen)
}

  return (
    <>
      <Router>
        <Navbar toggleContactModal={toggleContactModal} isContactModalOpen={isContactModalOpen}/>
        <Routes>
          <Route path='/' element={<MainPage toggleContactModal={toggleContactModal} isContactModalOpen={isContactModalOpen}/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
