import { Route, Routes } from 'react-router-dom' // Routes instead of "Switch"
import LoginPage from 'pages/Login'

const PagesRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default PagesRoutes
