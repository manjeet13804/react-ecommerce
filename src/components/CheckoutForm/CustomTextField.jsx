import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;
  return (
    <div>
      <Controller
      
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
        render={({ field }) => (
          <input onChange={(e) => field.onChange(e.target.value)}value={(field.value)}/>
        )}
      />
    </div>
  );
}

export default FormInput;
