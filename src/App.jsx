import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import CreateJobForm from "./Pages/CreateJobForm"

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
