import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Userform from './pages/userform';
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<Userform />} path='/userform' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
