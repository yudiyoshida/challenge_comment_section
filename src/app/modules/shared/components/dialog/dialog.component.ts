import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
})
export class DialogComponent {
  constructor(private dialog: MatDialogRef<DialogComponent>) {}

  public closeDialog() {
    this.dialog.close();
  }
}
