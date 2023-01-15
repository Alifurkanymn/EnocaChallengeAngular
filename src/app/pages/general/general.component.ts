import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../../models/NewsModel';
import { NewServiceService } from '../../services/new-service.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  page = 1;
  newsData: Article[] = [];
  constructor(
    private newsService:NewServiceService,
  ) {}
  
  ngOnInit(): void {
    this.newsService.getNewsApp(' ', this.page, 'general')
    .pipe(map((res)=>res.articles))
    .subscribe((news) => (this.newsData = news))
  }
}
