import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceSimilarityComponent } from './sentence-similarity.component';

describe('SentenceSimilarityComponent', () => {
  let component: SentenceSimilarityComponent;
  let fixture: ComponentFixture<SentenceSimilarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceSimilarityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceSimilarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
