import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-20 flex justify-center items-center">
      <div className="card w-full max-w-xl shadow-2xl bg-base-100">
        <form className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="pb-4">
           <p className="text-center"> Don&apos;t have an account yet? &nbsp; Please <Link className="text-green-600" to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
