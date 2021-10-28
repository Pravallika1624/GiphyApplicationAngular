import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RecommendComponent } from './recommend/recommend.component';
import { GifsComponent } from './gifs/gifs.component';
import { SearchComponent } from './search/search.component';
import { RecupdateComponent } from './recupdate/recupdate.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import {FormsModule} from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateComponent,
    FavouritesComponent,
    RecommendComponent,
    GifsComponent,
    SearchComponent,
    RecupdateComponent,
    DisplayCardComponent,
    EditProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
