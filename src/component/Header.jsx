import { TbCoinFilled } from "react-icons/tb";
import PropTypes from 'prop-types'


const Header = ({coin}) => {
  
  
    return (
        <div className="sticky bg-white top-0 z-50">
            <div className= ' w-11/12 mx-auto navbar bg-base-100'>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      
      <li><a>Schedules</a></li>
      </ul>
    </div>
   <img src="https://i.ibb.co.com/VYb1MQH/logo.png" alt="" />
  </div>
  
  <div className="navbar-end space-x-10">
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      
      <li><a>Schedules</a></li>
    </ul>
  </div>
   <div className="flex items-center gap-3 border rounded-md px-4 py-2 font-bold"><h4>{coin} Coin </h4><TbCoinFilled  className="text-yellow-500"/></div>
  </div>
</div>
            
        </div>
    );
};
Header.propTypes={
  coin: PropTypes.number
}

export default Header;