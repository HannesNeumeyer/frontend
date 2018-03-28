import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wetter',
  templateUrl: './wetter.component.html',
  styleUrls: ['./wetter.component.css']
})
export class WetterComponent implements OnInit {
  city = 'Munich';
  state = 'Germany';
  wdesc;
  wstring;
  wicon;
  apiKey = '99dfe35fcb7de1ee';
  noMatch = false;

  constructor() { }

  async ngOnInit() {
    await this.setWeather();
  }

  async getWeather(){
      const weatherData = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`)
      const weather = await weatherData.json();
      return weather.current_observation;
  }

  async setWeather(){
    const weather = await this.getWeather();
    this.wstring = weather.feelslike_string;
    this.wdesc = weather.weather;
    this.wicon = weather.icon_url
    console.log(weather);
  }

  async onChange(form: NgForm){
    this.city = form.value.city;
    this.state = form.value.state;
    try{
      await this.setWeather();
    }    
    catch(e) {
      this.noMatch = true;
      setTimeout(() => {
        this.noMatch = false;
      }, 4000);
      this.city = 'Munich';
      this.state = 'Germany';
    }
  }

}
