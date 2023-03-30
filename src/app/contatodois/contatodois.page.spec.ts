import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatodoisPage } from './contatodois.page';

describe('ContatodoisPage', () => {
  let component: ContatodoisPage;
  let fixture: ComponentFixture<ContatodoisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContatodoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
