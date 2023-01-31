import { Router } from '@angular/router';
import { environment } from './../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-keycloak';
  public loggedIn = false;
  public userProfile: KeycloakProfile = {};

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = await this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.userProfile = await this.authService.loadUserProfile();
    } else {
      this.authService.login();
    }
  }

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }
  getParameterFromUrl(parameter: string) {
    const re = new RegExp(parameter + '=([a-z0-9-]+)&?');
    const results = re.exec(window.location.href);

    if (results) {
      return results[1];
    } else {
      return '';
    }
  }
}
