import { Component, OnInit } from '@angular/core';

export interface status {
  value: String;
  viewValue: String;
}

@Component({
  selector: 'cgi-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
status: status[] = [
  {value:"active",viewValue:"Active"},
  {value:"inActive",viewValue:"InActive"}
]


}
