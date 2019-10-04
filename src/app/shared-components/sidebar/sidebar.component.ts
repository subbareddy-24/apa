import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'cgi-sidebar',
  // host: {
  //   '(document:click)': 'handleClick($event)',
  // },
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSideNavCollapsed = false;
  public elementRef;

  constructor(private appService: AppService, public router: Router) { // , myElement: ElementRef
    // this.elementRef = myElement;
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    // To collapse sidebar on small devices
    this.appService.toggleSidebar.subscribe((event) => {
      this.toggleCollapse(event);
    });
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (this.isSideNavCollapsed) {
          this.toggleCollapse('close');
        }
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit() {
  }

  toggleCollapse(event: string) {
    if (event === 'open') {
      this.isSideNavCollapsed = true;
    } else if (event === 'close') {
      this.isSideNavCollapsed = false;
    } else {
      this.isSideNavCollapsed = !this.isSideNavCollapsed;
    }
  }

  goHome() {
    this.router.navigate(['dashboard', 'COE']);
  }

  // handleClick(event) {
  //   let clickedComponent = event.target;
  //   let inside = false;
  //   do {
  //     if (clickedComponent === this.elementRef.nativeElement) {
  //       inside = true;
  //     }
  //     clickedComponent = clickedComponent.parentNode;
  //   } while (clickedComponent);
  //   if (inside) {
  //     console.log('inside');
  //   } else {
  //     console.log('outside');
  //     this.isSideNavCollapsed = true;
  //     alert(this.isSideNavCollapsed);
  //   }
  // }
}
