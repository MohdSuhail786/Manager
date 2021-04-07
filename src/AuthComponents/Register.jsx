import React, {useState} from 'react';

const Register = (props) => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  
  const registerBtn = () => {
    let payload = {
      name:name,
      email:email,
      password:password
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    fetch('/register',requestOptions)
      .then(res => res.json())
      .then(data => {
        alert(data.message)
        props.onChange("container")
      })
  }

    return (
        <form name="signup" id="signupForm" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="name"  placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <input type="button" onClick={registerBtn}  className="btn" value="Sign up" />
          </form>
    )
}

export default Register;