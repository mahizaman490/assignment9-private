import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() => alert('logout successfully'))
    .catch(error => console.error(error))
  }

    const navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    {/* when clicking only lgin user can go into this page */}
  <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    {/* only login users can see it */}
    
    
    
    
    
    
    </>
    return (
        <div className="navbar bg-base-100">

  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold text-red-500">Social Events</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      <span>{user.email}</span>
       <a onClick={handleLogOut} className="btn btn-sm">Logout</a>
      </>
      : <Link to='/login'>
        <button className="btn btn-sm">Login</button>
      </Link>
    }
   
  </div>
</div>
    );
};

export default Navbar;