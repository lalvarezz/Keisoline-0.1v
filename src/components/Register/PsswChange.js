import './Register.css';

function PsswChange(){
    return(
        <>
        <div className="registro">
            <header>
                <h1>&lt;Keisoline&gt;</h1>
            </header>

            <main className="container">
                <h1>Restablecer contraseña</h1>
                <form id="formcamb">
                    <h2>Cuenta</h2>
                    <h2 className="nameUser">[Extraer nombre de la BD]</h2>
                    <ul>
                        <li>
                            <h2>Nueva contraseña</h2>
                            <input type="password" name="cont" id="cont" size="35" maxlength="50"/>
                        </li>
                        <li>
                            <h2>Confirmar nueva contraseña</h2>
                            <input type="password" name="ccont" id="ccont" size="35" maxlength="50"/>
                        </li>
                    </ul>
                    
                    <button class="button1">Confirmar</button>
                </form>
            </main>
        </div>
        </>

    );
}

export default PsswChange;