import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'

interface IProps {
  title: string
  name: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ title, name, type = 'text', onChange }: IProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className="slm-relative slm-w-full slm-h-full slm-px-3 slm-py-1 slm-bg-blue-light slm-rounded slm-leading-none slm-gap-0.5"
    >
      <label className="slm-text-xs slm-text-gray-base slm-w-full slm-flex font__base">{title}</label>
      <input
        className="slm-bg-transparent slm-border-none slm-padding-0 slm-outline-0 slm-text-sm font__base slm-w-full"
        type={showPassword ? 'text' : type}
        id={name}
        name={name}
        onChange={onChange}
      />
      {type === 'password' && (
        <button
          className="slm-absolute slm-right-4 slm-top-0 slm-bottom-0"
          onClick={() => {
            setShowPassword(!showPassword)
          }}
        >
          <BsEye style={{ color: showPassword ? '#3C71FF' : '#757575' }}/>
        </button>
      )}
    </div>
  )
}

export default FormInput
