import './NavBar.css';
import lupa from '../icons/lupa.png';
import notificacion from '../icons/notificacion.png';
import usuaria from '../icons/usuarioChica.png';

function NavBar(){
    return(
        <>
            <div className="navBar-component">
                <h1>&lt;Keisoline&gt;</h1>
                <form className='barraBusqueda'>
                    <img src={lupa} alt='lupa'/>
                    <input type='text' name='busqueda'/>
                </form>

                <div className="usuarioElems">
                    <img src={notificacion} alt='notificacion'/>
                    <img src={usuaria} alt='lupa'/>
                </div>
                
            </div>
        </>
    );
}

export default NavBar;