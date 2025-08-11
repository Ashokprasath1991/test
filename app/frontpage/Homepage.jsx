//import React,from 'react';
import { useNavigate } from "react-router";
import Dashboard from "./Dashboard";

const Homepage = () => {

    const navigate = useNavigate();

    return (

        /*  <div className="full_page"> */

        <div className='first-page d-flex justify-content-around'>

            <div className='title'>

                <p className='title text-light'>Attendance <br />Management<br /> System </p>

            </div>

            <div className="login_part text-center mt-5   justify-content-around">

                <p className="mt-5">UserName:<input type="Username" className="text-dark" /></p>
                <p>Password:<input type="Username" className="text-dark" /></p>

                <div className="password_text">

                    <p> <input type="checkbox" className="text-success" />Remember me</p>
                    <a className=" text-dark" href="#!">Forgot password?</a><br />

                </div>

                <button type="submit" className="btn btn-outline-light text-dark" onClick={() => navigate('/Dashboard')}> Login </button>

            </div>
        </div >
        /*  </div> */

    )
};

export default Homepage;