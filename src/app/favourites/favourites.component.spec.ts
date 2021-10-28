import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("testing title",()=>{
    expect(component.componentName).toBe("favourite");
  })

  it("testing nav element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".navbar").textContent).toBeTruthy();
  })

  it("testing head element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain("Favourites");
   })

   it("testing form element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".form-inline").textContent).toBeTruthy();
   })

});
