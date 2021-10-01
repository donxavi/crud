import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public _postService: PostService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }
  submit() {
    this._postService.create(this.form.value).subscribe(
      res => {
        console.log(res);
        console.log('Post created successfully!');
        //this._router.navigateByUrl('post/home')
      }
    )
  }
}
