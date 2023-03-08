import './Project.css';
import Button from '../../UI/Button/Button';

function ProjectForm(props) {
    return (props.trigger) ? (
        <>
            <div className="projectform-component">
                <main className="container-projectform">
                    <h1>Nuevo proyecto</h1>
                    <div className="rlinea"> <hr/> </div>
                    <form id="projectform">
                        <ul>
                            <li>
                                <h2>NOMBRE:* </h2>
                                <input type="text" name="nomProyecto" size="30" maxLength="30"/>
                            </li>
                            <li>
                                <h2>PRODUCT OWNER: </h2>
                                <input type="text" value="Laurita-san"name="nombrePO" size="30" maxLength="30" disabled/>
                            </li>
                            <li>
                                <h2>MIEMBROS:* </h2>
                                <input type="text" name="membranas" size="30" maxLength="30"/>
                            </li>
                            <li>
                                <h2>FECHA DE INICIO:* </h2>
                                <input type="date" name="fechaInicio"/>
                            </li>
                            <li>
                                <h2>FECHA DE FIN:* </h2>
                                <input type="date" name="fechaFin"/>
                            </li>
                            <li>
                                <h2>SPRINTS:* </h2>
                                <select name="sprints">
                                    <option value="1" defaultValue>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </li>
                        </ul>
                        <div className="projectf-buttons">
                            <Button value="Cancelar" color ="black" onClick={() => props.setShowComponent(false)}/>
                            <Button value="Crear" color ="#0047b6"/>
                        </div>
                    </form>
                </main>
            </div>
        </>
        ) : "";
}

export default ProjectForm;