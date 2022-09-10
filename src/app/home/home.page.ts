import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lat;
  lng;

  constructor(private geo: Geolocation) {}
  myLocation() {
    this.geo.getCurrentPosition({timeout: 10000, enableHighAccuracy: true}).then((res) => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
    }).catch((e) => {
      console.log(e);
    });
  }
}
