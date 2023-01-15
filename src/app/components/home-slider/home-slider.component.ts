import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { NewServiceService } from '../../services/new-service.service';
import { map } from 'rxjs';
import { Article } from '../../models/NewsModel';

@Component({
	standalone: true,
	imports: [NgbCarouselModule, NgIf],
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})

export class HomeSliderComponent {
  
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  newsData: Article[] = [];
  constructor(
    public newsService:NewServiceService,
  ) {}


  ngOnInit(): void {
    this.newsService.getNewsApp('yazılım', 1, '')
    .pipe(map((res)=>res.articles))
    .subscribe((news) => (this.newsData = news))
    console.log(this.newsData)
  }
}
