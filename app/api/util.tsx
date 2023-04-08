
import config from '../../config';
import packageJson from '../../package.json';

export const fetchData = async (path: string, method: string, mode: RequestMode = 'cors') => {
  const url = `${config.baseURL}/${config.env}/${packageJson.name}/${path}`;
  const headers: { [key: string]: string } = {
    'Accept': 'application/json',
  };
  
  if (process.env.AWS_API_KEY_TEST) {headers['x-api-key'] = '2J5dJvLel92IFOhH6qRlM7lXGQuIA4FB4oEq9Ptr';}
  
  const response = await fetch(url, { headers, method, mode });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
