import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }
  dialoSubject = new Subject<any>()
  dialogState = this.dialoSubject.asObservable()

  showDialog(message = "error"){
    this.dialoSubject.next({show:true,message})
  }

  hideDialog(){
    this.dialoSubject.next({show:false})
  }
}
