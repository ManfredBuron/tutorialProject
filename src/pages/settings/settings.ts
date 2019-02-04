import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  name: string = '';
  surname: string = '';
  profilimage: string = '';
  settings: any = { 'name': '', 'surname': '', 'profilimage': '' };


  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }

  ionViewWillEnter() {
    this.userProvider.isLoggedIn().then((result) => {
      //console.log(result);
      if (!result)
        this.navCtrl.push(LoginPage);
    });
  }

  ionViewDidEnter() {

    this.userProvider.getUserSettings().then((result) => {
      if (result != null) {
        this.name = result['name'];
        this.surname = result['surname'];
        this.profilimage = result['profilimage'];
      }
    }, (error) => { console.log(error); }
    );
  }

  navLogout() {
    this.userProvider.logout();
    this.navCtrl.push(LoginPage);
  }

  saveSettings() {
    let regex = new RegExp("^[a-zA-Z]*$");
    if (this.name != '' && this.surname != '') {
      if (regex.test(this.name) && regex.test(this.surname)) {
        this.settings['name'] = this.name;
        this.settings['surname'] = this.surname;
        this.settings['profilimage'] = this.profilimage;
        this.userProvider.saveUserSettings(this.settings).then((result) => { console.log(result); }, (error) => { console.log(error); });
      } else {
        alert("Name and Surname can only contains alpha characters");
      }
    } else {
      alert("name AND surname couldn't be empty !");
    }
  }

}
