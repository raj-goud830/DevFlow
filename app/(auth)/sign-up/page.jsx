'use client'

import React from 'react'
import AuthForm from '@/app/component/navigation/navbar/forms/AuthForm';
import { SignUpSchema } from '@/lib/validation'; 
 const signUp = () => {
return (
<div>
 <AuthForm
       formType="SIGN_UP"
       schema={SignUpSchema}
       defaultValues={{ email: '', password: '', name:'', username: '' }}
       onSubmit={(data) => Promise.resolve({success: true, data})}
     />
</div>
);
}
export default signUp