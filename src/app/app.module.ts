import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { SocialComponent } from './components/social/social.component';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchSimCategoriesComponent } from './components/search-sim-categories/search-sim-categories.component';

import { SimCategoriesService } from './services/categories/sim-categories.service';
import { SimJobsService } from './services/categories/sim-jobs.service';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { ProfileComponent } from './profile/profile.component';

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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [
    {provide:'categoriesData', useClass:SimCategoriesService},
    {provide:'jobsData', useClass:SimJobsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
