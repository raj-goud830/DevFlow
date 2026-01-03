'use client'

import React from 'react'
import AuthForm from '@/app/component/navigation/navbar/forms/AuthForm';
import { SignInSchema } from '@/lib/validation'; 
 const signIn = () => {
return (
<div>
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={(data) => Promise.resolve({success: true, data})}
    />
</div>
);
}
export default signIn