import React, { useState } from 'react';

const CrearProyecto = ({New}) => {
    const [formulario,setFormulario] = useState(false)

    const activarFormulario = () => {
        setFormulario(!formulario)
    }

    const[Inscribir,setInscribir] = useState('')
    
    const Valor = e => {setInscribir(e.target.value)}

    const Click = () => {
        New(Inscribir)
        setInscribir('')
    }
    
    return (
      <>
    
      <div className= "d-grid pb-2">
              <button className= "btn btn-outline-ligth text-danger fw-bold fs-2"
                  type= "button"
                  onClick= {activarFormulario}
                  >Nuevo Proyecto </button>
      </div>
      { formulario
      ?   ( <form >
              <div className = 'row'>
                  <div className = 'cold-md-12'>
                      <div className="input-group my-2">
                          <div className= "input-group-pretend">
                              <span className= 'input-group-text text-danger fs-2 fw-bold'>	&#9203;</span>
                          </div>
                      <input
                          type= "text"
                          id="name"
                          className= "form-control fs-2"
                          placeholder= "Nombre proyecto"
                          name ="nombre"
                          value = {Inscribir}
                          onChange={Valor}
                          
                          
                      />
                      </div>
                  </div> 
              </div>
              <div className ='row' > 
                  <div  className= 'cold-md-12 text-center mb-4'> 
                      <div className= "d-grid">
                          <button type="button" className ="text-light fs-2 btn-success btn-gradient"  onClick={Click} >Guardar Proyecto</button>
                      </div>
                  </div>

              </div>
          </form> 
          
       )
       : null
      }
  </>
  ) 
}

export default  CrearProyecto