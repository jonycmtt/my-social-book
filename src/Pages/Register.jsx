import { Link, useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate()

  const handleRegister = event => {
    event.preventDefault();
    navigate('/login')
    
  }



    return (
        <div className="my-20 flex justify-center items-center">
        <div className="card w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="pb-4">
             <p className="text-center"> Already Have an Account? Please <Link className="text-green-600 " to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;