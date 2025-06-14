import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, watch, setError, formState: { errors, isSubmitting } } = useForm();
  // const delay=(d)=>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       resolve()
  //     }, d*1000);
  //   })
  // }
  const onSubmit = async (data) => {
    // await delay(1)
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let result = await r.text()
    console.log(data, result);
    // if(data.username!="Soumi"){
    //   setError("myform",{message:"user is invalid"})
    // }
    // if(data.password!=123456){
    //   setError("passworderror",{message:"password is incorrect"})
    // }
  }
  return (
    <>
      {isSubmitting && <div>Loading.....</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' {...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 20, message: "maxlength is 20" } })} type="text" />
        <br />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        {/* it shows error in user name if minlength maxlength r required doesnot meet its value */}
        <input placeholder='password'{...register("password", { required: { value: true, message: "this field is required", } })} type="password" />
        {/* register connets the input with form like if input is not valid it did not let the form submitted*/}
        {errors.password && <div className='red'>{errors.password.message}</div>}
        {/* it shows the error in password */}
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
        {errors.passworderror && <div className='red'>{errors.passworderror.message}</div>}

      </form>
    </>
  )
}

export default App
