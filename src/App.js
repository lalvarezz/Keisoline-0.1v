import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import Main from './components/Main/Main'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <>
              <Route path="/login" element={<Login/>} />
              <Route path="/main" element={<Main/>} />
            </>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
