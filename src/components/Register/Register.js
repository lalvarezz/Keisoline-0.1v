import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import './Register.css';

const Register = () =>{
    //const {registerUser, isLoading} = useContext(UserContext);
    /*const [message, setMessage] = useState(false);
    const [formData, setFormData] = useState({

    });*/


    return(
        <>
        <div className="registro">
            <header>
                <h1>&lt;Keisoline&gt;</h1>
            </header>

            <main className="container">
                <h1>Registro</h1>
                <form id="formulario">
                    <ul>
                        <li>
                            <h2>Nombre(s)</h2>
                            <input type="text" name="nombre" id="nombre" size="35" maxLength="30"/>
                        </li>
                        <li>
                            <h2>Apellido paterno</h2>
                            <input type="text" name="appat" id="appat" size="35" maxLength="20"/>
                        </li>
                        <li>
                            <h2>Apellido materno</h2>
                            <input type="text" name="apmat" id="apmat" size="35" maxLength="20"/>
                        </li>

                        <div className="rlinea"> <hr/> </div>

                        <li>
                            <h2>Correo institucional</h2>
                            <input type="text" name="correinst" id="correinst" size="35" maxLength="50"/>
                        </li>
                        <li>
                            <h2>Contraseña</h2>
                            <input type="password" name="cont" id="cont" size="35" maxLength="50"/>
                        </li>
                        <li>
                            <h2>Confirmar contraseña</h2>
                            <input type="password" name="ccont" id="ccont" size="35" maxLength="50"/>
                        </li>
                    </ul>
                    
                    <button className="button1">Continuar</button>
                </form>

                <button className="bregresar">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                    </svg>
                </button>
            </main>                

            <footer>
                © 2023 | Instituto Politécnico Nacional - Escuela Superior de Cómputo
            </footer>

        </div>
        </>
    );
}

export default Register;