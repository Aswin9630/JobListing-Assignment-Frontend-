import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import CreateJobForm from "./Pages/CreateJobForm"
import JobDetails from "./Pages/JobDetails"
import AboutUs from "./Pages/AboutUs"
import Testimonials from "./Pages/Testimonials"

function App() {
  
  const AppLayout = ()=>{
    return(
      <div>
        <Outlet/>
      </div>
    )
  }


  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/createJob",
          element:<CreateJobForm />
        },
        {
          path:"/jobs/view/:id",
          element:<JobDetails />
        },
        {
          path:"/aboutus",
          element:<AboutUs />
        },
        {
          path:"/testimonials",
          element:<Testimonials />
        },
      ]

    }
  ])

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
