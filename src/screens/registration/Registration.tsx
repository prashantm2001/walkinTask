import { Link, Outlet } from 'react-router-dom'
import './styles.css'
import Back from "../../assets/icons/Back.svg"

const Registration = () =>{
  return (
    <div className="registration">
      <div className='registration-top'>
        <Link to="/Login">
          <img src={Back} alt="back"/>
        </Link>
        <div>Create a Account</div>
        <div>
          <button>CANCEL</button>
          <Link to="/login"><button>CREATE</button></Link>
        </div>
      </div>
      <div className='progress-bar'>
        <div><div className='progress'>1</div>Personal Information</div>
        <div><div className='progress'>2</div>Qualifications</div>
        <div><div className='progress'>3</div>Review and Proceed</div>
      </div>
      <div className="registration-cointainer">
        <Outlet/>
      </div>
    </div>
  )
}

export default Registration