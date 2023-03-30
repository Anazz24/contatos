import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatocincoPage } from './contatocinco.page';

describe('ContatocincoPage', () => {
  let component: ContatocincoPage;
  let fixture: ComponentFixture<ContatocincoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContatocincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
