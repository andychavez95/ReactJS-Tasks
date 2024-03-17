import { Fragment, useState } from "react"
import Swal from "sweetalert2";

const FormularioControlado = ({ addTask }) => {

    // Método carretero.
    // const [nameTask, setNameTask] = useState("");
    // const [descriptionTask, setDescriptionTask] = useState("");
    // const [stateTask, setStateTask] = useState("Pendiente");
    //
    const [fields, setFields] = useState({
        nameTask: "",
        descriptionTask: "",
        stateTask: "Pendiente",
        priorityTask: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fields.nameTask.trim() || !fields.descriptionTask.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Ingresar campos necesarios.",
                text: "Nombre o Descripción faltantes.",
            });
        }

        addTask({
            id: Date.now(),
            ...fields
        });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Tarea agregada",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const handleChangeInput = (e) => {
        const { name, type, checked, value } = e.target;
        setFields({ 
            ...fields, 
            [name] : type === 'checkbox' ? checked : value
        });
    }

    return (
        <Fragment>
            <form onSubmit={ handleSubmit }>
                <div className="form-group mb-2">
                    <label htmlFor="nameTask">Nombre:</label>
                    <input 
                        name="nameTask"
                        type="text"
                        placeholder="Ingrese la tarea" 
                        className="form-control"
                        value={ fields.nameTask }
                        onChange={ handleChangeInput }
                    />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="descriptionTask">Descripción:</label>
                    <textarea
                        name="descriptionTask"
                        className="form-control"
                        placeholder="Descripción de la tarea"
                        value={ fields.descriptionTask }
                        onChange={ handleChangeInput }
                    />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="stateTask">Estado:</label>
                    <select 
                        name="stateTask" 
                        className="form-select"
                        value={ fields.stateTask }
                        onChange={ handleChangeInput }
                    >
                        <option value="Pendiente">Pendiente</option>
                    </select>
                </div>
                <div className="form-check mb-2">
                    <input
                        type="checkbox"
                        name="priorityTask"
                        className="form-check-input"
                        id="priority"
                        checked={ fields.priorityTask }
                        onChange={ handleChangeInput }
                    />
                    <label className="form-check-label" htmlFor="priority">
                        ¿Agregar prioridad?
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </Fragment>
    );
}

export default FormularioControlado;
