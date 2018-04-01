import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  count = 3;
  @ViewChild('counter') counter: ElementRef;
  @ViewChild('text') text: ElementRef;
  @ViewChild('bilder') bilder: ElementRef;
  @ViewChild('layout') layout: ElementRef;
  @ViewChild('animationen') animationen: ElementRef;
  @ViewChild('javascript') javascript: ElementRef;
  @ViewChild('entwicklung') entwicklung: ElementRef;

  constructor() { }

  ngOnInit() {
    this.test();
  }

  test(){
    let interval = setInterval(() => {
      this.count--;
      if(this.count <= 0) {
        this.counter.nativeElement.style.display = 'none';
        this.changeElements();
        clearInterval(interval);
      }
      }, 1500)    
  }

  changeElements(){
    this.changeText();
    this.changeBilder();
    this.changeLayout();
    this.changeAnimationen();
    this.changeJavaScript();
    this.changeEntwicklung();
  }
  
  changeText(){

    setTimeout(() => {
      this.text.nativeElement.innerHTML = `
        <img style="width: 100%; height: 100%" src="../../../assets/hero-small.jpg">
        `
    }, 300);

    setTimeout(() => {
      this.text.nativeElement.innerHTML = `
      <img style="width: 100%; height: 100%" src="../../../assets/user.jpg">
      `
    }, 1000);

  }

  changeBilder(){

    setTimeout(() => {
      this.bilder.nativeElement.innerHTML = `
        <img style="width: 100%; height: 100%" src="../../../assets/user.jpg">
        `
    }, 300);

    setTimeout(() => {
      this.bilder.nativeElement.innerHTML = `
      <img style="width: 100%; height: 100%" src="../../../assets/hero-small.jpg">
      `
    }, 3000);

  }

  changeLayout(){

    setTimeout(() => {
      this.layout.nativeElement.innerHTML = `
        <img style="width: 100%; height: 100%" src="../../../assets/hero-small.jpg">
        `
    }, 300);

    setTimeout(() => {
      this.layout.nativeElement.innerHTML = `
      <img style="width: 100%; height: 100%" src="../../../assets/user.jpg">
      `
    }, 2000);

  }

  changeAnimationen(){

    setTimeout(() => {
      this.animationen.nativeElement.innerHTML = `
        <img style="width: 100%; height: 100%" src="../../../assets/user.jpg">
        `
    }, 300);

    setTimeout(() => {
      this.animationen.nativeElement.innerHTML = `
      <img style="width: 100%; height: 100%" src="../../../assets/hero-small.jpg">
      `
    }, 2500);

  }

  changeJavaScript(){

    setTimeout(() => {
      this.javascript.nativeElement.innerHTML = `
        <img style="width: 100%; height: 100%" src="../../../assets/hero-small.jpg">
        `
    }, 300);

    setTimeout(() => {
      this.javascript.nativeElement.innerHTML = `
      <img style="width: 100%; height: 100%" src="../../../assets/user.jpg">
      `
    }, 1500);

  }

  changeEntwicklung(){

    setTimeout(() => {
      this.entwicklung.nativeElement.innerHTML = `
        <img style="width: 100%; height: 100%" src="../../../assets/user.jpg">
        `
    }, 300);

    setTimeout(() => {
      this.entwicklung.nativeElement.innerHTML = `
      <img style="width: 100%; height: 100%" src="../../../assets/hero-small.jpg">
      `
    }, 3500);

  }


}
