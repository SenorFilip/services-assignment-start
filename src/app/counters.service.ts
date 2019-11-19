import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountersService {

  countToActive = 0;
  countToInactive = 0;

  constructor() { }
}
