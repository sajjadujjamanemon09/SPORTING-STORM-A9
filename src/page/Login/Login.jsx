import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log('location in the log in page', location);

    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
          console.log(result.user);

          // navigate after login
          navigate(location?.state ? location.state : '/')


        })
        .catch(error =>{
          console.error(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-[90vh]">

    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
    <div className="text-center">
      <h1 className="text-5xl font-bold pt-8">Login now!</h1>
      </div>
      <form onSubmit={handleLogin} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>
      <p className="text-center pb-4">Do not have an Account <Link className="text-blue-600 font-bold" to='/register'>Register</Link> </p>
    </div>
  </div>
</div>

    );
};

export default Login;