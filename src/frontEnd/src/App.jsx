import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Registration from './pages/Registration'
import Success from "./components/Success"
import UpComingElection from './components/UpComingElection'

function App() {

  const router = createBrowserRouter([
    {
      path: "/onboarding", children: [
        {
          path: "registration", element: <Registration />
        }
      ]
    },
    {
      path: "/success", element: <Success />
    },
    {
      path: "/upcommingelections", element: <UpComingElection />
    }
  ])


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
