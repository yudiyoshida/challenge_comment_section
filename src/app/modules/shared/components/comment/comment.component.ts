import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IComment } from 'src/app/modules/home/models/comment.model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ReplyComponent } from '../reply/reply.component';
import { IUser } from 'src/app/modules/home/models/user.model';

@Component({
  standalone: true,
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  imports: [CommonModule, MatButtonModule, MatDialogModule, ReplyComponent],
})
export class CommentComponent {
  @Input() comment!: IComment;
  @Input() isMyComment!: boolean;
  @Input() myProfile!: IUser;

  public editMode = false;
  public replyMode = false;

  constructor(private dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(DialogComponent, {
      width: '350px',
    });
  }
}
