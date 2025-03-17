import { Component , Input, EventEmitter , Output } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserTaskComponent } from "./user-task/user-task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {type NewTaskData } from './user-task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) userId !: string;
  @Input({required: true}) name !: string;
  isAddingTask = false;

   constructor(private tasksService: TasksService){
    
   }

  get selectedUserTasks(){
   return this.tasksService.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}

