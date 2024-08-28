import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {

 @Input() userToDelete:User;

 @Output()
 OnConfirmation: EventEmitter<boolean>= new EventEmitter<boolean>();

 OnConfirmationBtnClicked(value: boolean){
  this.OnConfirmation.emit(value);
  
 }

}
