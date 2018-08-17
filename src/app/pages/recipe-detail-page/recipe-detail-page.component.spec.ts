import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailPageComponent } from './recipe-detail-page.component';

describe('RecipeDetailPageComponent', () => {
  let component: RecipeDetailPageComponent;
  let fixture: ComponentFixture<RecipeDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
