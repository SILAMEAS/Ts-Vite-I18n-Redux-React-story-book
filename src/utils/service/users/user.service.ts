import axios from 'axios';
import {typeUserLogin, typeUserRegister} from './type.user.service';
import {headerConfig} from '../config.service/config.file';

export const userSevice = {
  login: async ({username, password}: typeUserLogin) => {
    try {
      const res = await axios({
        method: 'post',
        url: import.meta.env.VITE_HOST + '/user/login',
        data: {
          email: username,
          password,
        },
        headers: {...headerConfig},
      });
      return res.data;
    } catch (error) {
      return error;
    }
  },
  register: async ({image, email, password, name}: typeUserRegister) => {
    try {
      const res = await axios({
        method: 'post',
        url: import.meta.env.VITE_HOST + '/user/register',
        data: {
          image,
          email,
          password,
          name,
        },
        headers: {...headerConfig},
      });
      return res.data;
    } catch (error) {
      return error;
    }
  },
  getUsers: async () => {
    try {
      const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_HOST + '/user/all',
        headers: {...headerConfig},
      });
      return res.data;
    } catch (error) {
      return error;
    }
  },
};
