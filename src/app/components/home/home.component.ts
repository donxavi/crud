import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._postService.getAll()
    .subscribe(
      res => {
        this.posts = res;
        console.log(this.posts)
      },
      err => console.log(err)
    )
  }

}
