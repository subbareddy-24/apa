import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './dialog-data';

@Component({
  selector: 'cgi-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {

  public editorValue = '';

  // Text Editor Config
  public config = {
    height: '350px'
  };

  /*
    uiColor: '#b40b36'
  */

  constructor(
    public dialogRef: MatDialogRef<TextEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.editorValue = data.editableString;
  }

  onSave(): void {
    this.dialogRef.close({ action: 'save', editableString: this.editorValue});
  }

  onCancel(): void {
    this.dialogRef.close({ action: 'cancel', editableString: '' });
  }

}
