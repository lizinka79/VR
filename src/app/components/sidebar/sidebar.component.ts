import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  expandUser;
  showUser() {
    this.expandUser = !this.expandUser; }

  expandRating;
  showRating() {
    this.expandRating = !this.expandRating; }

  expandCredit;
  showCredit() {
    this.expandCredit = !this.expandCredit; }

  constructor() { }

  ngOnInit() {
  }

}
