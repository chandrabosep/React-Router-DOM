import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <div className='main'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
