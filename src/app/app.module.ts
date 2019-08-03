import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModule } from "./material.module";
import {
  HttpClientModule /* other http imports */
} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { HeroInformationComponent } from "./hero-information/hero-information.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroFormComponent,
    HeroInformationComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
