import React, { useState } from 'react'
import "./Login.scss"
import { auth } from "../../firebase/config"
import { useHistory } from 'react-router-dom'


const Login = () => {
  const history = useHistory()
  const [formPossibleError, setFormPossibleError] = useState("")
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFromPassword] = useState("")

  const loginUser = (evt) => {
    evt.preventDefault()

    auth.signInWithEmailAndPassword(formEmail, formPassword)
        .then(response => {
            if (response) {
              history.push("/")
            }
        })
        .catch(err => {
          setFormPossibleError(err.massege)
        })
  }
  return (
    <div className='login'>
      {
          formPossibleError && <p style={{color: "red", marginBottom: "10px"}}>{formPossibleError}</p>
      }
        <h2 className='login__heading'>Log In</h2>

        <form className='login__form' onSubmit={loginUser}>
            <label className='login__label'>Enter email</label>
            <input className='login__input' onChange={(e) => setFormEmail(e.target.value)} type="email" placeholder='Email'/>

            <label className='login__label'>Enter password</label>
            <input className='login__input' onChange={(e) => setFromPassword(e.target.value)} type="password" placeholder='Password'/>

            <button className='login__btn'>Submit</button>
        </form>
    </div>
  )
}

export default Login