import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoobComponent } from './noob.component';

describe('NoobComponent', () => {
  let component: NoobComponent;
  let fixture: ComponentFixture<NoobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
