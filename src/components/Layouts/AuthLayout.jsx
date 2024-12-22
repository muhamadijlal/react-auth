import React from 'react'

function AuthLayout(props) {
  const {children, description, title} = props;

  return (
    <div className="min-h-screen place-items-center grid lg:grid-cols-2">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2 text-gradient">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          {description}
        </p>
        {children}
      </div>

      <div className='size-full hidden lg:block color-gradient'></div>
    </div>
  )
}

export default AuthLayout