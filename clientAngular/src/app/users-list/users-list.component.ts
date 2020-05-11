import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from "../models/user/user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchUsers()
      .subscribe(
        res => {
          this.users = res;
        },
        error => {
          console.log(error);
        }
      )
    this.dataService.fetchUserById("5eaecda0cba960e77fc9f205")
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      )
  }

}
