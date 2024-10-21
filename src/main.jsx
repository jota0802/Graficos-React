import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home'
import Error from './routes//Error/Error'
import Grafico from './routes/Grafico/Grafico.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter ([{

  pat:'/', element:<App/>,
  errorElement:<Error/>,

  children:[
    {path:'/',element:<Home/>},
    {path:'/grafico',element:<Grafico/>}
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
