import { useState } from "react"
import { useNavigate } from "react-router-dom";



function Login() {
  const hist = useNavigate();

  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');

  const loginUser = async (e)=>{
    e.preventDefault();

    const res = await fetch('http://localhost:5000/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });

    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credential");
    }else{
      window.alert("Login Successful")
      hist.push('/')
    }

  }



  return (
    <>
      <div className="Container">
        <div className="loginDetails">
          <h1 className='title logintitle'>Login</h1>
          <form className='LoginForm' method="POST">
            <div className="Loginname">
              <label htmlFor=""> Username:</label><br />
              <input type="text" name="email" id="email" autoComplete='off' placeholder='codofile' value={email} onChange={(e)=> setemail(e.target.value)} /><br />
            </div>
            <div className="Loginname">
              <label htmlFor=""> Password:</label><br />
              <input type="password" name="password" id="pass" autoComplete='off' placeholder='codofile' value={password} onChange={(e)=>{setpassword(e.target.value)}} /><br />
            </div>
            <button className='btn' onClick={loginUser}>Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login