import { Fragment } from "react"
import Task from "./Task.jsx";

const ListTasks = ({ allTasks, deleteTask, completeTask }) => {
    if (allTasks.length < 1) {
        return (
            <Fragment>
                <div className="alert alert-light" role="alert">
                    No hay tareas pendientes.
                </div>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <ul className="list-group">
                {
                    allTasks.map( task => (
                        <Task deleteTask={ deleteTask } completeTask={ completeTask } key={ task.id } task={ task } />
                    ))
                }
                </ul>
            </Fragment>
        );
    }
}

export default ListTasks;
