import React from 'react'
import './aside.scss'
import logo from '../resource/icon/logo-image.svg'
import dash from '../resource/icon/pie chart.svg'
import stetn from '../resource/icon/medical/devices/stethoscope 1.svg'
import doc from '../resource/icon/medical/staff/doctor 2.svg'
import staff from '../resource/icon/medical/staff/nurse 2.svg'
import disable from '../resource/icon/medical/disabled/default.svg'
import bank from '../resource/icon/web/bank/credit card.svg'
import help from '../resource/icon/web/question/circled.svg'

function Aside() {

  return (
    <aside>
      <div className="logo">
        <a href='/'><img src={logo} alt="logo" /> </a>
      </div>
      <ul>
        <p> MEDICINE </p>

        <li className='im'><img src={dash} alt="" /><a className='active' href="">Dashboard</a></li>
        <li className='im'><img src={stetn} alt="" /><a href="">Appointments</a></li>
        <li className='im'><img src={doc} alt="" /><a href="">Doctors</a></li>
        <li className='im'><img src={staff} alt="" /><a href="">Departments</a></li>
        <li className='im'><img src={disable} alt="" /><a href="">Patients</a></li>
        <li className='im'><img src={bank} alt="" /><a href="">Payments</a></li>
      </ul>
      <hr></hr>
      <ul>
        <li className='im' ><img src={help} alt="" /><a href="">Help</a></li>
      </ul>
    </aside>
  )
}

export default Aside
