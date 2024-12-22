import React from 'react'
import AuthLayout from '@components/Layouts/AuthLayout'
import FormLogin from '@components/Fragments/FormLogin'

function LoginPage() {
  return (
    <AuthLayout
      description="Welcome, Please enter your detail" 
      title="Login"
    >
      <FormLogin/>
    </AuthLayout>
  )
}

export default LoginPage