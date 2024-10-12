import React from 'react'
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);  // This will log the email and password to the console
  };

  return (
    <div className='flex h-screen items-center justify-center '>
       <div className="w-[600px]">
  <div className="modal-box ">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to = '/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Sign up</h3>
    {/*Name*/}
    <div className='mt-4 space-y-2'>
      <span>Name</span><br/>
      <div className="flex flex-col">
      <input type="text" placeholder='Enter your Full Name' 
      className='w-80 px-3 border rounded md outline-none px-3 py-1'
      {...register("name", { required: true })}
      />
      {/* Error message for password displayed below the input */}
      {errors.name && (
                  <span className="text-sm text-red-500 ml-auto">*This is required field</span>
                )}
              </div>
    </div>

    {/*Email*/}
    <div className='mt-4 space-y-2'>
      <span>Email</span><br/>
      <div className="flex flex-col">
      <input type="email" placeholder='Enter your Email' 
      className='w-80 px-3 border rounded md outline-none px-3 py-1'
      {...register("email", { required: true })}
      />
       {/* Error message for email displayed below the input */}
       {errors.email && (
                  <span className="text-sm text-red-500 ml-auto">*This is required field</span>
                )}
              </div>
    </div>

     {/*Password*/}
     <div className='mt-4 space-y-2'>
      <span>Password</span><br/>
      <div className="flex flex-col">
      <input type="text" placeholder='Enter your Password' 
      className='w-80 px-3 border rounded md outline-none px-3 py-1'
      {...register("password", { required: true })}
      />
       {/* Error message for password displayed below the input */}
       {errors.password && (
                  <span className="text-sm text-red-500 ml-auto">*This is required field</span>
                )}
              </div>
    </div>

    {/*Button*/}
    <div className='flex justify-around mt-4'>
      <button className='bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-700 duration-200'>Sign up</button>
      <p className='text-xl'>Have Account?{" "} <button to="/" className='underline text-pink-500 cursor pointer'
      onClick={()=>document.getElementById("my_modal_3").showModal()
      }>
      Login</button>{" "}
      <Login />
      </p>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup
