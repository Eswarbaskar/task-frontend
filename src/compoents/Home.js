import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
    // let user =[{
    //     name:"eswar",
    //     email:"eswar1@gmail.com",
    //     age:23,
    //     dob:"07/08/99",
    //     mobile:"12345667"
    // },
    // {
    //     name:"eswar",
    //     email:"eswar1@gmail.com",
    //     age:23,
    //     dob:"07/08/99",
    //     mobile:"12345667"
    // }]
    const [user, getUser] = useState([])
//    console.log(User);
    useEffect(() => {
        userData()
    }, [])
    let userData = async () => {
        try {
            let users = await axios.get('https://project1-2hf9.onrender.com/users')
            getUser(users.data.data);
            // console.log(users.data);

        } catch (error) {
          console.log(error);
        }
    }
    


    return (
        <div className="container">

            <div className="row">
                <div className="col text-center">
                <h3>WELCOME</h3>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
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
                                user.map((item , id) => {
                                    // console.log(User);
                                    return  <tr>
                                    {/* <th scope="row">{id}</th> */}
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <Link to={`/header/${id}`} className='btn btn-dark'>Add more details...</Link>
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