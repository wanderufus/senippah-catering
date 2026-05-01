import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import {useState} from 'react'
import Cart from './pages/CartTemp'
import Navbar from './components/Navbar'


function App() {
   const [cart, setCart] = useState([]);
  return(
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/services/:serviceName" element={<Services setCart={setCart} />} />
       <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}  />
      </Routes>
    </BrowserRouter>
  )
}


export default App;