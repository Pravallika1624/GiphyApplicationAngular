import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RecupdateComponent } from './recupdate.component';

describe('RecupdateComponent', () => {
  let component: RecupdateComponent;
  let fixture: ComponentFixture<RecupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecupdateComponent ],
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
    fixture = TestBed.createComponent(RecupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
  
  it("testing title",()=>{
    expect(component.componentName).toBe("recupdate");
  })
});
