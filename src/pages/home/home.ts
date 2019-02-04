import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    
  }

  ionViewDidLoad() {
    this.userProvider.logout();
  }

  ionViewWillEnter() {

    this.userProvider.isLoggedIn().then((result) => {
      //console.log(result);
      if (!result)
        this.navCtrl.push(LoginPage);
     });

    /*
    this.userProvider.getUser().then((val) => {
      console.log('user : ', val);
    });


    this.userProvider.logout();

    this.userProvider.getUser().then((val) => {
      console.log('user : ', val);
    });
     */ 
  }
  
  navLogout() {
    this.userProvider.logout();
    this.navCtrl.push(LoginPage);
  }

  
}
