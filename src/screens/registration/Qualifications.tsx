import { Link } from 'react-router-dom'
import './styles.css'
import { MdKeyboardArrowUp } from 'react-icons/md'

const Qualification = () =>{
  return (
    <div>
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
          <input type="text" name="name" id="name" placeholder="Aggregate Percentage*"/>
        </div>
        <div className="label-input twenty">
          <label htmlFor="name">Year of Passing*</label>
          <input type="text" name="name" id="name" placeholder="Year of Passing*"/>
        </div>
        <div className="flex">
          <div className="label-input fifty">
            <label htmlFor="name">Qualification*</label>
            <input type="text" name="name" id="name" placeholder="Qualification"/>
          </div>
          <div className="label-input fifty">
            <label htmlFor="name">Stream*</label>
            <input type="text" name="name" id="name" placeholder="Stream*"/>
          </div>
        </div>
        <div className="flex">
          <div className="label-input fifty">
            <label htmlFor="name">College*</label>
            <input type="text" name="name" id="name" placeholder="College*"/>
          </div>
          <div className="label-input fifty">
            <label htmlFor="name">If others, please enter your college name</label>
            <input type="text" name="name" id="name" />
          </div>
        </div>
        <div className="label-input fifty">
          <label htmlFor="name">Where is your college located?*</label>
          <input type="text" name="name" id="name"/>
        </div>
        </div>
      </div>
      <div className="qualification-card">
        <div className="blue-header">
          <div>Work Experience</div>
          <div>
            <MdKeyboardArrowUp size={20}/>
          </div>
        </div>
        <div>
          <div className="checkboxes">
            <p>Applicant Type*</p>
            <div className="flex">
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label className="pr-24" htmlFor="name">Fresher</label>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name"/>
              <label htmlFor="name">Experienced</label>
            </div>
            </div>
        </div>
      </div>
      <div className="qualification-card">
        <div className="label-input twenty pt-24">
          <label htmlFor="name">Years of Experience*</label>
          <input type="text" name="name" id="name" placeholder="years"/>
        </div>
        <div className="label-input twenty">
          <label htmlFor="name">Current CTC* (In Rupees)</label>
          <input type="text" name="name" id="name" placeholder=""/>
        </div>
        <div className="label-input twenty">
          <label htmlFor="name">Expected CTC* (In Rupees)</label>
          <input type="text" name="name" id="name" placeholder=""/>
        </div>
          <div className="checkboxes">
            <p>Select All The Technologies You Expertise In*</p>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Javascript</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name"/>
              <label htmlFor="name">Angular JS</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">React</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Node JS</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Others</label>
            </div>
          </div>
        <div className="label-input fifty">
          <label htmlFor="name">If others, please mention</label>
          <input type="text" name="name" id="name" placeholder=""/> 
        </div>
          <div className="checkboxes">
            <p>Select All The Technologies You Are Familiar In</p>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Javascript</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name"/>
              <label htmlFor="name">Angular JS</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">React</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Node JS</label>
            </div>
            <div>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label htmlFor="name">Others</label>
            </div>
          </div>
        <div className="label-input fifty">
          <label htmlFor="name">If others, please mention</label>
          <input type="text" name="name" id="name" placeholder=""/> 
        </div>
          <div className="checkboxes">
            <p>Are you currently on notice period?*</p>
            <div className="flex">
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label className="pr-24" htmlFor="name">Yes</label>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name"/>
              <label htmlFor="name">No</label>
            </div>
          </div>
        <div className="flex">
          <div className="label-input fifty">
            <label htmlFor="name">If Yes, when will your notice period end?*</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="label-input fifty">
            <label htmlFor="name">How long is your notice period?* (Mention in months)</label>
            <input type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
        </div>
          <div className="checkboxes">
            <p>Have You Appeared For Any Test By Zeus in the past 12 months?*</p>
            <div className="flex">
              <input type="checkbox" name="name" id="name" placeholder="Enter your name" checked/>
              <label className="pr-24" htmlFor="name">Yes</label>
              <input type="checkbox" name="name" id="name" placeholder="Enter your name"/>
              <label htmlFor="name">No</label>
            </div>
          </div>
        <div className="label-input fifty">
          <label htmlFor="name">If Yes, which role did you apply for? </label>
          <input type="text" name="name" id="name"/> 
        </div>
      </div>
      <div className='register-buttons'>
        <Link to="/register/personal"><button>PREVIOUS</button></Link>
        <Link to="/register/review"><button>NEXT</button></Link>
      </div>
    </div>
  )
}

export default Qualification
