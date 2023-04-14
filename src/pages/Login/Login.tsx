import React, { useState } from 'react'
import { LoginStyle } from './style'
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import SignUpButton from './components/SignUpButton'
import FormInput from './components/FormInput'
import FormCheckbox from './components/FormCheckbox'

const LoginPage = (): JSX.Element => {
  const [isLengthFormat, setLengthFormat] = useState(false)
  const [isNumberFormat, setNumberFormat] = useState(false)
  const [isChecked, setChecked] = useState(false)

  const checkPasswordFormat = (val: string): void => {
    const is8digits = val.length >= 8
    if (is8digits !== isLengthFormat) {
      setLengthFormat(is8digits)
    }

    if (/\d+.*/.test(val)) {
      setNumberFormat(true)
    } else {
      setNumberFormat(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const data = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    }
    console.log('data', data)
  }

  return (
    <div className="slm-w-full slm-h-full slm-bg-blue-light slm-flex slm-items-center slm-justify-center">
      <LoginStyle className="slm-bg-white slm-rounded slm-p-6">
        <div className="slm-flex slm-items-center slm-mb-8">
          <BsArrowLeft />
          <span className="slm-text-sm slm-ml-2">Back</span>
        </div>
        <div className="login__content slm-m-auto">
          <div className="slm-text-lg slm-mb-2 font__base">Start from free</div>
          <div className="slm-text-3xl slm-mb-4 slm-font-bold font__normal">
            Create an account
          </div>
          <div className="slm-flex slm-justify-between slm-mb-4">
            <div className="slm-w-190px slm-h-12">
              <SignUpButton iconName={FaGoogle} text="Sign up with Google" />
            </div>
            <div className="slm-w-190px slm-h-12">
              <SignUpButton
                iconName={FaFacebookF}
                text="Sign up with Facebook"
              />
            </div>
          </div>
          <div className="slm-text-sm slm-flex slm-items-center slm-mb-6">
            <span className="slm-mr-2 font__base">
              Or use your email for registration
            </span>
            <div className="slm-h-px slm-w-182px slm-bg-black"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="slm-flex slm-justify-between slm-mb-4">
              <div className="slm-w-190px slm-h-12">
                <FormInput title="First Name" name="firstName" />
              </div>
              <div className="slm-w-190px slm-h-12">
                <FormInput title="Last Name" name="lastName" />
              </div>
            </div>
            <div className="slm-w-full slm-h-12 slm-mb-4">
              <FormInput title="E-mail" name="email" type="email" />
            </div>
            <div className="slm-w-full slm-h-12 slm-mb-2">
              <FormInput
                title="Password"
                name="password"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  checkPasswordFormat(e.target.value)
                }}
              />
            </div>
            <div className="slm-flex slm-flex-col slm-gap-6">
              <div className="slm-flex slm-gap-x-1">
                <div className="slm-flex slm-items-center">
                  <BsCheckCircleFill
                    style={{
                      fontSize: '11px',
                      color: isLengthFormat ? '#4AE7A5' : '#ABABAB',
                    }}
                  />
                  <p
                    className={`slm-text-xs slm-scale-sm ${
                      isLengthFormat ? 'black' : 'slm-text-gray-p1'
                    }`}
                  >
                    8 Characters min.
                  </p>
                </div>
                <div className="slm-flex slm-items-center">
                  <BsCheckCircleFill
                    style={{
                      fontSize: '11px',
                      color: isNumberFormat ? '#4AE7A5' : '#ABABAB',
                    }}
                  />
                  <p
                    className={`slm-text-xs slm-scale-sm ${
                      isNumberFormat ? 'black' : 'slm-text-gray-p1'
                    }`}
                  >
                    One number
                  </p>
                </div>
              </div>
              <div className="slm-grid slm-gap-y-6">
                <FormCheckbox
                  text="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings."
                  onChange={() => {
                    setChecked(!isChecked)
                  }}
                  isChecked={isChecked}
                />
                <button
                  className="slm-w-full slm-h-12 slm-rounded slm-bg-blue-base slm-text-white slm-text-sm font__base"
                  type="submit"
                >
                  Create an Free Account!
                </button>
              </div>
            </div>
            <div className="slm-mt-4 slm-text-13px slm-flex slm-justify-center slm-gap-x-1 font__base">
              <span className="slm-text-gray-base">
                Already have an account?
              </span>
              <button className="slm-text-blue-base">Log in</button>
            </div>
          </form>
        </div>
      </LoginStyle>
    </div>
  )
}

export default LoginPage
