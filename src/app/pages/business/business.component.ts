import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../../models/NewsModel';
import { NewServiceService } from '../../services/new-service.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
  page = 1;
  newsData: Article[] = [];
  constructor(
    private newsService:NewServiceService,
  ) {}
  
  ngOnInit(): void {
    this.newsService.getNewsApp(' ', this.page, 'business')
    .pipe(map((res)=>res.articles))
    .subscribe((news) => (this.newsData = news))
  }

}
