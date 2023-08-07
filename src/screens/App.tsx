import './App.css'
import Header from '../components/header/header'
import { Outlet } from 'react-router-dom'
import "../assets/Quicksand font 1/static/Quicksand-Regular.ttf"
import "../assets/Quicksand font 1/static/Quicksand-Medium.ttf"
import "../assets/Quicksand font 1/static/Quicksand-Bold.ttf"

const App = () =>{
  return (
    <div className='main'>
      <Header/>
        <Outlet/>
    </div>
  )
}

export default App
