import { Component, OnInit, Input } from '@angular/core';
import { NewsService, News } from '../news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  @Input() title: string  = '';
  @Input() url: string  = '';
  //@Input() searchTerm: string = '';


  constructor(private newsService: NewsService) {}

  ngOnInit() {
  }
}

