import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { SocialComponent } from './components/social/social.component';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { CvComponent } from './components/cv/cv.component';
import { RatingComponent } from './components/rating/rating.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreditComponent } from './components/credit/credit.component';
import { SearchSimCategoriesComponent } from './components/search-sim-categories/search-sim-categories.component';
import { StartComponent } from './components/start/start.component';
import { CommunityComponent } from './components/community/community.component';

import { SimCategoriesService } from './services/categories/sim-categories.service';
import { SimJobsService } from './services/categories/sim-jobs.service';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { FilterSearchPipe } from './pipes/filter-search.pipe';

const appRoutes: Routes = [
  { path: 'startPage', component: StartComponent },
  { path: 'profilePage', component: ProfileComponent },
  { path: 'communityPage', component: CommunityComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    NavComponent,
    FooterComponent,
    SearchSimCategoriesComponent,
    FilterSearchPipe,
    FilterArrayPipe,
    ProfileComponent,
    SidebarComponent,
    RatingComponent,
    CreditComponent,
    UserComponent,
    StartComponent,
    CvComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [
    {provide:'categoriesData', useClass:SimCategoriesService},
    {provide:'jobsData', useClass:SimJobsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
