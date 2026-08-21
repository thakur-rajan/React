import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import './form.css'
import formSchema from "./FormValidation";

export default function Form(){
      const {register,handleSubmit,formState:{errors}}=useForm(
        {
            resolver:zodResolver(formSchema)
        }
      );
      function submit(data){
         console.log(data);
      }
      console.log('render')

    return(
        <>
         <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
               <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" {...register("username")} />
                {errors.username && <span>{errors.username.message}</span> }
               </div>               
                <div>
                <label htmlFor="password">Password: </label>              
                <input type="password" id="password" {...register("password")} />
                {
                errors.password && <span>{errors.password.message}</span>
                }
                </div>
                <div>
                    <label htmlFor="password">Confrim Password: </label>
                    <input type="password" id="password" {...register("confirm")} />
                    {errors.confirm && <span>{errors.confirm.message}</span>}
                </div>
                 <button >Submit</button>
            </form>
         </div>
        </>
    )
}