import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import PageNotFound from "./components/header&footer/PageNotFound";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header&footer/Header";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
