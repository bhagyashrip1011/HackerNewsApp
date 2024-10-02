import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsService, News, NewsResponse } from './news.service';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewsComponent, MatPaginatorModule, NgxPaginationModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HackerNewsApp';
  totalNews = 0;
  news: News[] = [];
  filteredNews: News[] = [];
  pageSize = 10;
  currentPage = 1;
  searchTerm: string = '';

  constructor(private newsService: NewsService,private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getPageData();
  }

  onSearch(event: KeyboardEvent) {
    let query=(event.target as HTMLTextAreaElement).value;
    if(query !="")
      this.news = this.news.filter(x => x.title.toLowerCase().includes(query.toLowerCase()));
    else
    this.getPageData();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getPageData();
  }

  getPageData(){
    this.spinner.show();
    this.newsService.getNewestStories(this.currentPage, this.pageSize).subscribe(n => {
      this.news = n.news;
      this.totalNews = n.totalNews;
      this.spinner.hide();
    });
  }
}
