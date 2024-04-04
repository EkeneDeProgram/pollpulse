import React from 'react'

const Input = ({ onBlur, onChange, type, name, placeholder, data }) => {
  return (
    <input {...data} placeholder={placeholder || ""} className='border focus:outline-none rounded-xl p-2 lg:p-3' id={name} type={type || "text"} onBlur={(e) => onBlur(e)} onChange={e => onChange(e)} />
  )
}

export default Input