import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './products/main/main.component';
import { AComponent } from './products/a/a.component';
import { BComponent } from './products/b/b.component';
import { ListingComponent } from './products/listing/listing.component';
import { TabsComponent } from './products/tabs/tabs.component';
import { CreateComponent } from './products/a/create/create.component';
import { UploadComponent } from './products/b/upload/upload.component';
import { ListComponent } from './products/a/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AComponent,
    BComponent,
    ListingComponent,
    TabsComponent,
    CreateComponent,
    UploadComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }