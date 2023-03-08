import './Inicio.css';
import proyecto from '../icons/proyecto-inicio.png';
import tareaInicio from '../icons/tarea-inicio.png';
import configuracion from '../icons/configuracion.png';
import logoutInicio from '../icons/logout-inicio.png';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { useState } from 'react';

import ProjectForm from '../Project/ProjectForm';
import TaskForm from '../Task/TaskForm';

function Inicio(){
    const {user, logout} = useContext(UserContext);
    const [showProjectForm, setShowPF] = useState(false);
    const [showTaskForm, setShowTF] = useState(false);
    return(
        <>
            <div className="start-component">
                <div className="startup-header">
                    <h3>Domingo 6 de noviembre, 2023</h3>
                    {/*<h2>Bienvenida, {user.nombre}</h2>*/}
                </div>
                
                <ul className="startup-buttons">
                    <div id='fila-1'>
                        <li onClick={() => setShowPF(true)}>
                            <span className='vl'/>
                            <h1 className=''>Nuevo<br/>proyecto</h1>
                            <img src={proyecto} alt='proyecto'/>                            
                        </li>

                        <li onClick={() => setShowTF(true)}>
                            <span className='vl'/>
                            <h1 className=''>Nueva<br/>tarea</h1>
                            <img src={tareaInicio} alt='tarea'/>
                        </li>
                    </div>
                    
                    <div id='fila-2'>
                        <li>
                            <span className='vl'/>
                            <h1 className=''>Configuración</h1>
                            <img src={configuracion} alt='configuracion'/>
                        </li>

                        <li>
                            <span className='vl'/>
                            <h1 onClick={logout} className='' >Cerrar sesión</h1>
                            <img src={logoutInicio} alt='logout'/>
                        </li>
                    </div>
                </ul>
                
                <ProjectForm trigger ={showProjectForm} setTrigger={setShowPF}/>
                <TaskForm trigger ={showTaskForm} setTrigger={setShowTF}/>
            </div>
            
        </>
    );
}

export default Inicio;