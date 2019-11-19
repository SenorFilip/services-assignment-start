import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CountersService} from '../counters.service';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService,
              private counterService: CountersService) {}

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.countToActive++;
  }
}
