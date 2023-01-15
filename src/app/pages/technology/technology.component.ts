import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../../models/NewsModel';
import { NewServiceService } from '../../services/new-service.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {
 page = 1;
  newsData: Article[] = [];
  constructor(
    private newsService:NewServiceService,
  ) {}
  
  ngOnInit(): void {
    this.newsService.getNewsApp(' ', this.page, 'technology')
    .pipe(map((res)=>res.articles))
    .subscribe((news) => (this.newsData = news))
  }
}
