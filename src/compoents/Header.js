import React from 'react'
import { useEffect } from 'react';

import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';

function Header() {
  let param = useParams()
  let navi = useNavigate()
  const formik = useFormik({
    initialValues: {
      age: '',
      mobile: '',
      dob: '',
      gender: ''
    },
    onSubmit: async values => {
      await axios.put(`https://project1-2hf9.onrender.com/users/update${param.id}`)
    },
     });
     let getdata = async()=>{
      try {
        let user = await axios.get(`https://project1-2hf9.onrender.com/users/${param.id}`)
        formik.setValues(user)
      } catch (error) {
        
      }
     }

    useEffect(() => {
      getdata()
     }, [])
  
  return (
    <div className="container ">
      <div className="row justify-content-center m-2">
        <div className="col-lg-8 display p-4">
          <form onSubmit={formik.handleSubmit}>
            <h4 className='text-center'>Add your details</h4>
            <div class="mb-3">
              <label className="form-label">name</label>
              <input type="text" className="form-control"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name} />
            </div>
            <div class="mb-3">
              <label className="form-label">Age</label>
              <input type="number" className="form-control"
                id="age"
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age} />
            </div>
            <div class="mb-3">
              <label className="form-label">mobile</label>
              <input type="mobile" className="form-control"
                id="mobile"
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile} />
            </div>
            <div class="mb-3">
              <label className="form-label">dob</label>
              <input type="date" className="form-control"
                id="dob"
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob} />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="radio" id="flexRadioDefault1"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" checked
                  onChange={formik.handleChange}
                  value={formik.values.gender}/>
                  <label class="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
              </div>
              
            </div>
            <button class="btn btn-dark w-100" onClick={() => { navi('/home') }} type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header