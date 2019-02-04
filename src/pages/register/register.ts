import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  checkPassword: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {

    if (this.email != '' && this.password != '' && this.checkPassword != '')
      if (this.password == this.checkPassword)
        console.log('register in');
      else
        alert('Password and Check Password should be the same');
    else
      alert('All space should be fill out');

    this.navCtrl.pop();
  }

}
