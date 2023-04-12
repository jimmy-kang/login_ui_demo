import React from 'react'

interface IProps {
  text: string | JSX.Element
}

const FormCheckbox = ({ text }: IProps): JSX.Element => {
  return (
    <div className="slm-flex slm-items-center slm-gap-x-2">
      <div className="">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" />
      </div>
      <p className="slm-text-13px slm-text-gray-base font__base">{text}</p>
    </div>
  )
}

export default FormCheckbox
