import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import Navbar from './components/Navbar'
import Created from './components/Created'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/create' element={<CreateProduct/>}  />
    <Route path='/up' element={<Created/>}  />


   </Routes>
   </>
  )
}

export default App