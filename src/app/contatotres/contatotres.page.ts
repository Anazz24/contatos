import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contatotres',
  templateUrl: './contatotres.page.html',
  styleUrls: ['./contatotres.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatotresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
