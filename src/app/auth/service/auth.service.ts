import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';
import { from, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private keycloakService: KeycloakService) {}

  public getLoggedUser(): KeycloakTokenParsed | undefined {
    try {
      const userDetails: KeycloakTokenParsed | undefined = this.keycloakService.getKeycloakInstance()
        .idTokenParsed;
      return userDetails;
    } catch (e) {
      console.error("Exception", e);
      return undefined;
    }
  }

  public isLoggedIn() : Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  public loadUserProfile() : Promise<KeycloakProfile> {
    return this.keycloakService.loadUserProfile();
  }

  public login() : void {
    this.keycloakService.login();
  }

  public logout() : void {

    // const origin = = 'https://localhost:4200'
    window.sessionStorage.clear();
    window.localStorage.clear();

    this.keycloakService.isLoggedIn().then((status) => {
      if (status) {
        this.keycloakService.logout();
      }
    });

    //this.keycloakService.logout('https://dev-eai-1.dev.terarecon.in/auth');
  }

  public redirectToProfile(): void {

    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public getRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
  hasUserRole(role: string): boolean {
    return this.keycloakService?.getUserRoles()?.findIndex((r) => r === role) >= 0;
  }
}
