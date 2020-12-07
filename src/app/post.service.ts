import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../BlogPost';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]> {
    //let link = `https://arcane-beach-59973.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;
    const perPage = 6;

    let params = {
      page: page,
      perPage: perPage.toString(),
    }

    if (tag != null || tag != undefined) {
      params["tag"] = tag;
    }

    if (category != null || tag != undefined) {
      params["category"] = category;
    }

    return this.http.get<BlogPost[]>(`https://arcane-beach-59973.herokuapp.com/api/posts`,{ params });
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `https://arcane-beach-59973.herokuapp.com/api/posts/${id}`
    );
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(
      'https://arcane-beach-59973.herokuapp.com/api/categories'
    );
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://arcane-beach-59973.herokuapp.com/api/tags'
    );
  }

  getAllPosts(): Observable<BlogPost[]> {
    const perPage = Number.MAX_SAFE_INTEGER.toString();

    let params = {
      page: "1",
      perPage: perPage
    }

    return this.http.get<BlogPost[]>(`https://arcane-beach-59973.herokuapp.com/api/posts`,{ params });
  }

  newPost(data: BlogPost): Observable<any> {
    return this.http.post<any>(`https://arcane-beach-59973.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.http.put<any>(`https://arcane-beach-59973.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://arcane-beach-59973.herokuapp.com/api/posts/${id}`);
  }

}