import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FootballCompetitions } from "./footballCompetitions/footballCompetitions.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent, FootballCompetitions],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: "", component: FootballCompetitions }]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
