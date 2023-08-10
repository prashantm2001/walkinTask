import './styles.css'
import { MdDone } from 'react-icons/md'

const Success = () =>{
  return (
    <div className='success-cointainer'>
      <div className="success">
        <div className="float-tick">
          <MdDone size={50}/>
        </div>
        <div className="bottom-border flex-middle">
          <h1>Congratulations ! You have successfully applied for the walk-in opportunity</h1>
        </div>
        <div className='bottom-border'>
          <p>Date & Time of Walk-In :</p>
          <h4>03rd July 2021</h4>
          <h4>9:00 AM to 11:00 AM</h4>
        </div>
        <div className="bottom-border">
          <p>Venue of Walk-In :</p>
          <h4>Zeus Systems Pvt. Ltd.</h4>
          <h4>1402, 14th Floor, Tower B, Peninsula Business Park. Ganpatrao Kadam Marg</h4>
          <h4>Lower Parel (W)</h4>
          <h4>Mumbai - 400 013</h4>
          <h4>Phone: +91-22-66600000</h4>
        </div>
        <div className="bottom-border">
          <p>THINGS TO REMEMBER :</p>
          <h4>- Please report 30 MINUTES prior to your reporting time.</h4>
          <h4>- Download your Hall Ticket from below and carry it with you during your Walk-In.</h4>
        </div>
      <div className='register-buttons'>
        <button>DOWNLOAD HALL TICKET</button>
      </div>
      </div>
    </div>
  )
}

export default Success
