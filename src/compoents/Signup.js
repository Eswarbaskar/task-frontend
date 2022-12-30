import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { toast } from 'react-toastify';

function Signup() {
  let  navi=useNavigate()
    const formik = useFormik({
        initialValues: {
          name: '',
          email:'',
          password:'',
          confirmpassword:''
        },
        validate:(values)=>{
           const errors={};
           if(!values.name){
            errors.name='requried'
           }
           if(!values.email){
            errors.email='requried'
           }
           if(!values.password){
            errors.password='requried'
           }
           if(!values.confirmpassword){
            errors.confirmpassword='requried'
           }
           

           return errors
        } ,
        onSubmit: async(values) =>{
           if(values.password===values.confirmpassword){
            try {
                
               let a = await axios.post("https://project1-2hf9.onrender.com/users/sign-up",values)
               console.log(a)
              } catch (error) {
               // toast.success('Sign-Up successfully')
              }
              navi('/login')
           }else{
             console.log ('confirmpassword is not match');
           }
        },
           
      });
    return (
        <div className="container">
            <div className="row justify-content-center m-2">
                <div className="col-lg-8 p-4 display">
                    <div>
                        <form onSubmit={formik.handleSubmit} className='text-center'>
                        <h3 className='text-center'>SIGN-UP</h3>
                        <div class="mb-3 form-group">
                            <label className="form-label">Name</label>
                            <input type="name" className="form-control" 
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            style={{border: formik.errors.name ? '1px solid red': ''}}
                            />
                            
                        </div>
                        <div class="mb-3 form-group">
                            <label className="form-label">E-mail</label>
                            <input type="email" className="form-control" 
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            style={{border: formik.errors.email ? '1px solid red': ''}}/>
                        </div>
                        <div class="mb-3 form-group ">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" 
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            style={{border: formik.errors.password ? '1px solid red': ''}}/>
                        </div>
                        <div class="mb-3 form-group">
                            <label className="form-label">Confirm password</label>
                            <input type="password" className="form-control" 
                            id="confirmpassword"
                            name="confirmpassword"
                            onChange={formik.handleChange}
                            value={formik.values.confirmpassword}
                            style={{border: formik.errors.confirmpassword ? '1px solid red': ''}}/>
                            
                        </div>
                        <button className='btn btn-dark w-100' type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup