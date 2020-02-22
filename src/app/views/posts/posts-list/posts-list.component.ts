import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: any = [];
  constructor(private postsSer: PostsService,
     private modalService: NgbModal,
     private toastr: ToastrService
     ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  // get all posts
  getAllPosts() {
    this.postsSer.getAll().subscribe(res => {
      this.posts = res;
      console.log(res)
    })
  }


  // delete post
  deleteItem(model, id) {
    this.modalService.open(model).result.then(res => {
      this.postsSer.deletePost(id).subscribe(res => {
        this.getAllPosts();
this.toastr.success('Post Deleted Successfuly', 'Success', {timeOut: 3000, closeButton: true, progressBar: true});
      },
        err => {
          this.toastr.error(err.statusText, 'Error', {timeOut: 3000, closeButton: true, progressBar: true});
          // console.log()
        }
      );
    },
      reason => {
        console.log(reason)
      }
    );


  }
}
