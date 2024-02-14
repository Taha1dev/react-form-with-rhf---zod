/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from 'react'
import './App.css'
import { DevTool } from '@hookform/devtools'
import { UseFormRegister, useForm } from 'react-hook-form'
import FormField from './components/FormField'

export type FormFieldProps = {
  label: string;
  type: string;
  id: string;
  register: UseFormRegister<any>;
}
function App() {

  const form = useForm()
  const { register, control } = form
  const FormFields: FormFieldProps[] = [
    {
      id: 'name', label: 'name', type: 'text', register: register
    },
    {
      id: 'email', label: 'email', type: 'email', register: register
    },
    {
      id: 'password', label: 'password', type: 'password', register: register
    },
    {
      id: 'confirmPassword', label: 'confirmPassword', type: 'passowrd', register: register
    },
    {
      id: 'phone', label: 'phone', type: 'tel', register: register
    }
  ]

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(control._formValues);

  }
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md p-6 rounded shadow shadow-white">
        {FormFields.map((field: FormFieldProps) => (
          <FormField
            id={field.id}
            label={field.label}
            type={field.type}
            register={register}
            key={field.id}
          />
        ))}
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-[#141414] w-full shadow-md border border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
      <DevTool control={control} placement='bottom-right' />
    </div>
  )
}

export default App
