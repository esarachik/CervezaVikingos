import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';

import { RegisterComponent, LoginComponent, AuthService, AuthInterceptorService } from './auth/index.js'
import { CervezaComponent } from './cerveza.component/cerveza.component.component';

const routes = [
  { path: '', component: CervezaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cervezas', component: CervezaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CervezaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    Angular2FontawesomeModule
  ],
  providers: [ApiService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
