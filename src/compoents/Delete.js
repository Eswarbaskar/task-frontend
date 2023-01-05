import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Delete() {
    let param = useParams()
    let navi = useNavigate()
    useEffect(() => {
      
        deleteUser()

        navi('/home')
         userData() 

    }, [])
    
    let deleteUser = async() => {
         try {
            await axios.delete(`https://project1-2hf9.onrender.com/users/delete/${param.id}`)
           
           
         } catch (error) {
           toast.error(error) 
         }
         
    }
    let userData = async () => {
      try {
           await axios.get('https://project1-2hf9.onrender.com/users')


      } catch (error) {
          toast.error(error);
      }
  }

    
  return (
    <>
    </>
  )
}

export default Delete