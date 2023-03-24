import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import NotFound404 from '@/pages/NotFound404';
import Login from './pages/login/Login';
import {Constant} from '@/constant/Constant';
import ChangeMode from './pages/changeMode/ChangeMode';

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
    ],
  },
]);
