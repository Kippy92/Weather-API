import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ChicagoComponent implements OnInit {

  weather;
  tempAvg;
  tempMax;
  tempMin;
  
  constructor(private _http:HttpClient) { }
  


  ngOnInit() {
    this.getChicago();
  }

  getChicago(){
    let observable = this._http.get('http://api.openweathermap.org/data/2.5/weather?id=3582383&APPID=dab99160440aa3fdef4feab704bab93c');
    observable.subscribe(data => {
      var kelvinAvg = data['main'].temp;
      var fahrAvg = (1.8 * (kelvinAvg - 273.15)) + 32;
      this.tempAvg = Math.round(fahrAvg);

      var kelvinMax = data['main'].temp_max;
      var fahrMax = (1.8 * (kelvinMax - 273.15)) + 32;
      this.tempMax = Math.round(fahrMax);

      var kelvinMin = data['main'].temp_min;
      var fahrMin = (1.8 * (kelvinMin - 273.15)) + 32;
      this.tempMin = Math.round(fahrMin);

      this.weather = data;
    })
  }

}
