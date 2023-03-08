import './Main.css';
import NavBar from '../NavBar/NavBar';
import MenuBar from '../MenuBar/MenuBar';
import Inicio from '../Inicio/Inicio';

function Main(){
    return(
        <>
            <div className='inicioPrincipal'>
                <NavBar/>
                <main className='pgprincipal'>
                    <MenuBar/>
                    <Inicio/>
                </main>
            </div>
            
        </>
    );
}

export default Main;