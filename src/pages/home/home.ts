import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { PostDetailPage } from '../post-detail/post-detail';
import { UserProvider } from '../../providers/user/user';
import { PostProvider } from '../../providers/post/post';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts:any;
  page: number = 1;
  query: string = "";

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private postProvider: PostProvider) {
    
  }

  ionViewDidLoad() {
    this.postProvider.getAllPosts(this.page, this.query).subscribe(result => { this.posts = result; });
  }

  ionViewWillEnter() {

    this.userProvider.isLoggedIn().then((result) => {
      //console.log(result);
      if (!result)
        this.navCtrl.push(LoginPage);
    });
  }
  
  navLogout() {
    this.userProvider.logout();
    this.navCtrl.push(LoginPage);
  }

  postDetail(id) {
    let postData;
    this.postProvider.getOnePost(id).subscribe(result => { postData = result; this.navCtrl.push(PostDetailPage, postData);});    
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.page++;
      this.postProvider.getAllPosts(this.page, this.query).subscribe(result => {
        for (let item in result)
          this.posts.push(result[item]);
      });

      infiniteScroll.complete();
    }, 500);
  }

  getItems(event) {
    this.query = event.target.value;
    if (!this.query)
      this.query = "";
    this.page = 1;

    if (this.query && this.query.trim().length > 2)
      this.postProvider.getAllPosts(this.page, this.query).subscribe(result => {
        this.posts = result;
      })
    else
      this.postProvider.getAllPosts(this.page, this.query).subscribe(result => {
        this.posts = result;
      })

  }
  
}
