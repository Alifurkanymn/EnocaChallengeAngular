import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { HomeContentComponent } from '../../pages/home-content/home-content.component';
import { NewServiceService } from '../../services/new-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
	imports: [NgbPaginationModule],
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  page = 1;
    constructor(private searchService:NewServiceService,
      public getDataVariable:HomeContentComponent
      ) {}
  
  public getSearch(){
    this.searchService.getNewsApp('yazılım', this.page, '')
    .pipe(map((res)=>res.articles))
    .subscribe((news) => (this.getDataVariable.newsData = news))
  }
}

