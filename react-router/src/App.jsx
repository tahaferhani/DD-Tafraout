import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from './pages/Page404';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct';

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li> <NavLink to='/'>Home</NavLink> </li>
          <li> <NavLink to='/about'>About</NavLink> </li>
          <li> <NavLink to='/contact'>Contact</NavLink> </li>
          <li> <NavLink to='/products'>Products</NavLink> </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products type="ecom" />} />
        <Route path='/detail-product/:id' element={<DetailProduct />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
