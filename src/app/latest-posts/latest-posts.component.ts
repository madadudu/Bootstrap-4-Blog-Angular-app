import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts: Array<BlogPost>;

  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.data
      .getPosts(1, null, null)
      .subscribe((data) => (this.posts = data.slice(0, 3)));
  }
}
