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
        <div className='dummyDiv'></div>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
