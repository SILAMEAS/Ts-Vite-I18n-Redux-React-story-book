import axios from 'axios';
interface Type {
  username: string;
  password: string;
}
export const login = async ({username, password}: Type) => {
  try {
    const res = await axios({
      method: 'post',
      url: import.meta.env.VITE_HOST + '/login',
      data: {
        email: username,
        password,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
