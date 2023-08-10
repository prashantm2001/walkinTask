import './styles.css'
import Account from '../../assets/quantum screen assets/icons/account_circle.svg'
import { MdFileUpload } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Personal = () =>{
  return (
    <div>
      <div className="personal-card">
        <div className="perosnal-right">
          <div className="label-input">
            <label htmlFor="name">First Name*</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
          <div className="label-input">
            <label htmlFor="name">Last Name*</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
          <div className="label-input">
            <label htmlFor="name">Email ID*</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
          <div className="label-input">
            <label htmlFor="name">Mobile Number*</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
          <div className='label-input flex'>
            <MdFileUpload size={24} style={{ "margin-right": "8px"}}/>
            <div>UPLOAD RESUME</div>
          </div>
          <div className="label-input">
            <label htmlFor="name">Enter Portfolio URL (if any)</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
          <div className="checkboxes">
            <p>Preferred Job Roles*</p>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Frontend Developer</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name"/>
              <label htmlFor="name">Backend Developer</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Full Stack Developer</label>
            </div>
          </div>
          <div className="label-input">
            <label htmlFor="name">If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
          <div className="checkboxes">
            <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
            <label htmlFor="name">Send me job related updates via mail</label>
          </div>
        </div>
        <div className="personal-left">
          <div className='account-pic'>
            <img style={{"width":"112px"}} src={Account}></img>
            <div>UPLOAD DISPLAY PICTURE</div>
            <p>Max. image size: 5 MB</p>
          </div>
        </div>
      </div>
      <div className='register-buttons'>
      <Link to="/register/qualification"><button>NEXT</button></Link>
      </div>
    </div>
  )
}

export default Personal