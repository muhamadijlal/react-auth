import React from 'react'
import AuthLayout from '@components/Layouts/AuthLayout'
import FormRegister from '@components/Fragments/FormRegister'

function Register() {
  return (
    <AuthLayout
        description="Welcome, Please regsiter your account" 
        title="Register"
    >
        <FormRegister/>
    </AuthLayout>
  )
}

export default Register