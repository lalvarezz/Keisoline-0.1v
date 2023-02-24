import './Register.css';

function PsswCRequest(){
    return(
        <>
        <div className="registro">
            <header>
                <h1>&lt;Keisoline&gt;</h1>
            </header>

            <main class="container-form">
                <h1>Restablecer contraseña</h1>
                <form id="formrecup">
                    <ul>
                        <li>
                            <h2>Correo institucional</h2>
                            <input type="text" name="correinst" id="correinst" size="35" maxLength="50"/>
                        </li>
                    </ul>
                    
                    <button className="button2">Recuperar</button>
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

export default PsswCRequest;