/**********************************************************************************
 *  WEB422 – Assignment 04 
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this 
 * assignment has been copied manually or electronically from any other source (including web sites) or 
 * distributed to other students. 
 * 
 * Name: Junhua Zhou     
 * Student ID: 121136188     
 * Date: 2020/11/11 
 * 
 * ********************************************************************************/

import { Component, OnInit, OnDestroy } from '@angular/core';

//import blogData from '../blogData.json';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  page: number = 1;
  tag: string = null;
  category: string = null;
  querySub: any;
  blogPosts: Array<BlogPost>;

  constructor(private data: PostService, private route: ActivatedRoute) { }

  getPage(num) {
    this.data.getPosts(num, this.tag, this.category).subscribe((data) => {
      if (data.length > 0) {
        this.blogPosts = data;
        this.page = num;
      }
    });
  }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe((params) => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = null;
      } else {
        this.tag = null;
      }
      if (params['category']) {
        this.category = params['category'];
        this.tag = null;
      } else {
        this.category = null;
      }
      this.getPage(+params['page'] || 1);
    });
  }

  ngOnDestroy() {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }
}
