import './Login.css';
import { Link } from "react-router-dom";
import usuario from '../icons/usuario.png';
import lock from '../icons/lock.png';
import { UserContext } from '../../context/userContext';
import { useContext, useState } from 'react';
import Button from '../../UI/Button/Button';

function Login(){
    const {loginUser, isLoading, loggedInCheck} = useContext(UserContext);
    const [msg, setMsg] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [formData, setFormData] = useState({
        correo:'',
        password:''
    });

    const handleChange = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setMsg('Es necesario rellenar todos los campos.');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            setFormIsValid(true);
            e.target.reset();
            setRedirect('Redirigiendo...');
            await loggedInCheck();
            return;
        }
        setMsg(data.message);
    }

    const [setButtonValue] = useState('Click me!');
    const handleClick = () => {
        setButtonValue('Button clicked!'); };

    return(
        <>
        <div className="login-component">
            <div className="keisoline-txt">
                <header>
                    <h1>&lt;Keisoline&gt;</h1>
                </header>
            </div>
            
            <div className="login-formulario">
                <form onSubmit={submitForm}>
                    <div className="campo">
                        <img src={usuario} alt="user-icon"></img>
                        <input type="text" value={formData.correo} onChange={handleChange} name="correo"/>
                    </div>
                    <div className="campo">
                        <img src={lock} alt="lock-icon"></img>
                        <input type="password" value={formData.password} onChange={handleChange} name="password"/>
                    </div>
                    {!formIsValid  && <div className="err-msg">{msg}</div>}
                    {redirect ? redirect :  <Button disabled={isLoading} type="submit" value="Iniciar sesión" color ="#0047b6"/>}
                    <Link to="#">Recuperar contraseña</Link>
                </form>
                
                <div className="rlinea"> <hr/> </div>

                <Button onClick={handleClick} value="Registrarse" color ="black"/>
                
            </div>

            <footer>
                © 2023 | Instituto Politécnico Nacional - Escuela Superior de Cómputo
            </footer>
        </div>
        </>
    );
}

export default Login;