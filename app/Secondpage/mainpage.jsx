import react from 'react';
import Leftnavbar from '../frontpage/leftnavbar';
import Employees_availability from '../chartjs_practice/Employee';
import SearchIcon from '@mui/icons-material/Search';
import DoughnutChart from '../chartjs_practice/dougnut';
import EmployeesInfoChart from '../frontpage/chartcomponent';


const Employeeprofile = () => {
    return (
        <>

            <div style={{ display: 'flex' }}>

                {/* Sidebar */}

                <Leftnavbar />

                {/* Main Content */}
                <main className="bg-light"
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',

                        marginLeft: '350px', // push main content to right
                        // height: '100vh',
                        // overflowY: 'auto',  // scroll only main content
                    }}
                >
                    {/* Header */}
                    <div className='d-flex  justify-content-between bg-light search-box ms-5'
                        style={{
                            padding: '0px',
                            borderBottom: '0px solid gray'
                        }}>



                        <div className="input-group m-3 bg-light">
                            <span className="input-group-text bg-white " style={{ border: "1px solid black " }} ><SearchIcon className="fs-3" /></span>
                            <input type="text" className="form-control-sm fs-4 ps-1"
                                placeholder="search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                style={{ width: "500px", height: "40px" }} />
                        </div>


                        <p className="bg-light d-inline pt-3 fs-4 fw-bold me-5">Dashboard</p>




                    </div>

                    <div className="header d-flex justify-content-between bg-light">
                        <p className="fs-3 fw-bolder mt-4 ms-5 d-inline" style={{}}>Employee</p>
                        <div className="d-inline me-4">
                            <button className='fs-5 me-4 mt-3 btn btn-primary p-0' style={{ height: '40px', width: "190px" }}>AddEmployee</button>
                            <button className='fs-5 mt-3 btn btn-primary p-0' style={{ height: '40px', width: "160px" }}>Status</button>
                        </div>
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
                        width: '94%', borderTop: '0.1rem solid gray',
                        marginLeft:"55px"
                    }}>
                        <p>ashok</p>

                    </div>



                    {/* content page finished */}

                </main>
            </div >
        </>
    )
};

export default Employeeprofile;