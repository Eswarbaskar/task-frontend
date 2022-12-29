import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    
    return (
        <div className="container">
            
            <div className="row">
                <div className="col text-center">
                    <h3>WELCOME</h3>
                    <h2>{ }</h2>
                    <Link to={'/header'} className='link-dark'>Add more details...</Link>
                </div>
            </div>

       
        </div>
     )
}
 export default Home