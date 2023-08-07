import './styles.css'

const Login = () =>{
  return (
    <div className="card">
         <div className="title">
            <div>Log in</div>
         </div>
         <div className="input" >
            <input type="email" name="email" id="email" placeholder="Email ID*"/>
            <p>FORGOT Email ID?</p>
         </div>
         <div className="input" >
            <input type="password" name="password" id="password" placeholder="Password*"/>
            <p>FORGOT PASSWORD?</p>
         </div>
         <div className="checkbox">
            <input type="checkbox" name="remember" id="remember" checked/>
            <label htmlFor="remember">Remember me</label>
         </div>
         <div className="button">
            <button>LOG IN</button>
         </div>
         <div className='create'>
          <p>Not registered yet?</p>
          <h1>create an account</h1>
         </div>
      </div>
  )
}

export default Login
