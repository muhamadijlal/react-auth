import React from 'react';
import Label from '@components/Elements/FormInput/label';
import Input from '@components/Elements/FormInput/input';

function FormInput(props) {
    const {label, name, type, placeholder} = props;

    return (
        <div className='space-y-1 mb-5'>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} id={name} />
        </div>
    )
}

export default FormInput