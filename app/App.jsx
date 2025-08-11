import { useState } from 'react';
import './App.css'
import Homepage from './frontpage/Homepage';
import Dashboard from './frontpage/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import "./practice.css";
import BarChart from './chartjs_practice/bar_chart';

import Testing from './practice';
import DoughnutChart from './chartjs_practice/dougnut';
import Employees_availability from './chartjs_practice/Employee';
import Roughnote from '../Roughnote/rough_navbar';
import EmployeesInfoChart from './frontpage/chartcomponent';
/* second page */

import Employeeprofile from './Secondpage/mainpage';
import Leftnavbar from './frontpage/leftnavbar';
import EmployeeCard from './Roughnote/employeecard';



function App() {


  return (
    <div className='App'>

      {/* <testing /> */}


      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="homepage" element={<Homepage  />} />
        <Route path="chartpage" element={<EmployeesInfoChart />} />
        <Route path="practice" element={<Testing />} />
        <Route path="barchart" element={<BarChart />} />
        <Route path="dougnut" element={< DoughnutChart />} />
        <Route path="employee2" element={<Employees_availability />} />
        {/* Rough note */}
        <Route path="roughpage" element={<Roughnote />} />
        <Route path="leftnavbar" element={< Leftnavbar/>} />
        <Route path="cardpage" element={< EmployeeCard/>} />
        {/* second page */}
        <Route path="profilepage" element={<Employeeprofile />} />

      </Routes>


    </div>

  )

};

export default App;
