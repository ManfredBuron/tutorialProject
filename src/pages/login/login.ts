import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.userProvider.isLoggedIn().then((result) => {
      //console.log(result);
      if (result)
        this.navCtrl.pop();
    });
  }

  tryLogin() {
    if (this.email != '' && this.password != '')
      this.userProvider.login(this.email, this.password).then(result => { console.log(result); this.navCtrl.pop();}, error => { console.log(error); });      
    else
      alert('email AND password needed !');
  }

  moveToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
