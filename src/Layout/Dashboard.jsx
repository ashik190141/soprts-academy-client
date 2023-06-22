import { NavLink, Outlet } from "react-router-dom";
import { FaHistory, FaHome, FaSchool, FaUser } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import useAuth from "../Hooks/useAuth";
import img from '../assets/sports_academy.jpg';


const Dashboard = () => {
    // const isInstructor = false;
    // const isAdmin = false;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useAuth();
    
    return (
        <div className="drawer lg:drawer-open drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="flex flex-col items-center justify-center mt-28">
                    <h2 className="uppercase text-4xl mb-7">hello, {user?.displayName}, Welcome to</h2>
                    <div className="flex md:flex-row gap-5 items-center">
                        <img src={img} alt="" className="w-20 bg-white rounded-xl" />
                        <p className="font-bold text-5xl text-black">Astha <span className="font-bold text-orange-500">Sports Academy</span></p>
                    </div>
                </div>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {
                        isAdmin ? <>
                            <li className="text-xl font-semibold"><NavLink to="/dashboard/manageClass"><FaSchool></FaSchool>Manage Classes</NavLink></li>
                            <li className="text-xl font-semibold"><NavLink to="/dashboard/manageUser"><FaUser></FaUser>Manage Users</NavLink></li>
                        </> :
                        <>
                            {
                                isInstructor ?  <>
                                    <li className="text-xl font-semibold"><NavLink to="/dashboard/addAClass"><FaSchool></FaSchool>Add A Class</NavLink></li>
                                    <li className="text-xl font-semibold"><NavLink to="/dashboard/myClass"><FaUser></FaUser>My Class</NavLink></li>
                                </> : <>
                                    <li className="text-xl font-semibold"><NavLink to="/dashboard/selectClass"><FaUser></FaUser>My Selected Class</NavLink></li>
                                    <li className="text-xl font-semibold"><NavLink to="/dashboard/enrollClass"><FaSchool></FaSchool>Enrolled Class</NavLink></li>
                                    <li className="text-xl font-semibold"><NavLink to="/dashboard/paymentHistory"><FaHistory></FaHistory>Payment History</NavLink></li>
                                </>        
                            } 
                        </>
                    }
                    
                    <div className="divider"></div>
                    <li className="text-xl font-semibold"><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;