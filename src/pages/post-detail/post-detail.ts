import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  post: any;
  comments: any;
  seeComments: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
    this.post = this.navParams.data;
  }

  displayComments() {
    this.postProvider.getOnePostComments(this.post.id).subscribe(result => { this.comments = result });
    this.seeComments = true;
  }

}
