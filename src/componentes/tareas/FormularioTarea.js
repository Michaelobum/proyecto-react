import React ,{useState} from 'react'

const FormularioTarea=({create}) =>{
    const [Work, setWork] = useState('')

    const Tarea = e => setWork(e.target.value)

    const Click = () =>{
        create(Work)
        setWork('')
    }


 
    return (
        
        <div className= "border border-light mt-2">
            <h2 className= "text-info fw-bold fs-1 text-center mb-0 mt-2">Formulario de Tareas</h2>
            <form className= "">
                <div className= 'row'>
                <div className = 'cold-md-12'>
                    <div className= "input-group mb-4">
                        <div className= "input-group-prepend">
                            <span className= "input-group-text text-info fs-2 fw-bold" >&#128172;</span> 
                        </div>
                        <input
                            type="text"
                            className="form-control fs-2"
                            placeholder="Nombre de la tarea"
                            name="nombre"
                            value = {Work}
                            onChange= {Tarea}
                        />
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className = 'cold-md-14 text-center mb-4'>
                        <div className="d-grid">
                        <button type="button" className="btn-success bg-gradient fs-2 " 
                        onClick={Click} > Guardar Tarea</button>
                    </div>
                    </div>
                </div>
            </form>

        </div>
        

    )
}


export default FormularioTarea