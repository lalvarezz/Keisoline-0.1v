import './Task.css';
import Button from '../../UI/Button/Button';

function TaskForm(props) {
    return (props.trigger) ? ( 
        <>
            <div className="taskform-component">
                <main className="container-taskform">
                    <h1>Nueva tarea</h1>
                    <div className="rlinea"> <hr/> </div>
                    <form id="taskform">
                        <ul>
                            <li>
                                <h2>PROYECTO:* </h2>
                                <input type="text" name="proyecto" size="30" maxLength="30"/>
                            </li>
                            <li>
                                <h2>NOMBRE:* </h2>
                                <input type="text" name="nombre" size="30" maxLength="30"/>
                            </li>
                            <li>
                                <h2>DESCRIPCIÓN:* </h2>
                            </li>
                            <li><textarea name="descripcion" rows="4" cols="50"></textarea></li>
                            <li>
                                <h2>FECHA DE INICIO:* </h2>
                                <input type="date" name="fechaInicio"/>
                            </li>
                            <li>
                                <h2>FECHA DE FIN:* </h2>
                                <input type="date" name="fechaFin"/>
                            </li>
                            <li>
                                <h2>ENCARGADOS:* </h2>
                            </li>
                            <li><textarea name="encargados" rows="4" cols="50"></textarea></li>
                            <li>
                                <h2>PRIORIDAD:* </h2>
                                <select name="prioridad" id="prioridad">
                                    <option value="1" defaultValue>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <h2>RIESGO:* </h2>
                                <select name="riesgo" id="riesgo">
                                    <option value="alto" defaultValue>Alto</option>
                                    <option value="medio">Medio</option>
                                    <option value="bajo">Bajo</option>
                                </select>
                            </li>
                            <li>
                                <h2>HISTORIA: </h2>
                                <select name="historia" id="historia">
                                    <option value="H01" defaultValue>H01</option>
                                </select>
                                <h2>SPRINT:* </h2>
                                <select name="sprints" id="sprints">
                                    <option value="1" defaultValue>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </li>
                        </ul>
                        <div className="taskf-buttons">
                            <Button value="Cancelar" color ="black" onClick={() => props.setShowC(false)}/>
                            <Button value="Crear" color ="#0047b6"/>
                        </div>
                    </form>
                </main>
            </div>
        </>
    ) : "";
}

export default TaskForm;