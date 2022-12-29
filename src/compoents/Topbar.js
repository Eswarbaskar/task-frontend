import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Home from './Home';

function Topbar() {
    let navi = useNavigate()
    return (

        <div className="container">
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to={'/home'}>Guvi</Link>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to={'/home'}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to={'/home'}>Contact</Link>
                    </li>
                </ul>

                    
    
                <form class="d-flex" role="search">
                    <button class="btn btn-outline-dark" onClick={()=>{navi('/login')}} type="submit">LOGOUT</button>
                </form>
            </div>

        </nav>
        <Home/>
        
        </div>
    )
}

export default Topbar