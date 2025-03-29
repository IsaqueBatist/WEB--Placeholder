import { Component, OnInit } from '@angular/core';
import { RootObjectUser } from '../interface/userInterface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-table-users',
  standalone: false,
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent implements OnInit{
  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.getUsers()
  }
  
  users: RootObjectUser[] = [];

  getUsers(){
    this.userService.getUsers().subscribe(
      data => this.users = data
    )
  }

}
