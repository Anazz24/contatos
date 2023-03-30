import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatoquatroPage } from './contatoquatro.page';

describe('ContatoquatroPage', () => {
  let component: ContatoquatroPage;
  let fixture: ComponentFixture<ContatoquatroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContatoquatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
