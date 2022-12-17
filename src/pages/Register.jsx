import React from 'react'
import img from '../images/add_avatay.jfif'
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>CHAT APP</span>
        <span className='title'>Register</span>
        <form action="">
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input type="file" style={{display:'none'}} id='file' />
          <label htmlFor="file">
            <img src={img} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an acount? Login</p>
      </div>
    </div>
  )
}

export default Register