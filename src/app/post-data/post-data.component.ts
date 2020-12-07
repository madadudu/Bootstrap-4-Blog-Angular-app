import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnDestroy {
  post: BlogPost;
  private querySub: any;
  commentName: string;
  commentText: string;

  constructor(private data: PostService, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe((params) => {
      this.data.getPostbyId(params['id']).subscribe((data) => {
        this.post = data
        this.post.views++,
          this.data.updatePostById(this.post._id, this.post).subscribe();
      });
    });
  }

  submitComment(): void {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });

    this.data.updatePostById(this.post._id, this.post).subscribe(() => {
      this.commentName = '';
      this.commentText = '';
    });
  }

}
