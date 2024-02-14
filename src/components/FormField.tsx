/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  type: string;
  id: string;
  register: UseFormRegister<any>;
  required?: boolean;
  formState?: {
    errors: Record<string, any>;
  };
}

const FormField: React.FC<FormFieldProps> = ({ label, type, id, register, required, formState }) => {
  return (
    <div className="mb-4 flex flex-col items-start">
      <label htmlFor={id} className="block text-white text-lg font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id, { required })}
        className="appearance-none border rounded w-full py-2 px-3 leading-tight bg-[#252525] text-white focus:outline-none focus:shadow-outline"
      />
      {required && formState.errors[id] && (
        <span className="text-red-500 text-sm">
          {formState.errors[id].type === 'required' && 'This field is required'}
        </span>
      )}
    </div>
  );
};

export default FormField;
