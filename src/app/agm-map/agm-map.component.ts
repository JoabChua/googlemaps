import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.scss']
})
export class AgmMapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        console.log(pos);
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      },
      err => {
        console.log(err);
      }
    );
  }

}
