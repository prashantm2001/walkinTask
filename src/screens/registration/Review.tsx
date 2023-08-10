import { MdFileUpload, MdKeyboardArrowUp } from 'react-icons/md'
import './styles.css'
import Account from '../../assets/quantum screen assets/icons/account_circle.svg'
import { Link } from 'react-router-dom'

const Review = () =>{
  return (
    <div className="review">
      <div className="personal-card">
        <div className="perosnal-right">
          <div className="label-input">
            <label htmlFor="name">First Name*</label>
          <h1>John</h1>
          </div>
          <div className="label-input">
            <label htmlFor="name">Last Name*</label>
            <h1>Watson</h1>
          </div>
          <div className="label-input">
            <label htmlFor="name">Email ID*</label>
            <h1>Johnwatson@example.com</h1>
          </div>
          <div className="label-input">
            <label htmlFor="name">Mobile Number*</label>
            <h1>+91 9876543210</h1>
          </div>
          <div className='label-input flex upload-div'>
            <MdFileUpload size={24} style={{ "margin-right": "8px"}}/>
            <div>UPLOAD RESUME</div>
            <h1>MyResume.pdf</h1>
          </div>
          <div className="label-input">
            <label htmlFor="name">Enter Portfolio URL (if any)</label>
            <h1>www.myportfolio.in</h1>
          </div>
          <div className="checkboxes">
            <p>Preferred Job Roles*</p>
            <div>
              <h1>Instructional Designer</h1>
            </div>
            <div>
              <h1>Software Quality Engineer</h1>
            </div>
          </div>
          <div className="label-input">
            <label htmlFor="name">If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</label>
            <h1>-</h1>
          </div>
          <div className="checkboxes">
            <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
            <label htmlFor="name">Send me job related updates via mail</label>
          </div>
        </div>
        <div className="personal-left">
          <div className='account-pic'>
            <img style={{"width":"112px"}} src={Account}></img>
          </div>
        </div>
      </div>

    <div className="qualification-card" >
        <div className='blue-header'>
          <div>Educational Qualifications</div>
          <div>
            <MdKeyboardArrowUp size={20}/>
          </div>
        </div>
        <div className="educational-qualification">
        <div className="label-input twenty">
          <label htmlFor="name">Aggregate Percentage*</label>
        <h1>65</h1>
        </div>
        <div className="label-input twenty">
          <label htmlFor="name">Year of Passing*</label>
          <h1>2020</h1>
        </div>
        <div className="flex">
          <div className="label-input fifty">
            <label htmlFor="name">Qualification*</label>
            <h1>Bachelor in Technology (B.Tech)</h1>
          </div>
          <div className="label-input fifty">
            <label htmlFor="name">Stream*</label>
            <h1>Information Technology</h1>
          </div>
        </div>
        <div className="flex">
          <div className="label-input fifty">
            <label htmlFor="name">College*</label>
            <h1>Pune Institute of Technology (PIT)</h1>
          </div>
          <div className="label-input fifty">
            <label htmlFor="name">If others, please enter your college name</label>
            <h1>-</h1>
          </div>
        </div>
        <div className="label-input fifty">
          <label htmlFor="name">Where is your college located?*</label>
          <h1>Pune</h1>
        </div>
        </div>
      </div>
      <div className="qualification-card">
        <div className="blue-header">
          <div>Professional Qualifications</div>
          <div>
            <MdKeyboardArrowUp size={20}/>
          </div>
        </div>
        <div>
          <div className="checkboxes">
            <p>Applicant Type*</p>
            <div className="flex">
              <h1>Experienced</h1>
            </div>
            </div>
        </div>
      </div>
      <div className="qualification-card">
        <div className="label-input twenty pt-24">
          <label htmlFor="name">Years of Experience*</label>
        <h1>5</h1>
        </div>
        <div className="label-input twenty">
          <label htmlFor="name">Current CTC* (In Rupees)</label>
          <h1>5,00,000</h1>
        </div>
        <div className="label-input twenty">
          <label htmlFor="name">Expected CTC* (In Rupees)</label>
          <h1>6,50,000</h1>
        </div>
          <div className="checkboxes">
            <p>Select All The Technologies You Expertise In*</p>
            <div>
              <h1>Javascript</h1>
            </div>
          </div>
        <div className="label-input fifty">
          <label htmlFor="name">If others, please mention</label>
          <h1>-</h1>
        </div>
          <div className="checkboxes">
            <p>Select All The Technologies You Are Familiar In</p>
            <div>
              <h1>Angular JS</h1>
            </div>
            <div>
              <h1>React</h1>
            </div>
          </div>
        <div className="label-input fifty">
          <label htmlFor="name">If others, please mention</label>
          <h1>-</h1>
        </div>
          <div className="checkboxes">
            <p>Are you currently on notice period?*</p>
            <div className="flex">
              <h1>Yes</h1>
            </div>
          </div>
        <div className="flex">
          <div className="label-input fifty">
            <label htmlFor="name">If Yes, when will your notice period end?*</label>
            <h1>20-May-2020</h1>
          </div>
          <div className="label-input fifty">
            <label htmlFor="name">How long is your notice period?* (Mention in months)</label>
              <h1>2 Months</h1>
          </div>
        </div>
          <div className="checkboxes">
            <p>Have You Appeared For Any Test By Zeus in the past 12 months?*</p>
            <div className="flex">
              <h1>No</h1>
            </div>
          </div>
        <div className="label-input fifty">
          <label htmlFor="name">If Yes, which role did you apply for? </label>
            <h1>-</h1>
        </div>
      </div>
      <div className='register-buttons'>
        <Link to="/register/qualification"><button>PREVIOUS</button></Link>
      </div>
    </div>
  )
}

export default Review
