import Login from "../pages/login"
import Layout from "../pages/layout"
import menuRoute from './menuRoute'

const routes = [
  {
    path: '/',
    element: <Layout />,
    menu: false,
    children: menuRoute
  },
  {
    path: '/login',
    menu: false,
    element: <Login />,
  }
]

export default routes