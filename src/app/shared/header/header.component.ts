import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  visible:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuClicked() {
    console.log("before click:", this.visible)
    this.visible = !this.visible;
    console.log("after click:", this.visible)
  }

  linkClicked() {
    this.visible = false;
  }

}
