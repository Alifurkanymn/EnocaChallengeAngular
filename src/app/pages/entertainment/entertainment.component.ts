import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../../models/NewsModel';
import { NewServiceService } from '../../services/new-service.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent {
  page = 1;
  newsData: Article[] = [];
  constructor(
    private newsService:NewServiceService,
  ) {}
  
  ngOnInit(): void {
    this.newsService.getNewsApp(' ', this.page, 'entertainment')
    .pipe(map((res)=>res.articles))
    .subscribe((news) => (this.newsData = news))
  }

}
