import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortComponent } from './short.component';

describe('MainContentComponent', () => {
  let component: ShortComponent;
  let fixture: ComponentFixture<ShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
