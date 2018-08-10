/**
 * Udeploy constants will be overitten during deployment using
 * wildcards $foo$. Each enviorment will have own unique values
 * in Udeploy configuration.
 *
 * For local development sets defaults using regex.
 */

// this function strips everything for wildcard to allow local development
export function param(str: string): string {
	return str.replace(/\$.*\$/g, '');
}

export const udeploy = {
	junction: param('$junction$') || '',
	apiBaseUrl: param('$api.baseUrl$') || './api',
	envBaseUrl: param('$env.envBaseUrl$') || 'https://services-dev.ucdp.net'
};
