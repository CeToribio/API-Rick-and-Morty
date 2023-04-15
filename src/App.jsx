import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Character from './components/Character';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/character/:id' element={<Character/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
