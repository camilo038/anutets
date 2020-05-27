import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService} from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { AppConfigService } from './providers/app-config.service';
import { HttpClientModule } from '@angular/common/http';
export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}

const routes: Routes = [
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent},
  {path:'clientes',component:ClientesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
 providers: [ClienteService],
//providers: [{
  // provide: APP_INITIALIZER,
  // useFactory: initConfig,
  // deps: [AppConfigService],
  // multi: true,
// }],
 bootstrap: [AppComponent]
})
export class AppModule { }
