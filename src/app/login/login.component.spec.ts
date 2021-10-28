import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("testing title",()=>{
    expect(component.componentName).toBe("login");
  })

  it("testing nav element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".navbar").textContent).toBeTruthy();
  })

  it("testing head element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain("Login User");
   })

   it("testing form element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".form-group").textContent).toBeTruthy();
   })

   it("testing button",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".btn").textContent).toBeTruthy();
   })
});
