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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { from } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
