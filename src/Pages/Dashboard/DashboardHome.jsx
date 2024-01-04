import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdPostAdd } from "react-icons/md";
import { VscSourceControl } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
const DashboardHome = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
                <NavLink to='user'> <CiUser /> User</NavLink>
              </li>
              <li>
                <NavLink to='addPost'><MdPostAdd></MdPostAdd> Create Post</NavLink>
              </li>
              <li>
                <NavLink to='control'><VscSourceControl/> Control Post</NavLink>
              </li>
              <li>
                <NavLink to='LogOut'><IoIosLogOut/> LogOut </NavLink>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
