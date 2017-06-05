import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  userData = [{
    img:'/assets/img/placeholder-video.png',
    href: '',
    name: 'John',
    date: '2016-05-12',
    category: 'job',
    averageRating: '4.3'
  },{
    img:'/assets/img/placeholder-video.png',
    href: '',
    name: 'Greta',
    date: '2016-07-30',
    category: 'job',
    averageRating: '3.0'
  }];

  constructor() { }

  ngOnInit() {
  }

}
