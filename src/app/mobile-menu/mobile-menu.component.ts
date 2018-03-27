import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;
    this.router.navigate(['/']).then(() => { window.scrollTo(0, 0) });
  }
  onClick1(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;
    this.router.navigate(['/text']).then(() => { window.scrollTo(0, 0) });
  }
  onClick2(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;    
    this.router.navigate(['/bilder']).then(() => { window.scrollTo(0, 0) });
  }
  onClick3(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;    
    this.router.navigate(['/layout']).then(() => { window.scrollTo(0, 0) });
  }
  onClick4(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;    
    this.router.navigate(['/animationen']).then(() => { window.scrollTo(0, 0) });
  }
  onClick5(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;    
    this.router.navigate(['/javascript']).then(() => { window.scrollTo(0, 0) });
  }
  onClick6(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;    
    this.router.navigate(['/entwicklung']).then(() => { window.scrollTo(0, 0) });
  }
}
