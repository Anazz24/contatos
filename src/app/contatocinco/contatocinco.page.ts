import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contatocinco',
  templateUrl: './contatocinco.page.html',
  styleUrls: ['./contatocinco.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatocincoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
