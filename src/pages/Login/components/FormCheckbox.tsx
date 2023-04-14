import React from 'react'
import Checkbox from './Checkbox'
interface IProps {
  text: string | JSX.Element
  onChange: () => void
  isChecked: boolean
}

const FormCheckbox = ({ text, isChecked, onChange }: IProps): JSX.Element => {
  return (
    <div className="slm-flex slm-items-center slm-gap-x-2">
      <Checkbox onChange={onChange} isChecked={isChecked} />
      <p className="slm-text-13px slm-text-gray-base font__normal">{text}</p>
    </div>
  )
}

export default FormCheckbox
