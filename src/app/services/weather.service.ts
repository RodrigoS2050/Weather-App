import { WeatherData } from 'src/app/models/weather';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        cityName
      )}&appid=45e8b5ceb904739527adf6dcc9c687d0&units=metric&lang=pt_br`
    );
  }
}
