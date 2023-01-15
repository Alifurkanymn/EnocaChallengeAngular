import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../../models/NewsModel';
import { NewServiceService } from '../../services/new-service.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent {
  page = 1;
  newsData: Article[] = [];
  constructor(
    private newsService:NewServiceService,
  ) {}
  
  ngOnInit(): void {
    this.newsService.getNewsApp(' ', this.page, 'sports')
    .pipe(map((res)=>res.articles))
    .subscribe((news) => (this.newsData = news))
  }
}
