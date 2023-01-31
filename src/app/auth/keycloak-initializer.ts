import { LocalService } from './service/local.service';
import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {
  // localStorage.clear();

  const segments = new URL(window.location.href).pathname.split('/');
  const last = segments.pop() || segments.pop(); // Handle potential trailing slash
  if ((last || 'master').startsWith('site-')) {
    localStorage.setItem('realm', last || 'master');
    environment.keycloak.realm = last || 'master';
  } else if ((last || 'master').length === 0) {
    localStorage.clear();
  } else if ((last || 'master').length > 0) {
    const realm = localStorage.getItem('realm');
    if (realm) {
      environment.keycloak.realm = last || 'master';
    }
  }
  const options: KeycloakOptions = {
    config: environment.keycloak,
    // bearerExcludedUrls: [],
    loadUserProfileAtStartUp: true,
    initOptions: {
      //onLoad: 'check-sso',
      onLoad: 'login-required',
      checkLoginIframe: false,
    },
    bearerExcludedUrls: [],
  };

  return () => keycloak.init(options);
}
// export function initializer(keycloak: KeycloakService): () => Promise<boolean> {
//   return (): Promise<any> => {
//       return new Promise(async (resolve, reject) => {
//         try {
//           await keycloak.init({
//               config: {
//                   url: environment.keycloak.url,
//                   realm: environment.keycloak.realm,
//                   clientId: environment.keycloak.clientId
//               },
//             loadUserProfileAtStartUp: false,
//             initOptions: {
//               onLoad: 'login-required',
//               checkLoginIframe: true
//             },
//             bearerExcludedUrls: []
//           });
//           resolve(true);
//         } catch (error) {
//           reject(error);
//         }
//       });
//     };
// }
