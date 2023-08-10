import { Link } from 'react-router-dom'
import './styles.css'
import { BiMap } from 'react-icons/bi'
import { MdKeyboardArrowUp } from 'react-icons/md'

const Post = (props:any) =>{
  return (
    <div className="post-card">
      <div className="bottom-border">
        <div className="green-text">Walk In for Multiple Job Roles</div>
      <p>Date & Time :</p>
      <div className="flex">
        <div className="back-border">10-Jul-2021 to 11-Jul-2021</div>
        <BiMap size={16}/>
        <div>Mumbai</div>
      </div>
      </div>
      <div>
        <p>Job Roles :</p>
        <div className="flex">
          <div className="job-roles flex">
            <div className="flex border-right">
              <BiMap size={20}/>
              <div>Software Quality Engineer</div>
            </div>
            <div className="flex border-left">
              <BiMap size={20}/>
              <div>Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="small-yellow-box">
        Internship Opportunity for MCA Students
      </div>
      {
        props.post ? 
        <div className="blue-header">
          <div>Work Experience</div>
          <div>
            <MdKeyboardArrowUp size={20}/>
          </div>
        </div>:
      <div className='card-buttons'>
      <Link to="/post"><button>VIEW MORE DETAILS</button></Link>
      </div>
      }  
    </div>
  )
}

export default Post
