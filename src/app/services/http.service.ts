import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient,) {}
  getRequest(url: any, options?: any): Promise<any> {
    if (options) {
      options.observe = 'response';
    } else {
      options = { observe: 'response' };
    }
    return new Promise((resolve, reject) => {
      this.http.get<any>(url, options).subscribe(
        (response: any) => {
          resolve(response.body);
        },
        (error: HttpErrorResponse) => {

          reject(error);
        }
      );
    });
  }
  postRequest(url: any, body: any, options?: any): Promise<any> {
    if (options) {
      options.observe = 'response';
    } else {
      options = { observe: 'response' };
    }
    return new Promise((resolve, reject) => {
      this.http.post<any>(url, body, options).subscribe(
        (response: any) => {
          resolve(response.body);
        },
        (error: HttpErrorResponse) => {

          reject(error);
        }
      );
    });
  }
}
