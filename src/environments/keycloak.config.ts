/**
 * Here you can add the configuration related to keycloak
 * So we can use this common config for diffrent environment
 */
import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
    url: 'https://dev-eai-1.dev.terarecon.in/auth',
    realm: 'master',
    clientId: 'neuro-client',
};

export default keycloakConfig;
