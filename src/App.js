import logo from './logo.svg';
import './App.css';
import AppContext from "./context/AppContext";
import HomePage from "./pages/Home/homeList"
import React from "react";
import { Route, Routes } from 'react-router-dom';
import AddProduct from './pages/Home/addProduct';
import EditProduct from './pages/Home/editProduct';
import ProductDetail from './pages/Home/productDetail';

function App() {
  return (
    <AppContext.Provider >
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/add' element={<AddProduct />}></Route>
        <Route path='/product/:id' element={<EditProduct />}></Route>
        <Route path='/product/detail/:id' element={<ProductDetail />}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
