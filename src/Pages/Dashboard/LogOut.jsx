import { Link } from "react-router-dom";

const LogOut = () => {
    return (
        <div>
            <h2>Are you sure LogOut? Please <Link className="text-error" to='/'>LogOut</Link></h2>
        </div>
    );
};

export default LogOut;