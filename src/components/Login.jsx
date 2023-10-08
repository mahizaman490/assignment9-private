import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
const { signInUser } = useContext(AuthContext);
const handleLogin = e => {
e.preventDefault();
const email = e.target.email.value;
const password = e.target.password.value;
console.log(email,password)
signInUser(email,password)
.then(result => {
  console.log(result.user)
})
.catch(error => {

  console.error(error)
})

}



    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-red-500 font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-4">
          <button className="btn bg-red-500">Login</button>
        </div>
      </form>
      <p className="pb-3 pl-3"><span className="text-red-500 ">new here? </span> <Link to='/register' className="text-red-500 underline">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;