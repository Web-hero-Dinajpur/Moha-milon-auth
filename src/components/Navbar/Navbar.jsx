import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";



const Navbar = () => { 
const {user, signOutUser} = useContext(AuthContext);
console.log(user)
   

    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/registar'>Registar</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">

                    <div>Logo section</div>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            
            <div className="navbar-end">
                {
                    user ? <>
                    <span>{user.email}</span>
                    <a className="btn">Sign Out</a>

                    
                    </>
                    : 
                    <Link to='/login'>Login</Link>
                }               
            </div>
        </div>
    );
};

export default Navbar;