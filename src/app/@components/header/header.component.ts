import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }
  toAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }
  toProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }
  toTechnology() {
    document.getElementById("technology").scrollIntoView({ behavior: "smooth" });
  }
}
