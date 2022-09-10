import { Component, OnInit, OnDestroy } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  lat;
  lng;
  map: Leaflet.Map;
  constructor(private geo: Geolocation) {}
  ngOnInit() { }
  ionViewDidEnter() { this.leafletMap(); }

  myLocation() {
    this.geo.getCurrentPosition({timeout: 10000, enableHighAccuracy: true}).then((res) => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
    }).catch((e) => {
      console.log(e);
    });
  }

  leafletMap() {
    this.geo.getCurrentPosition({timeout: 10000, enableHighAccuracy: true}).then((res) => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
      this.map = Leaflet.map('mapId').setView([-25.464357, -49.132805], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Chadha Hajji Test USTS',
    }).addTo(this.map);

    Leaflet.marker([res.coords.latitude, res.coords.longitude]).addTo(this.map).bindPopup('My current Location').openPopup();
    }).catch((e) => {
      console.log(e);
    });
  }

  ngOnDestroy() {
    this.map.remove();
  }
}
