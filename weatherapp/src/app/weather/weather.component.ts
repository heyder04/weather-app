import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ImagesService } from '../services/images.service';
import { catchError, observable, throwError } from 'rxjs';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers:[ImagesService]
})
export class WeatherComponent implements OnInit {
  longtitude:string="-74";
  latitute:string="40";
  // newlat:string="-74";
  // newlong:string="40";
  timezone="auto";
  // url="";
  datas:any=[];
  place:string="";
  currentWeather:boolean=true;
  temperature:number=1;
  mintemp:number=1;
  maxtemp:number=1;
  windspeed:number=1;
  winddirection:number=1;
  errorMsg:string=""
  myimgs:any;
  myimg:string="";
  weathercode:string=""
  constructor(private http:HttpClient,private ImgService:ImagesService,private RequestService:RequestService) { }
  
  ngOnInit(): void {
    this.getData()
    
  }
  Search(){
    if(this.latitute.trim().length===0){
    this.errorMsg="Latitude is required"
   }else if(this.longtitude.trim().length===0){
    this.errorMsg="Longtitude is required"
   }
   else{
    this.errorMsg="";
    this.getData()
   }
  }

  getData(){
  return this.RequestService.getdata(this.longtitude,this.latitute, this.currentWeather,this.timezone).subscribe(data=>{
       this.datas=data
       this.place=this.datas.timezone;
       this.temperature=this.datas.current_weather.temperature;
       this.mintemp=this.datas.daily.temperature_2m_min[0];
       this.maxtemp=this.datas.daily.temperature_2m_max[0];
       this.windspeed=this.datas.current_weather.windspeed;
       this.winddirection=this.datas.current_weather.winddirection;
       this.weathercode=this.datas.current_weather.weathercode;
       this.myimgs=this.ImgService.Giveimages()
       this.myimg="assets/"+this.myimgs[this.weathercode]},(error)=>{
      
       this.errorMsg="Input problem"
      }
      )
      }

  Keycode(e:any){
  if((e.keyCode<48 || e.keyCode>57) && e.keyCode!=45){
    this.errorMsg="Input must be number"
  }else{
    this.errorMsg=""
  }
  }




}
