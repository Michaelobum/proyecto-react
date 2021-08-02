import React,{ Fragment,useState }from 'react'
import Tarea from './Tarea'
import FormularioTarea from './FormularioTarea'

const MostrarTareas = () => {
    const [tareas, setTareas] = useState([
         {nombre: 'Eligir Sistema Operativo',estado:true},
         {nombre: 'Eligir Base de Datos',estado:false},
         {nombre: 'Eligir lengujae',estado:true},
         {nombre: 'Eligir Frameworks',estado:false},
        {nombre: 'Tarea Nueva', estado:false}]
    )
    const CreateT = name => {
        if (name === ''){
            alert("Digite el texto")
            return;
        }if (!tareas.find(T => T.nombre === name)){
            setTareas([...tareas,{nombre:name,estado:false}])
            return;
        }else{
            alert("No se puede repetir el mismo nombre")
        }
    }

    return(
    <Fragment>
         <div className="row d-flex justify-content-center mb-4">
                    <div className="col-md-6">
                        <FormularioTarea create= {CreateT}/>
                    </div>
                </div>
                <div className="bg-light min-vh-100">
                <div className="">
        <div className="d-flex justify-content-center">
            <h2><span className="text-danger ">Proyecto:</span> Comercio Electronico </h2>
            <button type ="button" className="btn btn-outline-danger h-50 m-2">Eliminar</button>
        </div>
            {tareas.lenght===0
                ?(<h1>No hay Tareas</h1>)
                :(<div className="table-responsive">
                    <table className ="table">
                        <thead>
                            <tr>
                            <th scope="col">Tarea</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                            <tbody>
                            {tareas.map(tarea => (
                                <Tarea tarea={tarea}/>

                            ))}
                             </tbody>
                    </table>          
                    </div>)

                }          
            </div>
            </div>
    </Fragment>

    )
}
export default MostrarTareas