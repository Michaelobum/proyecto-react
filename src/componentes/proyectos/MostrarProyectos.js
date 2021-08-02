import React,{useState} from 'react' 
import Proyecto from './Proyecto' 
import CrearProyecto from './CrearProyecto'


const MostrarProyectos = () => {
    const [base,setBase] = useState([
       
        {nombre: 'Tienda virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de un sitio web'},
        {nombre: 'app inventario'},
        
    ])

    const Pro = name => {
        if (name === ''){
            alert("Ingrese el Texto")
            return;
        }
        if (!base.find(Pj => Pj.nombre === name)){
            setBase([...base, {nombre: name}])
        }else{
            alert("Vuelva a Intentarlo")
        }
    }
    return (
        <div>
        <CrearProyecto New= {Pro}/>
        <h3 className="text-light border-bottom fw-bold">Panel De Proyectos</h3>
        <div className= "List-group"> 
            {base.map(proyecto => (
              <Proyecto proyecto = {proyecto}/>
            
            ))}

            </div>
        </div>
        
    )
   
    
}

export default MostrarProyectos