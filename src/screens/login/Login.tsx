import './styles.css'

const Login = () =>{
  return (
    <div className="card">
         <div className="title">
            <img src="src\assets/icons/back.svg" alt="go back"/>
            <div>Log in with Quantum</div>
            <div></div>
         </div>
         <div className="radios">
            <input type="radio" id="District" checked/>
            <label htmlFor="District">District</label>
            <input type="radio" id="Independent school" />
            <label htmlFor="Independent school">Independent school</label>
         </div>
         <div className="selector">
            <label htmlFor="state">State*</label>
            <select name="state" id="state">
               <option value="District 1">Alabama</option>
               <option value="District 1">Alabama</option>
            </select>
         </div>
         <div className="selector">
            <label htmlFor="state">District*</label>
            <select name="state" id="state">
               <option value="District 1">Alabama School District</option>
               <option value="District 1">Alabama School District</option>
            </select>
         </div>
         <div className="input" >
            <input type="email" name="email" id="email" placeholder="Username/Email ID*"/>
            <p>FORGOT USERNAME?</p>
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
      </div>
  )
}

export default Login
