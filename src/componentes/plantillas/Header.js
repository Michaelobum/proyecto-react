import React,{useState} from 'react'
//rafce
const Header = () => {
    const [user, setUser] = useState(true)

    const login = () => {
      setUser({id:1,nombre:"Michael Moran"})
    }
    const logout = () => {
      setUser(null)
    }
    return (
        <header className="d-flex justify-content-between p-4 bg-gradient" Style="background-color: #f0d1bb " >
            <span className='navbar-brand mb-0 fs-4 text-dark'>User:{user? " Michael Moran":" Desconocido"}</span>
            <nav>
                <div className='container-fluid'>
                    {user 
                        ? (<button 
                            className="btn btn-outline-success text-light" 
                            type="Button" 
                            onClick = {logout} >Cerrar Sesion
                        </button>)
                        : (<button 
                            className="btn btn-outline-success text-light" 
                            type="Button" 
                            onClick = {login} >Iniciar Sesion
                        </button>)
                    }
                </div>    
            </nav>
        </header>
    )
}

export default Header
