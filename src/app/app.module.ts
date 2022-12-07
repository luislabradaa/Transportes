import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';


import { AvionComponent } from './avion/avion.component';
import { AutobusComponent } from './autobus/autobus.component';
import { UberComponent } from './uber/uber.component';

@NgModule({
  declarations: [
    AppComponent,
    AvionComponent,
    AutobusComponent,
    UberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule ,
    MatCardModule,
    RouterModule.forRoot([
      {path: 'avion', component: AvionComponent},
      {path: 'autobus', component: AutobusComponent},
      {path: 'uber', component: UberComponent},
      //{path: '', redirectTo: '/http://localhost:4200/', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
