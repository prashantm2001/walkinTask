import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './screens/App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostPage from './screens/post/Post.tsx';
import Login from './screens/login/Login.tsx';
import Success from './screens/success/Success.tsx';
import Personal from './screens/registration/Personal.tsx';
import Qualification from './screens/registration/Qualifications.tsx';
import Review from './screens/registration/Review.tsx';
import Error from './screens/Error/Error.tsx';
import Registration from './screens/registration/Registration.tsx';
import List from './screens/List/List.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
          path: "/",
          element: <List />,
        },
        {
          path: "/post",
          element: <PostPage />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path:"/success",
          element: <Success />,
        },
        {
          path: "/register/",
          element: <Registration />,
          children: [
            {
              path: "personal",
              element: <Personal />,
            },
            {
              path: "qualification",
              element: <Qualification />,
            },
            {
              path: "review",
              element: <Review />,
            }
          ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
