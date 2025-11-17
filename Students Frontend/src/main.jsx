import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from "./App.jsx"
import { store } from './app/store.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './features/Auth/login.jsx';
import Profile from './features/Auth/Profile.jsx';
import StudentTable from './features/students/StudentTable.jsx';
import AddStudent from './features/students/addStudent.jsx';
import UpdateStudent from './features/students/updateStudent.jsx';


const router = createBrowserRouter([
         {
            path:"/login",
            element:<Login></Login>
         },
         {
            path:"/profile/:username",
            element:<Profile></Profile>
         },
         {
            path:"/",
            element:<App></App>
         },
              {
                path:"/students",
                element:<StudentTable></StudentTable>
               },
               {
                 path:"/addStudent",
                 element:<AddStudent></AddStudent>
               },
               {
                  path:"/updateStudent/:id",
                  element:<UpdateStudent></UpdateStudent>
               },
       
    ]);

  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       <RouterProvider router={router}>
       </RouterProvider>
    </Provider>
     
 )


