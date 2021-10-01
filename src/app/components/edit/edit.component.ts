import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number | undefined;
  post: Post;
  form!: FormGroup;
  constructor(
    public _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.post = {
      id: 0,
      title: '',
      body: ''
    }
   }

  ngOnInit(): void {
    const id = +this._route.snapshot.params['postId'];
    this._postService.find(id).subscribe(
      res => {
        this.post = res;
      }
    )
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this._postService.update(this.id, this.form.value).subscribe(
      res => {
        console.log('Post updated successfully!');
      }
    )
  }

}
