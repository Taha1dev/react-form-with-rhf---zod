import { SubmitHandler, useForm } from "react-hook-form";
import Back from "../components/Back";
import { DevTool } from "@hookform/devtools";
import { FormEvent, useState } from "react";


interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
const StaticForm = () => {
  const [formValue, setFormValue] = useState<object | string | null>({})
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data, e: FormEvent) => {
    e.preventDefault()
    setFormValue(data)
    console.log(data);
  };

  return <div className="flex items-center gap-4 ms-4 mt-4">
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 rounded shadow shadow-white" noValidate>
      <div className="mb-4">
        <label htmlFor="name" className="block text-white text-lg font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="appearance-none border rounded w-full py-2 px-3 leading-tight bg-[#252525] text-white focus:outline-none focus:shadow-outline"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-lg font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
          className="appearance-none border rounded w-full py-2 px-3 leading-tight bg-[#252525] text-white focus:outline-none focus:shadow-outline"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-white text-lg font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
          className="appearance-none border rounded w-full py-2 px-3 leading-tight bg-[#252525] text-white focus:outline-none focus:shadow-outline"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-white text-lg font-bold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: (value) => value === watch('password') || 'Passwords do not match',
          })}
          className="appearance-none border rounded w-full py-2 px-3 leading-tight bg-[#252525] text-white focus:outline-none focus:shadow-outline"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-white text-lg font-bold mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Phone is required' })}
          className="appearance-none border rounded w-full py-2 px-3 leading-tight bg-[#252525] text-white focus:outline-none focus:shadow-outline"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div className="flex items-center justify-center">
        <button type="submit" className="bg-[#141414] w-full shadow-md border border-white  hover:border-rose-500 hover:bg-rose-500 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </div>
    </form>
    <DevTool control={control} placement='bottom-right' />
    <div className="absolute top-3 right-96">
      <Back />
    </div>
    <div className="flex h-full w-96">
      <pre style={{ color: '#FFF' }}>
        {formValue && JSON.stringify(formValue)}
      </pre>
    </div>
  </div>;
};
export default StaticForm;



