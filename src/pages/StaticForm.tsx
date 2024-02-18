/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm, useFieldArray, FieldErrors } from "react-hook-form";
import Back from "../components/Back";
import { DevTool } from "@hookform/devtools";
import { FormEvent, useEffect } from "react";
type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string[];
  social: {
    twitter: string
    facebook: string
  }
  locations: { location: string }[]
}
const StaticForm = () => {
  let count = 0
  // const [formValue, setFormValue] = useState<object | string | null>({})
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful, isDirty, isSubmitted, isSubmitting, isValid },
    watch,
    getValues,

  } = useForm<FormData>({
    defaultValues: {
      name: "Taha",
      email: "taha.bus11@gmail.com  ",
      password: "123123123",
      confirmPassword: "123123123",
      phone: ["123", "456"],
      social: {
        twitter: "tw",
        facebook: "fc"
      },
      locations: [{ location: "" }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "locations",
    control,
  })
  const onSubmit: SubmitHandler<FormData> = (data, e: FormEvent) => {
    e.preventDefault();
    console.log(getValues());
  };
  const onError = (errors: FieldErrors<FormData>) => {
    console.log("Form Errors is", errors);
    return errors
  }
  useEffect(() => {
    console.group()
    console.log("isSubmitSuccessful", isSubmitSuccessful);
    console.log("isSubmitting", isSubmitting,);
    console.log("isValid", isValid);
    console.log("isDirty", isDirty,);
    console.log("isSubmitted", isSubmitted,);
    console.groupEnd()
    console.log("#".repeat(10))
  }, [isSubmitSuccessful, isDirty, isSubmitted, isSubmitting, isValid])

  count++
  return (
    <div className="flex items-center gap-4 ms-4 mt-4">
      <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full max-w-md p-6 rounded shadow shadow-white" noValidate>
        <h1 className="text-2xl font-bold text-center text-white">Render Count is: {count}</h1>
        <div className="mb-4">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="input inp"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
            className="input inp"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            className="input inp"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) => value === watch('password') || 'Passwords do not match',
            })}
            className="input inp"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone-1" className="label">
            Phone-1
          </label>
          <input
            type="tel"
            id="phone-1"
            {...register('phone.0', { required: 'Phone-1 is required' })}
            className="input inp"
          />
          {errors?.phone && <p className="text-red-500 text-sm mt-1">{errors?.phone[0]?.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone-2" className="label">
            Phone-2
          </label>
          <input
            type="tel"
            id="phone-2"
            {...register('phone.1', { required: 'Phone-2 is required' })}
            className="input inp"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors?.phone[1]?.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="twitter" className="label">
            twitter
          </label>
          <input
            type="text"
            id="twitter"
            {...register('social.twitter', {
              required: {
                message: 'twitter is required'
                , value: true
              }
            })}
            className="input inp"
          />
          {errors?.social?.twitter?.message && <p className="text-red-500 text-sm mt-1">{errors?.social?.twitter?.message}</p>}
        </div>

        <div className="mb-4">

          {fields.map((field, index) => {
            return <div className="flex flex-col gap-3" key={field.id}>
              <label className="label" htmlFor={`locations.${index}.location`}> Location {index + 1}</label>
              <input type="text" className="input inp" {...register(`locations.${index}.location` as const)} />
              {index > 0 && (
                <button className="btn-dander" type="button" onClick={() => { remove(index) }}>Remove Item</button>
              )}
            </div>

          })}
          <button className="button" type="button" onClick={() => { append({ location: "" }) }}>Add New Location </button>
        </div>

        <div className="flex items-center justify-center">
          <button type="submit" className="button btn">
            Submit
          </button>
        </div>
      </form>
      <DevTool control={control} placement='bottom-right' />
      <div className="absolute top-3 right-96">
        <Back />
      </div>
      {/* 
    <div className="flex h-full w-96">
      <pre style={{ color: '#FFF' }}>
        {formValue && JSON.stringify(formValue)}
      </pre>
    </div> 
    */}
    </div>
  )

};
export default StaticForm;



