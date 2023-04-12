import React, { useState } from 'react'
import { IconType } from 'react-icons'

interface IProps {
  text: string
  iconName: IconType
}

const SignUpButton = ({ text, iconName }: IProps): JSX.Element => {
  const [isIconHover, setIconHover] = useState<boolean>(false)

  const Icon = iconName

  return (
    <button
      className={`slm-w-full slm-h-full slm-flex slm-items-center slm-px-3 slm-rounded slm-border slm-border-solid slm-border-blue-base ${isIconHover ? 'slm-bg-blue-base' : 'slm-bg-white'}`}
      onMouseEnter={() => {
        setIconHover(true)
      }}
      onMouseLeave={() => {
        setIconHover(false)
      }}
    >
      <Icon style={{ color: isIconHover ? 'white' : '3C71FF' }} />
      <div className={`slm-w-sign_up_width slm-text-13px font__base ${isIconHover ? 'slm-text-white' : 'slm-text-black'}`}>{text}</div>
    </button>
  )
}

export default SignUpButton
