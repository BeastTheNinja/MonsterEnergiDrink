import { BrowserRouter, Route, Routes } from 'react-router'
import { NavBar } from './component/NavBar'
import './styles.css'
import { HomePage } from './component/pages/HomePage/HomePage'
import { ProductsPage } from './component/pages/ProductsPage/ProductsPage'
import { ProductsDetailsPage } from './component/pages/ProductsPage/ProductsDetails'
import { LoginPage } from './component/pages/LoginPage/LoginPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
