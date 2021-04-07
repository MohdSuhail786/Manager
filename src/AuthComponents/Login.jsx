import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

const Login = () => {
  
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  let history = useHistory();

  const loginBtn = () => {
    console.log(email,password)
    let payload = {
      email: email,
      password: password
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    fetch("http://localhost:7860/login",requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert(data.message);     
        localStorage.accessToken = data.accessToken;
        localStorage.refreshToken = data.refreshToken;
        if (data.type === 2) history.push('/form')
        else history.push('/admin')
      })
    }
  

    return (
          <form id="login-form" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <input type="button" value="Login" className="btn solid" onClick={loginBtn}/>
          </form>
    ) 
}

export default Login;