import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CardDetail from './components/CardDetail';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import ItemFilter from './components/ListFiltered';
import CartWidget from './components/CartWidget';


function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('../products.json')
    .then(response => response.json())
    .then(data => {
      setProductos(data)
    })
  }, [])
  
  console.log(productos);

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Navigate to='/home' />} />
        <Route path='/home' element= {<ItemListContainer productos ={productos} />} />
        <Route path='/products/:id' element={<CardDetail />} />
        <Route path='/category/:genre' element={<ItemListContainer productos={productos} />} />
        {/* <Route path='/category/women' element={<ItemFilter productos={productos} categoria="women's clothing"/>} />
        <Route path='/category/electronics' element={<ItemFilter productos={productos} categoria="electronics"/>} />
        <Route path='/category/jewelery' element={<ItemFilter productos={productos} categoria="jewelery"/>} /> */}
        <Route path='/404' element={<h2>404 Not Found</h2>} />
      </Routes>
    </div>
  )
}

export default App
