import './App.css';
import { Route, Routes } from "react-router-dom";
import Pocketmon from './Pocketmon';
import Board from'./Board';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pocketmon" element={<Pocketmon/>}></Route>
          <Route path="/board" element={<Board/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
