import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service'


@Component({
  selector: 'app-root',
  template: `<mat-toolbar>
                <button mat-button routerLink="/">Cerveza Vikingos</button>               
                <button mat-button routerLink="/cervezas">Cervezas</button>
                <span style="flex: 1 1 auto"></span>
                <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
                <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Log in</button>                
                <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
             </mat-toolbar>
             <router-outlet></router-outlet>`
})

export class AppComponent {

  constructor(private authService: AuthService ){}

  title = 'my app';  
}
