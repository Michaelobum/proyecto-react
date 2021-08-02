import React from 'react'
import MostrarProyecto from '../proyectos/MostrarProyectos'
const MenuVertical = () => {
    return (
        <aside className = "text-center p-4">         
            <h2 className="fst-italic text-light bg-gradient fw-bold p-4" Style="background-color:#c1e099">Gestor<spam className="text-danger">Proyectos</spam></h2>
           <MostrarProyecto/>
        </aside>
    )
}

export default MenuVertical