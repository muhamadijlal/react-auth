import React from 'react'
import FormInput from "@components/Elements/FormInput/index"
import Button from "@components/Elements/Button/Button"

function FormLogin() {
  return (
    <form action="">
        <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="example@yourmail.com"
        />

        <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
        />

        <Button style='mt-10 rounded-md w-full'>Login</Button>
    </form>
  )
}

export default FormLogin