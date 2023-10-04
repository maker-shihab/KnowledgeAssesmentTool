import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './routes/contact';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  }, {
    path: "/login",
    element: <Login />,
  }, {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

const App = () => {
  
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;