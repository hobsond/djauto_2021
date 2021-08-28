import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styled from 'styled-components'

const schema = yup.object().shape({
  name: yup.string().required(),
    email: yup.string().required('Email is necessary').email('Must be a valid email'),
  message:yup.string().required('Please include a message so we can better assist you')
});

const FormStyle = styled.form`
display: flex;
flex-direction:column ;
width:80%;
margin:0 auto;
padding-bottom: 5%;
.form_input{
  margin-bottom: 2%;
  height:4vh;
  border-radius: .4rem;
  outline: none;
  border:none;
  padding:.5rem;
  box-shadow:0 0 .1rem rgba(0,0,0,.6);
  text-align: center;
  
}
.form_textBox{
  height:20vh;
    outline: none;
  border:none;
  border-radius: .4rem;
  resize: none;
  padding:.9rem 1rem;
  box-shadow:0 0 .1rem rgba(0,0,0,.6);
    ::placeholder,
  ::-webkit-input-placeholder {
    text-align:center;
  }
  :-ms-input-placeholder {
    text-align:center;

  }
  
}
.form_Btn{
  height:7vh;
  width:80%;
  margin:0 auto;
  margin-top:5%;
  outline:none;
  border:none;
  background:darkblue;
  color:white;
  text-shadow: 0  0 .2rem rgba(0,0,0,.3);
  font-size: 3vh;
  border-radius: .4rem;
}
`
export default function Form() {
     const { register, handleSubmit,formState } = useForm({
    resolver: yupResolver(schema),
     });
    const { errors } = formState

    return (
      <FormStyle onSubmit={handleSubmit(d => console.log(d))}>
        <input placeholder='Name' className='form_input' {...register("name")} />
        <input placeholder='Email' className='form_input' type="email" {...register("email")} />
        <textarea placeholder='Send Us A Message'  className='form_textBox' type='text' {...register('message')} />
        {
            Object.values(errors).map(i => {
                return <div>
                    <p>{ i.message}</p>
                </div>
            })
        }
        <input className='form_Btn' type="submit" />
      </FormStyle>
            
    )
}
