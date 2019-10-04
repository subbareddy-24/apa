import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { FileInfo } from '../file';
import { MatDialog } from '@angular/material';
import { TextEditorComponent } from '../../../shared-components/text-editor/text-editor.component';
import { ImageZoomerComponent } from '../../../shared-components/image-zoomer/image-zoomer.component';

@Component({
  selector: 'cgi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input('fileInfo') fileInfo: FileInfo;
  @Output()
  open: EventEmitter<any> = new EventEmitter<any>();


  constructor(public dialog: MatDialog, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const imgElements = this.elementRef.nativeElement.querySelectorAll('img.zoomable');
    if (imgElements && imgElements.length > 0) {
      imgElements.forEach(imgElement => {
        imgElement
          .addEventListener('click', this.zoomImage.bind(this));
      });
    }
    // console.log(imgElements);
  }


  fetchChildern(code, id, hasChildren) {
    if (hasChildren) {
      this.open.emit({ code: code, id: id });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TextEditorComponent, {
      height: '80vh',
      width: '98vw',
      data: { editableString: this.fileInfo.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.action === 'save') {
        this.fileInfo.description = result.editableString;
      }
    });
  }

  zoomImage(event): void {
    console.dir(event);
    const dialogRef = this.dialog.open(ImageZoomerComponent, {
      data: { src: event.target.src }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
