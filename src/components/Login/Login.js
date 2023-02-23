import './Login.css';
import { Link } from "react-router-dom";
//import {COLORS} from '../colores.js'
import usuario from '../icons/usuario.png';
import lock from '../icons/lock.png';

function Login(){
    return(
        <>
        <div className="login-component">
            <header>
                <h1>&lt;Keisoline&gt;</h1>
            </header>
            
            <div className="login-formulario">
                <form>
                    <div className="campo">
                        <img src={usuario} alt="user-icon"></img>
                        <input type="text" name="correo"/>
                    </div>
                    <div className="campo">
                        <img src={lock} alt="lock-icon"></img>
                        <input type="password" name="password"/>
                    </div>
                    <input className="boton-azul" type="submit" value="Iniciar sesión"></input>
                    <Link to="#">Recuperar contraseña</Link>
                </form>
                
                <div className="rlinea"> <hr/> </div>

                <button className="boton-negro">Registrarse</button>
            </div>

            <footer>
                © 2023 | Instituto Politécnico Nacional - Escuela Superior de Cómputo
            </footer>
        </div>
        </>
    );
}

export default Login;