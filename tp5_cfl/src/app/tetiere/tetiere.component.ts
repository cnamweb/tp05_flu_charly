import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PanierService } from '../panier.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tetiere',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent {
  constructor(private panierService: PanierService) { }

  get getNbProduits() {
    return this.panierService.getNbProduits;
  }
}
