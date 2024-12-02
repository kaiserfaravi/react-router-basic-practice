import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Aboutus from './Components/Aboutus/Aboutus.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import Singleuserdetails from './Components/Singleuserdetails/Singleuserdetails.jsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<Aboutus></Aboutus>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader :()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path:'user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        
        element:<Singleuserdetails></Singleuserdetails>
      },
      {
        path:'users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        
        element:<Singleuserdetails></Singleuserdetails>
      }
    ]
  },
  {
    path:"/ojana",
    element:<div>ojanar pothe harai gelam</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
