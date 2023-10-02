
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';

function App() {

  return (
    <>
      <div id='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
