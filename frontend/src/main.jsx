// import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {GoogleOAuthProvider } from '@react-oauth/google'
import OwnerRouter from './Routers/ownerRouter.jsx'
import UserRouter from './Routers/userRouter.jsx'
import AdminRouter from './Routers/AdminRouter.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      
      <Route  index={true} path='/' element={<UserRouter/>} />

      <Route  index={true} path='/*' element={<UserRouter/>} />
 
      <Route path='/owner/*' element={<OwnerRouter/>} />

      <Route path='/admin/*' element={<AdminRouter/>} />
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='539523103494-87vujfafl05jbe8cpdqlsdt4hatg2msm.apps.googleusercontent.com'>
  <Provider store={store}>
  {/* <React.StrictMode> */}
    
  <RouterProvider router={router}/>
  {/* </React.StrictMode>, */}
  </Provider>
  </GoogleOAuthProvider>
)
