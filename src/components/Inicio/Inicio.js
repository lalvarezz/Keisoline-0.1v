import './Inicio.css';
import proyecto from '../icons/proyecto-inicio.png';
import tareaInicio from '../icons/tarea-inicio.png';
import configuracion from '../icons/configuracion.png';
import logoutInicio from '../icons/logout-inicio.png';


function Inicio(){
    return(
        <>
            <div className='container'>
                <div className='cabecera'>
                    <h3>Domingo 6 de noviembre, 2023</h3>
                    <h2>Bienvenida, Laura</h2>
                </div>
                <ul className='botones'>
                    <div id='fila-1'>
                        <li>
                            <span className='vl'/>
                            <h1 className=''>Nuevo proyecto</h1>
                            <img src={proyecto} alt='proyecto'/>
                        </li>

                        <li>
                            <span className='vl'/>
                            <h1 className=''>Nueva tarea</h1>
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
                            <h1 className=''>Cerrar sesión</h1>
                            <img src={logoutInicio} alt='logout'/>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Inicio;