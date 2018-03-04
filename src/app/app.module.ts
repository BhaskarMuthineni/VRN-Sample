import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule,
  MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
