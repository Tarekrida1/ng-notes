import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private postsSer: PostsService,
private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.buildAddForm();
  }

  onSubmit() {

  }

  // to access inputs
  get f() { return this.addForm.controls;}

  buildAddForm() {
    this.addForm = this.formBuilder.group({
      title: [null, Validators,RequiredValidator],
      description: [null, Validators,RequiredValidator]

    });
  }
}
