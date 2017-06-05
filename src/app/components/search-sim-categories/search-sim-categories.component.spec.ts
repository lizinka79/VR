import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSimCategoriesComponent } from './search-sim-categories.component';

describe('SearchSimCategoriesComponent', () => {
  let component: SearchSimCategoriesComponent;
  let fixture: ComponentFixture<SearchSimCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSimCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSimCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
