import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BusinessComponent } from './pages/business/business.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { GeneralComponent } from './pages/general/general.component';
import { HealthComponent } from './pages/health/health.component';
import { HomeContentComponent } from './pages/home-content/home-content.component';
import { ScienceComponent } from './pages/science/science.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TechnologyComponent } from './pages/technology/technology.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeContentComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'health', component: HealthComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'about', component: AboutComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
