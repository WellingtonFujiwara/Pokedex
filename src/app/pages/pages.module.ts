import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Routing
import { RoutingModule } from './routing.module';

// Module
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
