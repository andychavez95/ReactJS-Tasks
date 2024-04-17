import { Fragment } from "react"

const Task = ({ task, deleteTask, completeTask }) => {

    const handleClickDelete = (idTask) => {
        deleteTask(idTask);
    }

    const handleClickComplete = (idTask) => {
        completeTask(idTask);
    }

    return (
        <Fragment>
            <li className="list-group-item">
                <div className="card">
                    <h5 className="card-header">Identificador: { task.id }</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2 me-2">
                        <span className="badge rounded-pill bg-info text-dark">{ task.priorityTask && 'Prioritario' }</span>
                    </div>
                    <div className="card-body">
                        <h5 className={ task.stateTask === "Completado" ? 'text-decoration-line-through card-title' : "card-title" }>Nombre: { task.nameTask }</h5>
                        <p className={ task.stateTask === "Completado" ? 'text-decoration-line-through card-text' : "card-text" }>Descripción: { task.descriptionTask }</p>
                        <p className="card-text"><span className="badge rounded-pill bg-info text-dark" >Estado: { task.stateTask }</span></p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button onClick={ () => { handleClickDelete(task.id) } } type="button" className="btn btn-danger btn-sm">
                                Eliminar
                            </button>
                            <button onClick={ () => { handleClickComplete(task.id) } } type="button" className="btn btn-warning btn-sm">
                                Completar
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </Fragment>
    );
}

export default Task;
