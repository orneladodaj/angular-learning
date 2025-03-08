import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent], // Importing the standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
}

