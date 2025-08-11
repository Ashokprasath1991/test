
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
import EmployeesInfoChart from './chartcomponent';

import Employees_availability from '../chartjs_practice/Employee';
import SearchIcon from '@mui/icons-material/Search';
import DoughnutChart from '../chartjs_practice/dougnut';


const Leftnavbar = () => {

    return (
        <>
            {/* <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}> */}
            {/* <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}> */}

            {/* Sidebar */}
            <div
                style={{
                    width: '350px',
                    backgroundColor: '#dee2e6',
                    padding: '10px',
                    position: 'fixed', // fixed position
                    top: 0,            // stick to top
                    left: 0,           // stick to left
                    height: '100vh',   // full screen height
                    overflowY: 'auto', // scroll only if menu is taller than screen
                }}
            >
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


            {/* </div > */}
            {/* </div > */}

        </>

    )
};

export default Leftnavbar;



