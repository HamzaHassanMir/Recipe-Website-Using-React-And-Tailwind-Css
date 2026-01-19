import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Favorites from "./components/favorite/Favorites";
import Details from "./components/details/Details";
import backgroundIMAGE from './assets/backgroundIMAGE.jpg'

function App() {
  return (
    <div className="background-container">
      <div className='min-h-screen p-6 text-white text-lg'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/favorites" element={<Favorites />}></Route>

          <Route path="/recipe-item/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
