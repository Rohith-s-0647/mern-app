import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home/Home.js'
import Login from './Login/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
