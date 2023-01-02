import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Home from './Home';

function Topbar() {
    let navi = useNavigate()
    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/home'}>Guvi</Link>

                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/home'}>Home</Link>
                        </li>

                    </ul>

                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-dark" onClick={() => { navi('/login') }} type="submit">LOGOUT</button>
                    </form>
                </div>

            </nav>
            <Home />

        </div>
    )
}

export default Topbar