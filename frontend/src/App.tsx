
import { useForm } from 'react-hook-form';
import './App.css'
import { CheckBox, Dropdown, InputField, TextareaField, ToggleSwitch } from './components/FormComponent';
import { useState } from 'react';

//sample type
type inputValue = {
  firstname: string;
  comment : string,
  switch : boolean,
  subscribe : boolean,
  country : string,
}

function App() {

  const {register, handleSubmit} = useForm<inputValue>();

  const onSubmit = (data: inputValue ) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField 
        label='First Name: '
        {...register('firstname')}
      />
      <TextareaField 
        label='comments'
        {...register('comment')}
      />
      <CheckBox 
        label='Check me Plss: '
        {...register('switch')}
        type='checkbox'
      />
      <ToggleSwitch 
      label="Subscribe to newsletter"
      {...register('subscribe')}
      />

      <Dropdown
        label="Country"
        options={[
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'uk', label: 'United Kingdom' },
        ]}
        {...register('country', { required: true })}
      />
      
      <button type='submit' className='bg-[#25258a] text-[#e3e3e3] px-4 py-1 rounded-full border border-[#25258a] ml-4'>Try Me</button>

    </form>

    
  )
}

export default App
