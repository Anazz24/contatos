import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatotresPage } from './contatotres.page';

describe('ContatotresPage', () => {
  let component: ContatotresPage;
  let fixture: ComponentFixture<ContatotresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContatotresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
