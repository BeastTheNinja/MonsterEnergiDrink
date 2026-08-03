import { BrowserRouter, Route, Routes } from 'react-router'
import { NavBar } from './component/NavBar'
import './styles.css'
import { HomePage } from './component/pages/HomePage/HomePage'

function App() {


  return (
    <>
     
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
