import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbordagemFamiliarPage } from './abordagem-familiar.page';

describe('AbordagemFamiliarPage', () => {
  let component: AbordagemFamiliarPage;
  let fixture: ComponentFixture<AbordagemFamiliarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbordagemFamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
