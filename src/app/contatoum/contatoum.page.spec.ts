import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatoumPage } from './contatoum.page';

describe('ContatoumPage', () => {
  let component: ContatoumPage;
  let fixture: ComponentFixture<ContatoumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContatoumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
