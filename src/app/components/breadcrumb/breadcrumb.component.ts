import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'cgi-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input('breadcrumb') breadcrumb: Breadcrumb[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(breadcrumbItem: Breadcrumb) {
    this.router.navigate(breadcrumbItem.url);
  }
}
