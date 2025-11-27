import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './Pages/MasterLayout/MasterLayout'
import How from './Components/How/How'
import Why from './Components/Why/Why'
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
      {path:"how",element:<How/>},
      {path:"why",element:<Why/>},
      {path:"cars",element:<Cars/>},
      {path:"car/:id",element:<CarDetails/>},
    ]
  }
 ])
  return (
    <>
  <RouterProvider router={routes}></RouterProvider>
    {/* <Home/> */}
    </>
  )
}

export default App
