import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Layout from "../components/layout/Layout"
import DashboardPage from "../pages/DashboardPage"
import LoginPage from "../pages/LoginPage"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        index:true,
        element:<DashboardPage />
      },{
        path:"login",
        element:<LoginPage />
      }

    ]
  }
])
function AppRoutes() {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes
