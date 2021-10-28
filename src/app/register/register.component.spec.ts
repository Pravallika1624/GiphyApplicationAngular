import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("testing title",()=>{
    expect(component.componentName).toBe("register")
  })

  it("testing nav element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".navbar").textContent).toBeTruthy();
  })

  it("testing head element",()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain("Register New User");
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
