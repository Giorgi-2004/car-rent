import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class cookie_Service {

  constructor(private cookieServices: CookieService) { }

  setCookie(){
    this.cookieServices.set('token','"eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjEyMzE0MjM1MjEzNTQiLCJleHAiOjE3NDY3NzMyNTZ9.j7NWAt7Hez6SBllXSZS5U8rh6Mpabo6nR94Sti1t9Xg"',2)
  }

  deleteCokie(){
    this.cookieServices.delete('token')
  }

  getCookie(){
    this.cookieServices.get('token')
  }



}
