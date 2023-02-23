import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import PsswCRequest from './components/Register/PsswCRequest'
import PsswChange from './components/Register/PsswChange'
import Main from './components/Main/Main'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/psswcrequest" element={<PsswCRequest/>} />
              <Route path="/psswchange" element={<PsswChange/>} />
              <Route path="/main" element={<Main/>} />
            </>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
