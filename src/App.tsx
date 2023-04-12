import React, { useEffect } from 'react'
import './styles.css'
import PagesRoutes from './PagesRoutes'
import { useNavigate } from 'react-router-dom'

export const App = (): JSX.Element => {
  const history = useNavigate()

  useEffect(() => {
    history('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="slm-h-full slm-w-full slm-flex">
      <PagesRoutes />
    </div>
  )
}
