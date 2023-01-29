import './Login.css';
import usuario from '../icons/usuario.png';
import lock from '../icons/lock.png';

function Login(){
    return(
        <>
            <div className="login-component">
                <h2>Keisoline</h2>
                <div className="">
                    <form>
                        <div>
                            <img src={usuario} alt="user-icon"></img>
                            <label>Correo:
                                <input type="text" name="correo"/>
                            </label>
                        </div>
                        <div>
                        <img src={lock} alt="lock-icon"></img>
                        <label>Contraseña:
                                <input type="password" name="password"/>
                            </label>
                        </div>
                        <input type="submit" value="Iniciar sesión"></input>
                    </form>
                    <a href="#">Recuperar contraseña</a>
                    <hr/>
                    <button>Registrarse</button>
                </div>
            </div>
        </>
    );
}

export default Login;