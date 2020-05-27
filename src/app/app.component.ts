import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './providers/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bienvenido a Angular';
  curso: string = 'Curso Spring5 con Angular 7';
  profesor:string = 'Andres';
  constructor(private http: HttpClient, private config: AppConfigService) {
console.log(this.config.getConfig());
}
}
