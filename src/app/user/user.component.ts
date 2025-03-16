import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
 @Input({required: true}) user!:User;
 @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
 // select = output<string>(); //output is a function , we dont have to use event emitter
  get imagePath() {
    return '../assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
// avatar = input.required<string>();
//name = input.required<string>();
//@Output() select = new EventEmitter();
//these are old ways to do the things

/* @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  or we  can do this:
  @Input({required: true}) user!:{
  id: string;
  avatar: string;
  name: string;
 };

 //interface User{
  //  id: string;
  //avatar: string;
  // name: string;}
 //type User = {
 // id: string;
 // avatar: string;
 // name: string;
 //};
  
  
  
  */
