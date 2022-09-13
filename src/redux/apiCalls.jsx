import axios from "axios";

import {
  loginStart,
  loginSuccess,
  loginError,
  updateUser,
  deleteUser,
} from "./userSlice";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    //console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginError());
    console.log(err);
  }
};

export const update = async (user, id, dispatch) => {
  try {
    const res = await axios.put(
      "http://localhost:5000/api/user/update/" + id,
      user
    );
    dispatch(updateUser(res.data));
    //console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const deleteMyUser = async (id, dispatch) => {
  try {
    await axios.delete("http://localhost:5000/api/user/delete/" + id, {
      data: { id },
    });
    dispatch(deleteUser());
  } catch (err) {
    console.log(err);
  }
};
