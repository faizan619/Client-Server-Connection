


function Login() {
  return (
    <>
      <div className="Container">
        <div className="loginDetails">
          <h1 className='title logintitle'>Login</h1>
          <form className='LoginForm'>
            <div className="Loginname">
              <label htmlFor=""> Username:</label><br />
              <input type="text" name="name" id="name" autoComplete='off' placeholder='codofile' /><br />
            </div>
            <div className="Loginname">
              <label htmlFor=""> Password:</label><br />
              <input type="password" name="name" id="name" autoComplete='off' placeholder='codofile' /><br />
            </div>
            <button className='btn' onClick={() => console.log('clicked')}>Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login