import React, { useState } from 'react'
import "./Signup.scss";
import { auth } from "../../firebase/config";
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [possibleError, setPossibleError] = useState("")

  const createUser = (evt) => {
      evt.preventDefault()

      auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
          if (response) {
             history.push("/accounts")
          }
      })
      .catch(err => {
        setPossibleError(err.message)
      })
  }
  return (
    <div className='signup' onSubmit={createUser}>
      {
          possibleError && <p style={{color: "red", marginBottom: "10px"}}>{possibleError}</p>
      }
        <h2 className='signup__heading'>Sign Up</h2>

        <form className='signup__form'>
            <label className='signup__label'>Enter Email</label>
            <input className='signup__input' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email'/>

            <label className='signup__label'>Enter password</label>
            <input className='signup__input' onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password'/>
            <button className='signup__btn'>Submit</button>
        </form>
    </div>
  )
}

export default Signup