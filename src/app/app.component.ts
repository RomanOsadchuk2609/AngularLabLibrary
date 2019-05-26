import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogined = false;
  isProfile = false;
  username = '';
  password = '';
  title = 'Online Library';
  users = [{username: 'user1', password: 'user1'}];

  login() {
    this.isLogined = false;
    for (const u of this.users) {
        if (u.username === this.username && u.password === this.password) {
          this.isLogined = true;
          break;
        }
    }
  }

  signUp() {
      const user =  {username: this.username, password: this.password};
      if (!this.userExists(this.username)) {
        this.users.push(user);
      }
      this.username = '';
      this.password = '';
  }

  signOut() {
      this.isLogined = false;
      this.username = '';
      this.password = '';
  }

  userExists(username: string) {
    for (const u of this.users) {
      if (u.username === username) {
        return true;
      }
    }
    return false;
  }

  showProfile(value: boolean) {
    this.isProfile = value;
  }

  updateUser(event: {username: string; newUsername: string; newPassword: string}) {
    for (const u of this.users) {
      if (u.username === event.username) {
        if (event.newUsername !== '') {
          u.username = event.newUsername;
        }
        if (event.newPassword !== '') {
          u.password = event.newPassword;
        }
      }
    }
  }
}
