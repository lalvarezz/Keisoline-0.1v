import './Main.css';
import NavBar from '../NavBar/NavBar';
import MenuBar from '../MenuBar/MenuBar';
import Inicio from '../Inicio/Inicio';


function Main(){
    return(
        <>
            <NavBar/>
            <main className='contenedor'>
                <MenuBar/>
                <Inicio/>
            </main>
            
        </>
    );
}

export default Main;