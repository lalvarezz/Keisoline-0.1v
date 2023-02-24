import './MenuBar.css';
import { Link } from "react-router-dom";
import menu from '../icons/menu.png';
import home from '../icons/home.png';
import tarea from '../icons/tarea.png';
import sprint from '../icons/sprint.png';
import kanban from '../icons/kanban.png';
import grafico from '../icons/grafico.png';
import ayuda from '../icons/ayuda.png';
import logout from '../icons/logout.png';

function MenuBar(){
    return(
        <>
            <div className="menuBar-component">
                <div className='menuBar-inicio'>
                    <img src={menu} alt='home-icon'/>
                </div>

                <div className='menuBar-medio'>
                    <img src={home} alt='home-icon'/>
                    <img src={tarea} alt='tarea-icon'/>
                    <img src={sprint} alt='sprint-icon'/>
                    <img src={kanban} alt='kanban-icon'/>
                    <img src={grafico} alt='grafico-icon'/>
                </div>
                
                <div className='menuBar-fin'>
                    <img src={ayuda} alt='ayuda-icon'/>
                    <img src={logout} alt='logout-icon'/>
                </div>
            </div>
        </>
    );
}

export default MenuBar;