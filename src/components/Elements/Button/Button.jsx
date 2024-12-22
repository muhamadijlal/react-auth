import React from 'react'

function Button(props) {
    const {children, style} = props;

    return (
        <button
            type="button"
            className={`text-white color-gradient py-2 font-medium ${style}`}
        >
            {children}
        </button>
    )
}

export default Button