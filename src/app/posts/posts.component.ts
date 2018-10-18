import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  private posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(titleInput: HTMLInputElement): void {
    const post = { title: titleInput.value };
    titleInput.value = '';

    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    });
  }
}
