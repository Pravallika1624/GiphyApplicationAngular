import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Subscription } from 'rxjs';
import { Route, Router, NavigationExtras, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription;

  componentName="dashboard";
  
  constructor(private rest: UserserviceService, private router: Router, private route: ActivatedRoute) { }

  recommends_list: any = [];
  ngOnInit(): void {
    this.rest.getSomeGifs();
    this.subscription = this.rest.getGif().subscribe((response: any) => {
      this.gifs = response;
    });


  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
  searching() {
    this.router.navigate([{}, 'search'], { relativeTo: this.route });
  }
}
