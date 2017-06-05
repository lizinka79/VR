import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor() { }

  ngOnInit() {
  }

}
