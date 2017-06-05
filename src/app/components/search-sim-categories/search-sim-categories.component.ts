import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-sim-categories',
  templateUrl: './search-sim-categories.component.html',
  styleUrls: ['./search-sim-categories.component.css']
})
export class SearchSimCategoriesComponent implements OnInit {

  constructor(
    @Inject ('categoriesData') public categoriesData,
    @Inject ('jobsData') public jobsData
  ) { }

  ngOnInit() {
    this.searchCategories = '';
  }

  private searchCategories: string;

  categories = this.categoriesData.categoriesData;
  selectedCategory;

  selectCategory(category): void {
    this.selectedCategory = category;
  }
  selectedCategoryClear(): void {
    this.selectedCategory = 1;
  }

  jobs = this.jobsData.jobsData;
  selectedJob;
  showDDJobs = false;

  selectJobs(job): void {
    this.selectedJob = job;
    this.showDDJobs = false;
    this.searchCategories = job.name;
  }

}
