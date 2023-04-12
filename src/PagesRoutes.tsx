import { Route, Routes } from 'react-router-dom' // Routes instead of "Switch"
import LoginPage from 'pages/Login'

const PagesRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  )
}

export default PagesRoutes
