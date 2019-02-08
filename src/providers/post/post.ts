import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  constructor(public http: HttpClient) {
  }

  getAllPosts(page, query) {
    //console.log("https://jsonplaceholder.typicode.com/posts?_page=" + page + "&_limit=20&q=" + query);
    return this.http.get("https://jsonplaceholder.typicode.com/posts?_page=" + page + "&_limit=20&q=" + query);
  }

  getOnePost(postId) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId);
  }

  getOnePostComments(postId) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId);
  }

}
