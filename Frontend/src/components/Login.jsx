import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);  // This will log the email and password to the console
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>

          {/* Form wrapping inputs */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder='Enter your Email'
                  className='w-80 px-3 border rounded md outline-none py-1'
                  {...register("email", { required: true })}
                />
                {/* Error message for email displayed below the input */}
                {errors.email && (
                  <span className="text-sm text-red-500 ml-auto">*This is required field</span>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className='mt-4 space-y-2'>
              <span>Password</span><br />
              <div className="flex flex-col">
                <input
                  type="password"
                  placeholder='Enter your Password'
                  className='w-80 px-3 border rounded md outline-none py-1'
                  {...register("password", { required: true })}
                />
                {/* Error message for password displayed below the input */}
                {errors.password && (
                  <span className="text-sm text-red-500 ml-auto">*This is required field</span>
                )}
              </div>
            </div>

            {/* Login Button */}
            <div className='flex justify-around mt-4'>
              <button className='bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-700 duration-200' type="submit">
                Login
              </button>
              <p>Not registered?{" "} 
                <Link to="/signup" className='underline text-pink-500 cursor-pointer'>Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
