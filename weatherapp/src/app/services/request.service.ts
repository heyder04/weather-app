import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url="https://api.open-meteo.com/v1/forecast";
  constructor(private http:HttpClient) { }
  getdata(longtitude:string,latitude:string,currentWeather:boolean,timezone:string){
    let searchParams=new HttpParams();
    searchParams=searchParams.append('latitude',latitude)
    searchParams=searchParams.append('longitude',longtitude);
    searchParams=searchParams.append('hourly','temperature_2m');
    searchParams=searchParams.append('timezone',timezone);
    searchParams=searchParams.append('current_weather',currentWeather);
    searchParams=searchParams.append('daily','temperature_2m_max');
    searchParams=searchParams.append('daily','temperature_2m_min');
    return this.http.get(this.url,
      {params:searchParams},)
      .pipe(catchError(this.handleError))
  }
    
   handleError(error:any){
    return throwError(error.message)
}
}



