import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  toggle = false;

  constructor() { }

  ngOnInit() {
  }
  onToggle(){
    this.toggle = !this.toggle
    console.log(this.toggle)
  }

}
