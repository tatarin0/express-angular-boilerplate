import { udeploy } from './udeploy';

export const environment = {
	production: false,
	envBaseUrl: udeploy.envBaseUrl,
	apiBaseUrl: udeploy.apiBaseUrl
};
