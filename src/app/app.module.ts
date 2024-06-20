import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { HdWalletAdapterModule } from '@heavy-duty/wallet-adapter';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HdWalletAdapterModule.forRoot({ autoConnect: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
