import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { IComment } from './models/comment.model';
import { IUser } from './models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public comments!: IComment[];
  public myProfile!: IUser;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getComments();
    this.getProfile();
  }

  public getComments() {
    this.homeService.getComments().subscribe({
      next: (res) => this.comments = res,
    });
  }

  public getProfile() {
    this.homeService.getMyProfile().subscribe({
      next: (res) => this.myProfile = res,
    });
  }
}
