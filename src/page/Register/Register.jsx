import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const firstName = form.get('firstName')
        const lastName = form.get('lastName')
        const email = form.get('email')
        const password = form.get('password')
        console.log(firstName, lastName, email, password);
        
        // create user
        createUser(email, password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(error =>{
          console.error(error)
        })
    }


    return (
        <div>
            <div className="hero min-h-[90vh]">

    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
    <div className="text-center">
      <h1 className="text-5xl font-bold pt-8">Please Register</h1>
      </div>
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="First Name" name="firstName" className="input input-bordered mb-3" required />
          <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Register</button>
        </div>
      </form>
      <p className="text-center pb-4">Already have an Account <Link className="text-blue-600 font-bold" to='/login'>Login</Link> </p>
    </div>
  </div>
</div>

    );
};

export default Register;