import { Injectable } from '@angular/core';

@Injectable()
export class SimJobsService {

  jobsData = [
  {
    level:1,
    name:'Bygg'
  },{
    level:2,
    name:'Sjuksköterska'
  },{
    level:3,
    name:'Ingenjör'
  }
];
  constructor() { }

}
