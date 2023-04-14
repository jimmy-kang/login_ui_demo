/* eslint-disable multiline-ternary */
import React from 'react'
import styled from 'styled-components'

const CheckboxStyle = styled.div`
  .container {
    position: relative;
    height: 18px;
    width: 18px;

    .show-box-base {
      width: 18px;
      height: 18px;
      border-radius: 2px;
      background: #ababab;
    }

    .show-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      border-radius: 2px;
      border: 1px solid #3c71ff;
      background: white;
      pointer-events: none;
      z-index: 0;
    }

    input[type='checkbox'] {
      position: absolute;
      height: 18px;
      width: 18px;
      z-index: 2;
      opacity: 0;
      cursor: pointer;
    }

    .show-box:before {
      content: ' ';
      position: absolute;
      top: 2px;
      left: 5px;
      width: 6px;
      height: 10px;
      border: solid #3c71ff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`

interface IProps {
  onChange: () => void
  isChecked: boolean
}

const Checkbox = ({ onChange, isChecked }: IProps): JSX.Element => {
  return (
    <CheckboxStyle>
      <div className="container">
        <input className="checkbox" type="checkbox" onChange={onChange} />
        {isChecked ? (
          <div className="show-box" />
        ) : (
          <div className="show-box-base" />
        )}
      </div>
    </CheckboxStyle>
  )
}

export default Checkbox
