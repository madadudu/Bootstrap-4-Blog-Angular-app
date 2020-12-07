import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input() page: number;
  @Output() newPage = new EventEmitter();

  constructor() { }

  previousPage() {
    if (this.page > 1) {
      this.newPage.emit(this.page - 1);
    }
  }

  nextPage() {
    this.newPage.emit(this.page + 1);
  }

  ngOnInit(): void {
  }

}
