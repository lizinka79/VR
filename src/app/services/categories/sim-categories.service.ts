import { Injectable } from '@angular/core';

@Injectable()
export class SimCategoriesService {

  categoriesData = [
  {
    level:1,
    name:'Grundskola'
  },{
    level:2,
    name:'Gymnasium'
  },{
    level:3,
    name:'Högskola/universitet'
  }
];
  constructor() { }

}
