import React from "react";
import "./cards.scss";
import Cross from  '../resource/icon/cross.svg';
import Crutch from  '../resource/icon/crutch.svg';
import Ot from '../resource/icon/ot.svg'
import Bank from '../resource/icon/bank.svg'
export default function Cards() {
  return (
    <div className="cardss">
        <div className="one">
            <img src={Cross} alt="cross"/>
            <h3>Appointments</h3>
            <span>213</span>
        </div>
        <div className="two">
        <img src={Crutch} alt="cross" />
            <h3>New Patients</h3>
            <span>104</span>
        </div>
        <div className="three">
        <img src={Ot} alt="cross" />
            <h3>Operations</h3>
            <span>24</span>
        </div>
        <div className="four">
        <img src={Bank} alt="cross" />
            <h3>Hospital Earnings</h3>
            <span>$ 12,174</span>
        </div>
    </div>
  );
}


