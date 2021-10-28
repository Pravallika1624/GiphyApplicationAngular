import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment'
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import {User} from './user';
import {Fav} from './fav';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { formatCurrency } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
   gifs=new BehaviorSubject<any>([]);
   gif=new BehaviorSubject<any>([]);
  url="http://localhost:3000/Gifs";
  rootU="http://localhost:3000/";
  baseurl="http://localhost:8082/api/v1/addEmp";
  Loginurl="http://localhost:8082/api/v1/login";
  updateUrl="http://localhost:8082/api/v1/updateEmp";
  favPostUrl="http://localhost:8083/api/v1//addNote";
  getFavUrl="http://localhost:8083/api/v1//getNotes";
  delfavUrl="http://localhost:8083/api/v1//deleteGif/";
  apiKey:string;
  searchString:string;
  

  constructor(private http:HttpClient) {
   this.apiKey = "P2gwfjvjCmIPbZDSbVsJNx4K8ue1XjPH";
   }
  getList(){
    
    return this.http.get(this.url);
  }


  loginUser(user:User): Observable<Object>{
    return this.http.post(`${this.Loginurl}`,user);
  }

  createUser(user:User): Observable<Object>{
    return this.http.post(`${this.baseurl}`,user);
  }
 updatefav(fav:Fav): Observable<Object>{
    return this.http.post(`${this.favPostUrl}`,fav);
  }
  updateUser(user:User): Observable<Object>{
    return this.http.put(`${this.updateUrl}`,user);
  }
  
  saveComment(data){
    return this.http.post(this.rootU+"comments",data);
  }
  getFavList(){
    return this.http.get(`${this.getFavUrl}`);
  }
  getRecommendList(){
    return this.http.get(this.rootU+"recommend");
  }
  
  updateFav(data){
    return this.http.post(this.rootU+"favourites",data);
  }
  updateRec(data){
    return this.http.post(this.rootU+"recommend",data);
  }
  getRecList(){
    return this.http.get(this.rootU+"recommend");
  }
  delResto(id){
    return this.http.delete(`${this.delfavUrl}/${id}`)
  }
  delRec(id){
    return this.http.delete(`${this.rootU+"recommend"}/${id}`)
  }
  getCommentList(){
    return this.http.get(this.rootU+"comments");
  }


  getSomeGifs(){
    return this.http.get(`http://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}`)
    .subscribe((response:any)=> {
      this.gifs.next(response.data);
    });

  }

  getRecommendedGifs(){
    return this.http.get(`http://api.giphy.com/v1/gifs/categories?api_key=${this.apiKey}`)
    .subscribe((response:any)=> {
      this.gif.next(response.data);
    });

  }

  searchGifs(gifName: string){
    console.log(gifName);
    this.searchString=gifName;
    return this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${this.searchString}`)
    .subscribe((response:any)=> {
          console.log(response);
          this.gifs.next(response.data);
    });
}

fetchGifById(gifId: string): Observable<any> {
  return this.http.get<any>(`http://api.giphy.com/v1/gifs/${gifId}?api_key=${this.apiKey}`);
}


fetchGifByIdRec(gifId: string): Observable<any> {
  return this.http.get<any>(`http://api.giphy.com/v1/gifs/${gifId}?api_key=${this.apiKey}`);
}


getGif(){
  return this.gifs.asObservable();
}
getRecGif(){
  return this.gif.asObservable();
}

}
