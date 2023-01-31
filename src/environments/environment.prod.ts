import keycloakConfig from './keycloak.config';
const hostname = 'dev-eai-1.dev.terarecon.in';
const protocol = 'https:';
export const environment = {
  production: true,
  keycloak: keycloakConfig,
  webServer: {
    createSites: `${protocol}//${hostname}/api/lrp/realm`,
    createUser: `${protocol}//${hostname}/api/lrp/realm/user`,
    department: `${protocol}//${hostname}/api/lrp/department`,
    departmentPermissions: `${protocol}//${hostname}/api/lrp/user/departments`,
    users: `${protocol}//${hostname}/api/lrp/realm/user`,
  },
};
