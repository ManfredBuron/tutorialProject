import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  
  constructor(public storage: Storage) {
  }
  
  login(email, password) {
    return new Promise((resolve, reject) => {
      this.storage.set('user', email).then(
        (result) => {
          setTimeout(() => resolve("Logged as " + result), 1000);
        },
        (error) => {
          reject(error);
        });
    });
  }

  logout() {
    return this.storage.remove('user');
  }

  isLoggedIn() {
    return this.storage.ready().then(() => {
      return this.getUser().then(
        (result) => {
          if (result != null)
            return true;
          else
            return false;
        },
        () => { return false; }
      );
    });

  }

  register(email, password, passwordRepeated) {
    return new Promise((resolve, reject) => {
      if (password == passwordRepeated)
        setTimeout(() => resolve(true), 1000);
      else
        reject(new Error('registration failed'));
    });
  }

  getUser() {
    return this.storage.get('user');
  }

  saveUserSettings(settings) {
    return new Promise((resolve, reject) =>  {
      this.storage.set('settings', settings);
      setTimeout(() => resolve("settings registered !"), 2000);
    });
  }

  getUserSettings() {
    return this.storage.get('settings');
  }

}
