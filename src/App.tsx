import { BrowserRouter, Route, Routes } from 'react-router'
import { NavBar } from './component/NavBar'
import './styles.css'
import { HomePage } from './component/pages/HomePage/HomePage'
import { ProductsPage } from './component/pages/ProductsPage/ProductsPage'
import { ProductsDetailsPage } from './component/pages/ProductsPage/ProductsDetails'
import { LoginPage } from './component/pages/LoginPage/LoginPage'
import { RegisterPage } from './component/pages/RegisterPage/RegisterPage'

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/UserProfile" element={<h1>User Profile</h1>} />
          <Route path="*" element={<h1 className="flex justify-center content-center text-red-600 h-auto w-auto box-content">404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
