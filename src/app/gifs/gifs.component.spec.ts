import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { GifsComponent } from './gifs.component';

describe('GifsComponent', () => {
  let component: GifsComponent;
  let fixture: ComponentFixture<GifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsComponent ],
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
    fixture = TestBed.createComponent(GifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("testing title",()=>{
    expect(component.componentName).toBe("gifs");
  })

  it("testing nav element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".navbar").textContent).toBeTruthy();
  })

   it("testing nav-item element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".nav-item").textContent).toBeTruthy();
   })
});
