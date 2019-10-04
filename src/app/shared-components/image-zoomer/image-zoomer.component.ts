import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cgi-image-zoomer',
  templateUrl: './image-zoomer.component.html',
  styleUrls: ['./image-zoomer.component.scss']
})
export class ImageZoomerComponent implements OnInit {

  src: string;

  constructor(
    public dialogRef: MatDialogRef<ImageZoomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.src = data.src;
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
