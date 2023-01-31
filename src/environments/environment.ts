// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import keycloakConfig from './keycloak.config';
const hostname = 'dev-eai-1.dev.terarecon.in';
const protocol = 'https:';
export const environment = {
  production: false,
  keycloak: keycloakConfig,
  webServer: {
    createSites: `${protocol}//${hostname}/api/lrp/realm`,
    createUser: `${protocol}//${hostname}/api/lrp/realm/user`,
    department: `${protocol}//${hostname}/api/lrp/department`,
    departmentPermissions: `${protocol}//${hostname}/api/lrp/user/departments`,
    users: `${protocol}//${hostname}/api/lrp/realm/user`,
  },
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
