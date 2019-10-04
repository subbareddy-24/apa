import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
}
