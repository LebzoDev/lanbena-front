import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Loader } from "@googlemaps/js-api-loader"
import {} from 'googlemaps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('map') mapElement: any;
  map:any;


  ngOnInit(): void {
    // const mapProperties = {
    //      center: new google.maps.LatLng(35.2271, -80.8431),
    //      zoom: 15,
    //      mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
 }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  tabs:string[]=['a','b','c','d','e','f','g','h'];
  constructor(private breakpointObserver: BreakpointObserver) {}

  // const loader = new Loader({
  //   apiKey: "AIzaSyCkbuIZTmrG2JWyL63j3uWlmgSH5ZsOLSA",
  //   version: "weekly",
  //   ...additionalOptions,
  // });
  
  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });

}
