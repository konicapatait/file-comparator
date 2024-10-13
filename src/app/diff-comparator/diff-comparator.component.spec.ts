import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffComparatorComponent } from './diff-comparator.component';

describe('DiffComparatorComponent', () => {
  let component: DiffComparatorComponent;
  let fixture: ComponentFixture<DiffComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffComparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
