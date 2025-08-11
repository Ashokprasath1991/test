
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmployeesInfoChart from './frontpage/chartcomponent';
import DoughnutChart from './chartjs_practice/dougnut';
import Employees_availability from './chartjs_practice/Employee';
import SearchIcon from '@mui/icons-material/Search';
const Testing = () => {
    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                    {/* Sidebar */}
                    <div style={{ width: '350px', backgroundColor: '#dee2e6', padding: '10px', }}>
                        <span className="text-primary fs-3 fw-bolder">Galsoft Techonology</span>
                        <ul style={{ listStyle: 'none', }}>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><DashboardIcon /> Dashboard</a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><PeopleAltIcon /> Employees</a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href="">< AccountBoxIcon /> Projects </a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><FingerprintIcon /> Employee Profile</a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><ManageAccountsTwoToneIcon /> Employee Attendance</a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><AppRegistrationIcon /> Leave Request</a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><AccountBalanceIcon />  Departments</a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><LocalActivityIcon /> Tickets</a></li>
                            <li className="p-2 fs-6 text-dark"><a className="text-decoration-none" href=""><UpcomingIcon /> Holidays</a></li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <main
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            backgroundColor: '#f8f9fa',
                        }}
                    >
                        {/* Header */}
                        <div className='d-flex wrap justify-content-between bg-light g-4' style={{ padding: '2px', borderBottom: '1px solid gray' }}>


                            <button className='fs-4 border none bg-light '><SearchIcon /><input type="text" className="Searchbar rounded fs-5  me-4" /></button>
                            <p className="bg-light d-inline pt-3 fs-5">Dashboard</p>
                            {/*  <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search" /> 
                            <button className="btn btn-outline-success" type="submit">Search</button>*/}

                        </div>

                        {/* Scrollable Content */}
                        {/*  content page */}
                        <div className="bg-light" style={{
                            flex: 1,
                            overflowY: 'hidden',
                            backgroundColor: '#0fgr',
                            justifySelf: 'center',
                            height: '450px',
                            padding: '50px',
                            paddingLeft: '300px',
                            width: '100%', border: '0px'
                        }}>

                            < EmployeesInfoChart />
                        </div>
                        {/* other charts */}
                        <div className="othercharts d-flex justify-content-around mb-3 mt-3">

                            <div className="employees_availability border rounded bg-light d-flex">
                                <div className="">

                                    <Employees_availability />

                                </div>


                            </div>

                            <div className="total_employees border rounded bg-light">
                                <p className='fs-3 ps-3'>Total Employees </p>
                                <DoughnutChart />
                            </div>
                        </div>


                        {/* content page finished */}

                    </main>
                </div >
            </div >

        </>
    )
}

export default Testing;