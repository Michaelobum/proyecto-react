import React from 'react'
import Header from '../plantillas/Header'
import MenuVertical from '../plantillas/MenuVertical'
// import FormularioTarea from '../tareas/FormularioTarea'
import MostrarTareas from '../tareas/MostrarTareas'

 const Proyectos = () => {
     return (
        <div className= "contaniner-fluid ">
        <div className = "row min-vh-100 text-white">
            <div className= "col-md-3 bg-secondary  bg-gradient m-0 p-0">
            <MenuVertical/>
            </div>
        
            <div className= "col-md-9  bg-gradient m-0 p-0">
            <Header/>

                <main>
                    <div className= "text-center mt-5 bg-light text-success min-vh-100">
                        <MostrarTareas/>
                    </div>
                </main>
            </div>
        </div>
    </div>
     )
 }
 

 

export default Proyectos
