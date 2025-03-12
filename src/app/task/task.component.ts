import { Component , Input, EventEmitter , Output } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserTaskComponent } from "./user-task/user-task.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() name?: string;
}

