import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./components/Home"
import Products from "./components/Products"
import ProductItemPage from "./components/ProductItemPage"

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;



