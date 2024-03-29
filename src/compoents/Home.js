import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



function Home() {

    const [user, getUser] = useState([]);
    let navi = useNavigate()

    useEffect(() => {
        userData()
    }, [])
    let userData = async () => {
        let token = window.sessionStorage.getItem('token')
        try {
            
            if(token){
                let users = await axios.get('https://project1-2hf9.onrender.com/users',{
                    headers:{authorization:`Bearer ${token}`}
                })
                if(users.data.statusCode===200){
                    getUser(users.data.users);
                }else{
                    navi('/login')
                    alert('Kindly Login')
                }
            
            }else{
                  
                navi('/login')
                alert('Kindly Login')
            }


        } catch (error) {
            toast.error(error);
        }
    }



    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-12">
                    <h3 className='text-center'>WELCOME</h3>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Age</th>
                                <th>mobileNumber</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>UpdateUser</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             user.map((item, id) => {

                                return <tr key={id}>
                                    <th>{id + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <Link to={`/header/${item._id}`} className='btn btn-primary m-1'>Update</Link>
                                        <Link to={`/delete/${item._id}`} className='btn btn-danger'>Delete</Link>
                                    </td>

                                </tr>
                            }) 
                            }

                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    )
}
export default Home