import React from "react";
import Aside from "../aside_panel/aside";
import Header from "../header/header";
import Cards from "../cards/cards";
import "./container.scss";
import Dashboard from "../dashboard";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Dashtwo from '../../dashboardoptions/dashtwo'
import Dashmain from '../../dashboardoptions/dashmain';
import Dashthree from '../../dashboardoptions/dashthree';


function Container() {
  return (
    <div className="container">
      
      <Aside />
      <Header/>
      <Cards/>
      <Dashboard
        options={Dashmain}
      />
      <Dashboard
        options={Dashtwo}
      />
       <Dashboard
        options={Dashthree}
      />
      {/* <Table/> */}
    </div>
    
  );
}

export default Container;
