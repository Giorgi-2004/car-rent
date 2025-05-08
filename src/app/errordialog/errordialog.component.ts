import { CommonModule } from '@angular/common';
import { Component, ErrorHandler } from '@angular/core';
import { ErrorhandlerService } from '../Services/errorhandler.service';

@Component({
  selector: 'app-errordialog',
  imports: [CommonModule],
  templateUrl: './errordialog.component.html',
  styleUrl: './errordialog.component.scss'
})
export class ErrordialogComponent {
  
  constructor(private errorHandler : ErrorhandlerService){
    this.errorHandler.dialogState.subscribe(
      state =>{
        this.showDialog = state.show
        this.errorMessage = state.message
      } 
    )
  }

  errorMessage=""
  showDialog: boolean = false
  closeDialog(){
    this.showDialog = false
    this.errorHandler.hideDialog()
  }

}
