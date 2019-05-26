import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input('username') username;
  newUsername = '';
  newPassword = '';

  @Output() updateInfo = new EventEmitter<{username: string; newUsername: string; newPassword: string}>();

  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  updateUserInfo() {
    const username = this.username;
    const newUsername = this.newUsername;
    const newPassword = this.newPassword;
    if (this.newUsername !== '') {
      this.username = newUsername;
    }
    this.newUsername = '';
    this.newPassword = '';
    return this.updateInfo.emit({username, newUsername, newPassword});
  }

  closeProfile() {
    return this.close.emit(false);
  }

}
