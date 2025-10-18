import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from './Context';


const LogInAuth = () => {
    const{signIn}=use(AuthContext)
    const handleSignIn=(e)=>{
e.preventDefault()

const email= e.target.email.value;
const password= e.target.password.value;
signIn(email,password)
.then((res)=>{
    console.log(res.user)
})
.catch((err)=>{
    console.log(err.message)
})

    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
           
             <div className="bg-base-100 w-180 py-10  shrink-0 shadow-2xl">
      <div className="card-body w-180">
         <h3 className='font-semibold text-[35px] text-primary text-center mb-10'>Login your account</h3>
      <form onSubmit={handleSignIn}>
          <fieldset className="fieldset mx-auto">
          <label className="label">Email</label>
          <input type="email" name='email' className="input  w-[558px]" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input w-[558px]" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
          <p>Don't Have An Account ? <NavLink className="text-secondary" to="/auth/register">Register</NavLink></p>
        </fieldset>
      </form>
      </div>
    </div>
        </div>
    );
};

export default LogInAuth;

