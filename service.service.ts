import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url:any = "http://127.0.0.1/predict";

  predict(data:any): Observable<any> {
    //console.log(data);

    //console.log(this.url+ "?Area=" + data.Area + "&BedRooms=" + data.Bedrooms + "&BathRooms=" + data.Bathrooms);

    return this.http
      .get<any>(this.url+ "?Runtime=" + data.Runtime + "&Rating=" + data.Rating + "&Votes=" + data.Votes + "&Revenue=" + data.Revenue + "&Metascore=" + data.Metascore)

  }

  				

}
