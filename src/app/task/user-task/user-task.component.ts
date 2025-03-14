import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Task {
  id:string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
   @Input({required: true}) task!: Task;
   @Output() complete = new EventEmitter<string>();
   onCompleteTask(){
     this.complete.emit(this.task.id);
   }
  }

