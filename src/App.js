import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import PsswCRequest from './components/Register/PsswCRequest'
import PsswChange from './components/Register/PsswChange'
import Main from './components/Main/Main'
import { useContext } from 'react';
import { UserContext } from './context/userContext';

import ProjectForm from './components/Project/ProjectForm'

function App() {
  const {user} = useContext(UserContext);   

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <>
            {/*user && <Route path="/" element={<Main/>} />}
            {!user &&(
              <>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
              </>
            )*/}
              <Route path="/" element={<Main/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>}/>
              {/*<Route path="*" element={<Navigate to={user ? '/':'/login'} />} />*/}
              <Route path="/psswcrequest" element={<PsswCRequest/>} />
              <Route path="/psswchange" element={<PsswChange/>} />

              <Route path="/projectform" element={<ProjectForm/>} />
              
            </>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
