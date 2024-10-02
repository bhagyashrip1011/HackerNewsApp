import { TestBed } from '@angular/core/testing';
import { News, NewsResponse, NewsService } from './news.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting,HttpTestingController } from '@angular/common/http/testing';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      providers: [NewsService,provideHttpClient(),provideHttpClientTesting() ],
      imports: [HttpTestingController]});
    service = TestBed.inject(NewsService);
  });

  it('should fetch news', () => {
    const mockNews: NewsResponse= {totalNews: 500, news: [{ title: 'Test Story', url: 'http://example.com' }]};
    const mockpageNo: number =1;
    const mockpageSize: number= 10;
    const http = TestBed.inject( HttpTestingController );
    service.getNewestStories(mockpageNo,mockpageSize).subscribe(news => {
      expect(news).toEqual(mockNews);
    });
    const req = http.expectOne('http://localhost:5000/api/stories/newest');
    req.flush(mockNews);
  });
});



