import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'cgi-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {
  isCollapsed = true;
  constructor(private appService: AppService, public router: Router) {
  }

  ngOnInit() {
  }

  public toggleSidebar(event) {
    this.appService.toggleSidebar.emit(event);
  }
}