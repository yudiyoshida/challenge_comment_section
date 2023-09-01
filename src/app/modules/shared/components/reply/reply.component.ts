import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from 'src/app/modules/home/models/user.model';

@Component({
  selector: 'app-reply',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent {
  @Input() myProfile!: IUser;
}
