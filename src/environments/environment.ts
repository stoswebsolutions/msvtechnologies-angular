export interface Environment {
  production: boolean;
  appName: string;
  apiBaseUrl: string;
  publicBaseUrl: string;
  version: string;
}

export const environment: Environment = {
  production: false,
  appName: 'MSV Tech',
  apiBaseUrl: 'http://localhost:4200/',
  publicBaseUrl: 'http://localhost:4200/',
  version: '1.0.0',
};
