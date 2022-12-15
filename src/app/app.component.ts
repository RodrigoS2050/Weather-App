import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {}
  cityName?: string;
  weatherData?: WeatherData;
  onSubmit() {
    if (this.cityName) {
      this.getWeatherData(this.cityName);
      this.cityName = '';
    }
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }
}
