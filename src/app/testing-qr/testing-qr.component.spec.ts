import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingQRComponent } from './testing-qr.component';

describe('TestingQRComponent', () => {
  let component: TestingQRComponent;
  let fixture: ComponentFixture<TestingQRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingQRComponent]
    });
    fixture = TestBed.createComponent(TestingQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
