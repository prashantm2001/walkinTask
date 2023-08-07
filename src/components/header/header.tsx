import './styles.css'
import Logo from '../../assets/icons/logo used in header.svg'

const Header   = () =>{
  return (
    <div className="header">
         <img src={Logo} alt="quantuam" className="logo"/>
    </div>
  )
}

export default Header  