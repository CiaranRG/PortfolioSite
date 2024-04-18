import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import MainPage from './MainPage/MainPage'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
