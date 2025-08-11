

import EmployeesInfoChart from './chartcomponent';

import Employees_availability from '../chartjs_practice/Employee';
import SearchIcon from '@mui/icons-material/Search';
import DoughnutChart from '../chartjs_practice/dougnut';
import Leftnavbar from './leftnavbar';


const Dashboard = () => {

    return (
        <>
            <div style={{ display: 'flex' }}>

                {/* Sidebar */}

                <Leftnavbar />

                {/* Main Content */}
                <main
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#f8f9fa',
                        marginLeft: '350px', // push main content to right
                        // height: '100vh',
                        // overflowY: 'auto',  // scroll only main content
                    }}
                >
                    {/* Header */}
                    <div className='d-flex wrap justify-content-between bg-light g-4' style={{ padding: '0px', borderBottom: '1px solid gray' }}>


                        <button className='fs-4 border none bg-light '><SearchIcon /><input type="text" className="Searchbar rounded fs-5  me-4" /></button>
                        <p className="bg-light d-inline pt-3 fs-5">Dashboard</p>


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
                        width: '100%', border: '1px'
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
        </>

    )
};

export default Dashboard;



