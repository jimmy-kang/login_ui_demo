import React, { useEffect } from 'react'
import './styles.css'
import PagesRoutes from './PagesRoutes'

export const App = (): JSX.Element => {
  return (
    <div className="slm-h-full slm-w-full slm-flex">
      <PagesRoutes />
    </div>
  )
}
