//import logo from './logo.svg';
//import './App.css';
import { Button } from 'react-bootstrap';
import Home from './components /Home/Home';
import Header from './components /Header/Header';
import TourDetails from './components /TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} > </Route>
        <Route path = "/city/:id" element = {<TourDetails/>} > </Route>
      </Routes>
    </>
  );
}

export default App;
