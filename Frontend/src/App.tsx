import { BrowserRouter, Route, Routes } from 'react-router'
import { NavBar } from './component/NavBar'
import './styles.css'

function App() {


  return (
    <>
     
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/login" element={<div>login</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
