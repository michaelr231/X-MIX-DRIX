import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbButtonModule} from '@nebular/theme';

import { HeadComponent } from './head/head.component';
import { MainComponent} from './Main/main.component';
import { NbInputModule} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    HeadComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbInputModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
