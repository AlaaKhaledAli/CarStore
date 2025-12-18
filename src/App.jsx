import './App.css'
import Home from './Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './Pages/MasterLayout/MasterLayout'
import Cars from './Pages/Cars/Cars'
import CarDetails from './Pages/CarDetails/CarDetails'


function App() {
 let routes=createBrowserRouter([
  {
    path:"/",
    element:<MasterLayout/>,
    // errorElement:<h1>Not found<h1/>, 
    children:[
      {index:true,element:<Home/>},
      {path:"home",element:<Home/>},
      {path:"cars",element:<Cars/>},
      {path:"car/:id",element:<CarDetails/>},
    ]
  }
 ],
   {
    basename: "/CarStore/",
  }
)
  return (
    <>
  <RouterProvider router={routes}>
  </RouterProvider>
    </>
  )
}

export default App
