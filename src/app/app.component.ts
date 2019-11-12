import { Component } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
