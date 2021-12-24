import Index from './pages/Index';
import Juego from './pages/Juego';
import Historial from './pages/Historial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Index/>}/>
        <Route path='/juego' element={<Juego/>}/>
        <Route path='/historial' element={<Historial/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
