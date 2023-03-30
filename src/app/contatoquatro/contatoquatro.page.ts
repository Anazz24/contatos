import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contatoquatro',
  templateUrl: './contatoquatro.page.html',
  styleUrls: ['./contatoquatro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatoquatroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
