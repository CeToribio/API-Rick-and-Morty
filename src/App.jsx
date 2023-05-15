import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Character from './components/Character';
import Prueba from './components/Prueba';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/character/:id' element={<Character/>} ></Route>
      <Route path='/prueba' element={<Prueba/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
