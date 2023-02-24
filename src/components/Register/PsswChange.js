import './Register.css';

function PsswChange(){
    return(
        <>
        <div className="registro">
            <header>
                <h1>&lt;Keisoline&gt;</h1>
            </header>

            <main className="container-form">
                <h1>Restablecer contraseña</h1>
                <form id="formcamb">
                    <h2>Cuenta</h2>
                    <h2 className="nameUser">[Extraer nombre de la BD]</h2>
                    <ul>
                        <li>
                            <h2>Nueva contraseña</h2>
                            <input type="password" name="cont" id="cont" size="35" maxLength="50"/>
                        </li>
                        <li>
                            <h2>Confirmar nueva contraseña</h2>
                            <input type="password" name="ccont" id="ccont" size="35" maxLength="50"/>
                        </li>
                    </ul>
                    
                    <button class="button1">Confirmar</button>
                </form>
            </main>

            <footer>
                © 2023 | Instituto Politécnico Nacional - Escuela Superior de Cómputo
            </footer>
        </div>
        </>

    );
}

export default PsswChange;