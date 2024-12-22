import React from 'react'

function Input(props) {
    const {name, type, placeholder, color = 'blue', textColor = 'slate-700'} = props;

    return (
        <input 
            type={type} 
            className={`text-sm border rounded w-full py-2 px-3 text-${textColor} placeholder:opacity-50 focus:ring-1 ring-${color}-500`}
            placeholder={placeholder}
            name={name}
            id={name}
        />
    )
}

export default Input