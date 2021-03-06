import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card',
  template: `<div>{{user?.name}}</div>`,
})
export class UserCardComponent {
  public user;
  constructor(private _userService: UserService) { 
  }
  someMethod(){
    this._userService.getOne(1).subscribe(user => this.user = user);
  }
}
