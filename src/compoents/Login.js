import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function Login() {
    let navi = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            const errors = {};

            if (!values.email) {
                errors.email = 'requried'
            }
            if (!values.password) {
                errors.password = 'requried'
            }



            return errors
        },
        onSubmit: async values => {
            try {
                let login = await axios.post("https://project1-2hf9.onrender.com/users/login", values)
              
                if (login.data.statusCode === 401) {
                    toast.error(login.data.message);
                    navi('/login')
                } else {
                    toast.success("login successfully")
                    navi('/home')
                }
               
            } catch (error) {
                toast.error(error);

            }

        },
    });
    return (
        <div className="container ">
            <div className="row justify-content-center m-4">
                <div className="col-lg-8 p-4 display">

                    <form onSubmit={formik.handleSubmit}>
                        <h3 className='text-center'>LOG-IN</h3>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input type="email" className="form-control"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                style={{ border: formik.errors.email ? '1px solid red' : '' }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                style={{ border: formik.errors.password ? '1px solid red' : '' }} />
                        </div>
                        <button className='btn btn-dark w-100' type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login