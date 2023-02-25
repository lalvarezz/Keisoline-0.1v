import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import './Register.css';

const Register = () =>{
    const {registerUser, isLoading} = useContext(UserContext);
    const [formIsValid, setFormIsValid] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState({
        nombre:'',
        appat:'',
        apmat:'',
        correinst:'',
        cont:'',
        ccont:''
    });
    
    const handleChange =(event) =>{
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

        const data = await registerUser(formData);
        
        if(data.success){
            e.target.reset();
            setFormIsValid(true);
            setFormData({
                nombre:'',
                appat:'',
                apmat:'',
                correinst:'',
                cont:'',
                ccont:''
            });
            setMsg('El usuario se ha registrado correctamente.');
        }else if(!data.success && data.message){
            setMsg(data.message);
        }
    }

    return(
        <>
        <div className="registro">
            <header>
                <h1>&lt;Keisoline&gt;</h1>
            </header>

            <main className="container-form">
                <h1>Registro</h1>
                <form id="formulario" onSubmit={submitForm}>
                    <ul>
                        <li>
                            <h2>Nombre(s)</h2>
                            <input type="text" value={formData.nombre} onChange={handleChange} name="nombre" id="nombre" size="35" maxLength="30"/>
                        </li>
                        <li>
                            <h2>Apellido paterno</h2>
                            <input type="text" value={formData.appat} onChange={handleChange} name="appat" id="appat" size="35" maxLength="20"/>
                        </li>
                        <li>
                            <h2>Apellido materno</h2>
                            <input type="text" value={formData.apmat} onChange={handleChange} name="apmat" id="apmat" size="35" maxLength="20"/>
                        </li>

                        <div className="rlinea"> <hr/> </div>

                        <li>
                            <h2>Correo institucional</h2>
                            <input type="text" value={formData.correinst} onChange={handleChange} name="correinst" id="correinst" size="35" maxLength="50"/>
                        </li>
                        <li>
                            <h2>Contraseña</h2>
                            <input type="password" value={formData.cont} onChange={handleChange} name="cont" id="cont" size="35" maxLength="50"/>
                        </li>
                        <li>
                            <h2>Confirmar contraseña</h2>
                            <input type="password" value={formData.ccont} onChange={handleChange} name="ccont" id="ccont" size="35" maxLength="50"/>
                        </li>
                    </ul>
                    {formIsValid && <div className="success-msg">{msg}</div>}
                    {!formIsValid && <div className="error-msg">{msg}</div>}
                    
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