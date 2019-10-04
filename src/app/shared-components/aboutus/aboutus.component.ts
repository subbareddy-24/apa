import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cgi-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  matDatepicker: Date;
  token = 'token';
  afuConfig = {
    multiple: true,
    // formatsAllowed: '.jpg,.png',
    maxSize: '10',
    uploadAPI: {
      url: 'https://example-file-upload-api',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Authorization': `Bearer ${this.token}`
      }
    },
    theme: 'dragNDrop',
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false
  };
  constructor() { }

  ngOnInit() {
  }


}
