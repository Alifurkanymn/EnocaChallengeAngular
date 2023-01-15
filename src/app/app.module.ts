import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BusinessComponent } from './pages/business/business.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { GeneralComponent } from './pages/general/general.component';
import { HealthComponent } from './pages/health/health.component';
import { ScienceComponent } from './pages/science/science.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { AboutComponent } from './pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeSliderComponent,
    HttpClientModule,
    PaginationComponent,
    // CommonModule,
    // BrowserModule,
    // FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
