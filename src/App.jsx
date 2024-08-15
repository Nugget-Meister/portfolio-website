import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import bingbong from "../src/assets/bingbong.svg";

import './App.css'
import Navbar from './components/common/Navbar'
import Home from './components/pages/Home/Home'

function App() {

  return (
    <>

      <Navbar />
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
