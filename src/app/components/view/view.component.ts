import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  constructor(
    public _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  post: any;
  ngOnInit(): void {
    const id = +this._route.snapshot.params['postId'];
    this._postService.find(id).subscribe(
      res => {
        this.post = res;
        console.log(this.post)
      },
      err => console.log(err)
    )

  }

}
