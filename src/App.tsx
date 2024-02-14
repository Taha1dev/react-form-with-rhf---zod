/* eslint-disable @typescript-eslint/no-explicit-any */
import { DevTool } from '@hookform/devtools'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormField, { FormFieldProps } from './components/FormField'


function App() {
  type FormValues = {
    name: string, email: string, password: string, confirmPassword: string, phone: string
  }
  const form = useForm<FormValues>()
  const { register, control, handleSubmit, formState } = form
  const FormFields: FormFieldProps[] = [
    {
      id: 'name', label: 'name', type: 'text', register: register, required: true
    },
    {
      id: 'email', label: 'email', type: 'email', register: register, required: true
    },
    {
      id: 'password', label: 'password', type: 'password', register: register, required: true
    },
    {
      id: 'confirmPassword', label: 'confirmPassword', type: 'passowrd', register: register, required: true
    },
    {
      id: 'phone', label: 'phone', type: 'tel', register: register, required: true
    }
  ]
  const handleFormSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <div className="flex items-center ms-4 mt-4">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full max-w-md p-6 rounded shadow shadow-white">
        {FormFields.map((field: FormFieldProps) => (
          <FormField
            id={field.id}
            label={field.label}
            type={field.type}
            register={register}
            formState={formState}
            required={field.required}
            key={field.id}
          />
        ))}
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-[#141414] w-full shadow-md border border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
      <div>

        <DevTool control={control} placement='bottom-right' />
      </div>
    </div>
  )
}

export default App
