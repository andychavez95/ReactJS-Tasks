import { Fragment, useEffect, useState } from 'react'
import FormularioControlado from './components/FormularioControlado'
import ListTasks from './components/ListTasks'

const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];

function App() {
    // Arreglo de objetos que contiene a todas las tareas.
    const [allTasks, setAllTasks] = useState(initialTasks);

    // Almacenar las tareas en localstorage.
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(allTasks));
    }, [allTasks]);

    // Agregar una tarea.
    const addTask = (task) => {
        setAllTasks([...allTasks, task]);
    }

    // Borrar la tarea.
    const deleteTask = (idTask) => {
        const tasksFiltered = allTasks.filter((task) => task.id !== idTask);
        setAllTasks([...tasksFiltered]);
    }

    // Actualizar el estado de la tarea.
    const completeTask = (idTask) => {
        allTasks.forEach((task) => {
            if (task.id === idTask) {
                let newState = task.stateTask === "Completado" ? "Pendiente" : "Completado"; 
                task.stateTask = newState;
            }
        });
        setAllTasks([...allTasks]);
    }

    // Ordenar una tarea.
    const orderTasks = (x) => {
        return x.sort((a, b) => {
            return b.priorityTask - a.priorityTask;
        });
    }

    return (
        <Fragment>
            <div className='container mb-4'>
                <h1 className='text-center'>Registro de tareas</h1>
                <FormularioControlado addTask={ addTask }/>
            </div>
            <div className='container mb-4'>
                <h2 className='text-center'>Lista de tareas</h2>
                <ListTasks allTasks={ orderTasks(allTasks) } deleteTask={ deleteTask } completeTask={ completeTask }/>
            </div>
        </Fragment>
    );
}

export default App;
