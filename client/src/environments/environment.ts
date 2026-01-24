import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,  // version du package
  production: false,
  apiUrl: 'http://localhost:8081/api/',  // URL du backend
};
