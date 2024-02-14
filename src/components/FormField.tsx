import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  type: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>; // Use a more specific type if possible
}

const FormField: React.FC<FormFieldProps> = ({ label, type, id, register }) => {
  return (
    <div className="mb-4 flex flex-col items-start">
      <label htmlFor={id} className="block text-white text-lg font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)} // Register the input using the field's ID
        className="appearance-none border rounded w-full py-2 px-3 leading-tight bg-[#252525] text-white focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default FormField;
