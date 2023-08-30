import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IComment } from 'src/app/modules/home/models/comment.model';

@Component({
  standalone: true,
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  imports: [CommonModule],
})
export class CommentComponent {
  @Input() comment!: IComment;
  @Input() isMyComment!: boolean;
}
