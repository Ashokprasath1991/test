import react from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import MotionPhotosOffOutlinedIcon from '@mui/icons-material/MotionPhotosOffOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';

const Employees_availability = () => {

    const data = [
        { icon: <CheckBoxIcon fontSize="large" />, label: "Attendance", count: 400 },
        { icon: <WatchLaterOutlinedIcon fontSize="large" />, label: "Late Coming", count: 17 },
        { icon: <MotionPhotosOffOutlinedIcon fontSize="large" />, label: "Absent", count: 3 },
        { icon: <BeachAccessOutlinedIcon fontSize="large" />, label: "Leave Apply", count: 5 },
    ];

    return (

        <div className="Card p-3 shadow-sm" >
            <h6 className="fs-3 fw-normal mb-3">Employees Availability</h6>
            <div className="row row-cols-2 g-3">

                {data.map((item, index) => (
                    <div key={index} className="col d-flex justify-content-center">
                        <div className="border rounded p-2 text-center"style={{ height:"130px", width:"110px"}}>
                            <div className="mb-1 fs-2 text-primary">{item.icon}</div>
                            <div className="fw-bold " style={{fontSize:"0.7rem"}}>{item.label}</div>
                            <div className="text-muted" style={{fontSize:"0.7rem"}}>{item.count.toString().padStart(2,'0')}</div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Employees_availability;