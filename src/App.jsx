//importo i componenti per la gestione delle rotte

import { BrowserRouter, Routes, Route } from "react-router-dom"

//importo nuove pages 

import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"

function App() {

  return (
    <>
      <h1>eccoti</h1>
      <BrowserRouter>
        <Routes>
          {/* in questo caso mostrerà solo homepage + h1 che effettivamente è gia presente */}
          <Route path="/" element={<HomePage />} />
          <Route path="/sudinoi" element={<AboutUs />} />
          <Route path="/ourproducts" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
