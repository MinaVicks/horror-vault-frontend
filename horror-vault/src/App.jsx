import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;