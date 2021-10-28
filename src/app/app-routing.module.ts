import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {RecommendComponent} from './recommend/recommend.component';
import { UpdateComponent } from './update/update.component';
import { GifsComponent } from './gifs/gifs.component';
import { SearchComponent } from './search/search.component';
import {RecupdateComponent} from './recupdate/recupdate.component';
import {DisplayCardComponent} from './display-card/display-card.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  /*{path:'',redirectTo:'/login',pathMatch:'full'},*/
    {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'register/login',component:LoginComponent},
  {path:'register/login/dashboard',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'favourite',component:FavouritesComponent},
  {path:'search',component:SearchComponent},
  {path:'edit',component:EditProfileComponent},
  {path:'edit/dashboard',component:DashboardComponent},
  {path:'recommend',component:RecommendComponent},
  {path:'login/dashboard',component:DashboardComponent},
  {path:'login/dashboard/favourite',component:FavouritesComponent},
  {path:'login/dashboard/recommend',component:RecommendComponent},
  
  //{path:'login/dashboard/favourite/dashboard',component:DashboardComponent},
  {path:'displayCard/:id',component:DisplayCardComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'update/:id/favourite',component:FavouritesComponent},
  {path:'update/:id/favourite/dashboard',component:DashboardComponent},
  {path:'recupdate/:id',component:RecupdateComponent},
  {path:'recupdate/:id/recommend',component:RecommendComponent},
  {path:'recupdate/:id/recommend/dashboard',component:DashboardComponent},
  {path:'',component:GifsComponent},
  {path:'login/dashboard/search',component:SearchComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

  /*{path:'login/dashboard',component:DashboardComponent},
  {path:'favourite',component:FavouritesComponent},
  {path:'recommend',component:RecommendComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
