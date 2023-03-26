import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CardDetail from './components/CardDetail';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import ItemFilter from './components/ListFiltered';

const NavArrayLinks= [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: "Men's clothing",
    path: '/category/men',
  },
  {
    title: "Women's clothing",
    path: '/category/women',
  },
  {
    title: "Electronics",
    path: '/category/electronics',
  },
  {
    title: "Jewelery",
    path: '/category/jewelery',
  }
]


function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setProductos(data)
    })
  }, [])
  
  console.log(productos);

  return (
    <div className='App'>
      <Navbar NavArrayLinks ={NavArrayLinks}/>
      <h1>Tienda</h1>
      <Routes>
        <Route path='/' element= {<Navigate to='/home' />} />
        <Route path='/home' element= {<ItemListContainer productos ={productos} />} />
        <Route path='/products/:id' element={<CardDetail />} />
        <Route path='/category/men' element={<ItemFilter productos={productos} categoria="men's clothing"/>} />
        <Route path='/category/women' element={<ItemFilter productos={productos} categoria="women's clothing"/>} />
        <Route path='/category/electronics' element={<ItemFilter productos={productos} categoria="electronics"/>} />
        <Route path='/category/jewelery' element={<ItemFilter productos={productos} categoria="jewelery"/>} />
        <Route path='/404' element={<h2>404 Not Found</h2>} />
      </Routes>
    </div>
  )
}

export default App
