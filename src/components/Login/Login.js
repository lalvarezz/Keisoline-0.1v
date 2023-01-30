import './Login.css';
import { Link } from "react-router-dom";
import {COLORS} from '../colores.js'
import usuario from '../icons/usuario.png';
import lock from '../icons/lock.png';



function Login(){
    return(
        <>
            <div className="login-component">
                <h2>&lt;Keisoline&gt;</h2>
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
                        <input class="boton-azul" type="submit" value="Iniciar sesión"></input>
                        <Link to="#">Recuperar contraseña</Link>
                    </form>
                    
                    <hr/>
                    <button class="boton-negro">Registrarse</button>
                </div>
            </div>
        </>
    );
}

export default Login;