import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import NotFound404 from '@/pages/NotFound404';

import {Constant} from '@/constant/Constant';

import ChangeMode from './pages/changeMode/ChangeMode';
import Login from './pages/form/login/Login';
import HomeUser from './pages/users/HomeUser';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <ChangeMode />,
      },
      {
        path: Constant.LOGIN,
        element: <Login />,
      },
      {
        path: Constant.HOME,
        element: <HomeUser />,
      },
    ],
  },
]);
