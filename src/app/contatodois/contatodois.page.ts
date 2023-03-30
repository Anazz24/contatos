import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contatodois',
  templateUrl: './contatodois.page.html',
  styleUrls: ['./contatodois.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatodoisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
