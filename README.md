# Setting Up Default Values from an API Endpoint

```javascript
import { useForm } from 'react-hook-form';

const {
  register,
  handleSubmit,
  control,
  formState: { errors },
  watch,
} = useForm <
FormData >
{
  defaultValues: async () => {
    // Example of retrieving default values from an API endpoint
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    const data = await response.json();
    return {
      name: data.name,
      email: data.email,
      password: data.zipcode,
      confirmPassword: '',
      phone: data.phone,
    };
  },
};
```

# Sending Value as Number or Date

when dealing with input control you can after {...register(), {}}
specify some states like:

- sendAsDate: true
- sendAsNumber: true

# Getting Form Values with getValues

getValues is a method to retrieve the current values of form controls. You can specify a particular value.

# Setting Form Control Values with setValue

```javascript
setValue('controlName', newValue);
```

this method is used to update the value of a form control.
It does not affect the control state **unless** you define the third parameter, which is an object of three boolean values:

```javascript
setValue('controlName', newValue, {
  shouldValidate: true,
  shouldDirty: true,
  shouldTouched: true,
});
```

# Destructuring Additional Properties from formControl

You can destructure touchedFields, dirtyFields, and isDirty properties from formControl for additional control state information.

## Disable Submission

> You Can Disable a Submit Button based on `is Dirty || isValid` props

```javascript
disabled={!isValid || !isDirty}
```

## disable formControl

you can disable formControl by adding boolean disabled prop and

- disabled contorl will result **undefined** value
- you can disable value based on condition Ex:

```javascript
disabled: watch('anotherContol') === '';
```

## Commonly Used Properties of `formState` in React Hook Form

1. **`errors`**:

   - **Description**: An object containing validation errors for each field.
   - **Common Use Case**: Displaying error messages next to form fields based on validation rules.

2. **`isDirty`**:

   - **Description**: Indicates whether any field value has been modified.
   - **Common Use Case**: Enabling/disabling certain UI elements or triggering actions when the form state changes.

3. **`isSubmitting`**:

   - **Description**: Indicates whether the form is currently in the process of submitting.
   - **Common Use Case**: Showing loading spinners or disabling form controls during form submission.

4. **`isSubmitSuccessful`**:

   - **Description**: Indicates whether the last form submission was successful.
   - **Common Use Case**: Displaying success messages or redirecting the user after a successful form submission.

5. **`isValid`**:

   - **Description**: Indicates whether the entire form is currently valid based on the defined validation rules.
   - **Common Use Case**: Enabling/disabling the form submit button or making decisions based on the overall form validity.

6. **`submitCount`**:

   - **Description**: Number of times the form has been submitted.
   - **Common Use Case**: Tracking the number of form submission attempts for analytics or conditional rendering.

7. **`touched`**:
   - **Description**: An object tracking which fields have been touched (blurred/focused).
   - **Common Use Case**: Conditional styling or error message display based on whether a field has been interacted with.

These properties provide valuable information about the form's state, allowing you to create dynamic and responsive form behaviors. Depending on your specific requirements, you may use these properties in combination to enhance the user experience of your forms.
