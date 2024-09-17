import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteEntryModule } from './remote-entry/remote-entry.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    RemoteEntryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
