import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CountersService} from '../counters.service';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService,
              private counterService: CountersService) {}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.counterService.countToInactive++;
  }

}
