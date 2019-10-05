import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsheetOverlayComponent } from './topsheet-overlay.component';

describe('TopsheetOverlayComponent', () => {
  let component: TopsheetOverlayComponent;
  let fixture: ComponentFixture<TopsheetOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsheetOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsheetOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
