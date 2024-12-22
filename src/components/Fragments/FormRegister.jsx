import React from 'react'
import FormInput from "@components/Elements/FormInput/index"
import Button from "@components/Elements/Button/Button"

function FormLogin() {
  return (
    <form action="">
        <FormInput
            label="Fullname"
            name="fullname"
            type="text"
            placeholder="Enter your fullname"
        />

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

        <FormInput
            label="Retype Password"
            name="retype-password"
            type="password"
            placeholder="Retype your password"
        />

        <Button style='mt-10 rounded-md w-full'>Register</Button>
    </form>
  )
}

export default FormLogin