const convertToBoolean = (string: string | null): boolean => {
  return string === 'true';

};

const isAuthenticated = (): boolean => convertToBoolean(localStorage.getItem('isAuthenticated'));

const enableIsAuthenticated = (): void => localStorage.setItem('isAuthenticated', 'true');

const saveToken = (token: string): void => localStorage.setItem('token', token);

const getToken = (): string | null => localStorage.getItem('token');

const removeToken = (): void => localStorage.setItem('token', '');

const disableIsAuthenticated = (): void => localStorage.setItem('isAuthenticated', 'false');

export {
  isAuthenticated,
  enableIsAuthenticated,
  saveToken,
  getToken,
  removeToken,
  disableIsAuthenticated,
};
