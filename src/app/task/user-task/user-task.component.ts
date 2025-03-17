import { Component, inject, Input } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
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
  imports: [CardComponent, DatePipe],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
   @Input({required: true}) task!: Task;
   private tasksService = inject(TasksService);
   onCompleteTask(){
     this.tasksService.removeTask(this.task.id);
   }
  }

