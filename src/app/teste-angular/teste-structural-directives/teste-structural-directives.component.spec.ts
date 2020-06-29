import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteStructuralDirectivesComponent } from './teste-structural-directives.component';

describe('TesteStructuralDirectivesComponent', () => {
  let component: TesteStructuralDirectivesComponent;
  let fixture: ComponentFixture<TesteStructuralDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteStructuralDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
