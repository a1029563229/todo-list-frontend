import { v4 as uuid } from "uuid";

const getUserKey = () => {
  if (localStorage.getItem('user_key')) return localStorage.getItem('user_key');

  const userKey = uuid();
  localStorage.setItem('user_key', userKey);
  return userKey;
}

export {
  getUserKey
}