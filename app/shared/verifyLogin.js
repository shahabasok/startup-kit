import asyncStorageFunction from './asyncStorage.lib';

export const verifyLogin = async () => {
  let isAlreadyLoggedIn = await asyncStorageFunction.retrieveData('token');

  if (isAlreadyLoggedIn == false) {
    return false;
  } else {
    return true;
  }
};
