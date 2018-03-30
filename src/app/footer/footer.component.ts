import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(){
    (<HTMLInputElement>document.getElementById("toggle")).checked = false;
    this.router.navigate(['/datenschutz']).then(() => { window.scrollTo(0, 0) });
  }

}
