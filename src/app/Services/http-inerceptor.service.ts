import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe } from 'rxjs';
import { ErrorhandlerService } from './errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInerceptorService implements HttpInterceptor {

  constructor(private errorhandler : ErrorhandlerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error:HttpResponse<any>)=>{
        if(error.status ===400){
          console.log("Bad Request")
        }
        else if (error.status ===404){
          console.log("not found",error.statusText)
        }
        else if (error.status ===500){
          console.log("internal server error",error.statusText)
        }
        else{
          console.log("unknow error",error.statusText)
        }

        this.errorhandler.showDialog(error.statusText)
        
        throw error
        
      })
    )  
  }

  
}
