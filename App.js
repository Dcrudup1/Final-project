// App.js
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Catalog from "./pages/catalog";
import ItemDetails from "./pages/ItemDetails";
import GlobalProvider from "./store/globalprovider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetails />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;