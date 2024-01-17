import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Userform from './pages/userform';
import './index.css'
import Card from './pages/card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Userform />} path='/userform' />
          <Route element={<Card />} path='/cards' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
