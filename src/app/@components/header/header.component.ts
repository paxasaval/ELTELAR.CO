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
  toToogle(){
    
    let toogle=document.getElementById("toogle")
    console.log(toogle.classList)
    
    if (!toogle.classList.contains("toogle-active-sm")){
      let n = document.getElementsByClassName("item").length
      let clases = document.getElementsByClassName("item")
      console.log(document.getElementById("navbar"))
      document.getElementById("navbar").classList.remove("fixed")
      for (let i=0; i<n; i++){
        clases.item(i).classList.add("item-active-sm")
      } 
      toogle.classList.add("toogle-active-sm")

    }else{
      let clases = document.getElementsByClassName("item")
      document.getElementById("navbar").classList.add("fixed")
      for (let i = 0; i < clases.length; i++) {
        clases.item(i).classList.remove("item-active-sm")
      }
      toogle.classList.remove("toogle-active-sm")
    }
    document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
  }
}
