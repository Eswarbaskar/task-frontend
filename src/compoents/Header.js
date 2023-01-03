import React from 'react'
import { useEffect } from 'react';

import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
  let param = useParams()

  let navi = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      mobile: '',
      dob: '',
      gender: ''
    },
    onSubmit: async (values) => {
      try {
        await axios.put(`https://project1-2hf9.onrender.com/users/update/${param.id}`, values)

        toast.success('updated successfully')
        navi('/home')
      } catch (error) {
        toast.error(error)
      }

    },
  });
  let getdata = async () => {
    try {
      let users = await axios.get(`https://project1-2hf9.onrender.com/users/${param.id}`)

      formik.setValues(users.data.data)


    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <div className="container ">
      <div className="row justify-content-center m-2">
        <div className="col-lg-8 display p-4">
          <form onSubmit={formik.handleSubmit} className='text-center'>
            <h3 className='text-center'>Add Details</h3>
            <div className="mb-3 form-group">
              <label className="form-label">Name</label>
              <input type="name" className="form-control"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}

              />

            </div>
            <div className="mb-3 form-group">
              <label className="form-label">Age</label>
              <input type="number" className="form-control"
                id="age"
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
            </div>
            <div className="mb-3 form-group ">
              <label className="form-label">Mobile</label>
              <input type="text" className="form-control"
                id="mobile"
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
            </div>
            <div className="mb-3 form-group">
              <label className="form-label">DOB</label>
              <input type="date" className="form-control"
                id="dob"
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
              />

            </div>
            <div className="mb-3 form-group">
              <label className="form-label">Gender</label>
              <input type="text" className="form-control"
                id="gender"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}

              />
              </div>
            
            <button className='btn btn-dark w-100' type="submit">Submit</button>
          </form>
          

          </div>
        </div>
      </div>
      )
}

      export default Header